import { List, Datagrid, TextField } from 'react-admin';

const ImitateeList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export default ImitateeList;
