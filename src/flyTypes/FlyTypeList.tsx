import { List, Datagrid, TextField } from 'react-admin';

const FlyTypeList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export default FlyTypeList;
