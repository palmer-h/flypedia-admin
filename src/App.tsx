import {
  Admin,
  Resource,
  DataProvider,
  defaultDarkTheme,
} from 'react-admin';
import flypediaApiDataProvider from './dataProvider';
import authProvider from './authProvider';
import FlyList from './flies/FlyList';
import FlyTypeList from './flyTypes/FlyTypeList';
import ImitateeList from './imitatees/ImitateeList';
import FlyEdit from './flies/FlyEdit';
import FlyTypeEdit from './flyTypes/FlyTypeEdit';
import FlyShow from './flies/FlyShow';
import ImitateeEdit from './imitatees/ImitateeEdit';
import ImitateeShow from './imitatees/ImitateeShow';
import FlyTypeShow from './flyTypes/FlyTypeShow';
import FlyTypeCreate from './flyTypes/FlyTypeCreate';
import ImitateeCreate from './imitatees/ImitateeCreate';
import FlyCreate from './flies/FlyCreate';

const apiUrl: string | undefined = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error('API URL environment variable is not set');
}

const dataProvider: DataProvider = flypediaApiDataProvider(apiUrl);

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} theme={defaultDarkTheme}>
    <Resource
      name="flies"
      list={FlyList}
      edit={FlyEdit}
      show={FlyShow}
      create={FlyCreate}
    />
    <Resource
      name="fly-types"
      list={FlyTypeList}
      edit={FlyTypeEdit}
      show={FlyTypeShow}
      create={FlyTypeCreate}
    />
    <Resource
      name="imitatees"
      list={ImitateeList}
      edit={ImitateeEdit}
      show={ImitateeShow}
      create={ImitateeCreate}
    />
  </Admin>
);
