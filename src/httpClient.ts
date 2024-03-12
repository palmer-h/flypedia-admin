import { fetchUtils } from 'ra-core';

const httpClient = (
  url: string, options?: { headers?: Headers, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: any }
): Promise<{
  status: number;
  headers: Headers;
  body: string;
  json: any;
}> => {
  const config = options || {};
  if (!config.headers) {
    config.headers = new Headers({ Accept: 'application/json' });
  }
  if (!config.method) {
    config.method = 'GET';
  }
  const token = localStorage.getItem('accessToken');
  config.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

export default httpClient;
