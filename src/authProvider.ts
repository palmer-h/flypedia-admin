import type { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const request = new Request(`${import.meta.env.VITE_API_URL}/auth/authenticate`, {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    const response = await fetch(request);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }
    const { accessToken, refreshToken, userId, email } = await response.json();
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', email);
    return { redirectTo: '/flies' };
  },
  logout: () => {
    clearLocalStorage();
    return Promise.resolve();
  },
  checkAuth: () => localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')
    ? Promise.resolve()
    : Promise.reject({ redirectTo: '/login' }),
  checkError: async (error) => {
    const { status } = error;

    if (status !== 401) {
      return Promise.resolve();
    }

    clearLocalStorage();
    return Promise.reject();
  },
  getIdentity: () => {
    const email: string | null = localStorage.getItem('username');
    const id: string | null = localStorage.getItem('userId');
    if (!email || !id) {
      return Promise.reject();
    }
    return Promise.resolve({ id, fullName: email });
  },
  getPermissions: () => Promise.resolve(''),
};

const clearLocalStorage = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userId');
  localStorage.removeItem('username');
};

export default authProvider;
