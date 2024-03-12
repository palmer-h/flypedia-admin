import { List, Datagrid, TextField, ChipField, SingleFieldList, ArrayField } from 'react-admin';

const FlyList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
      <ArrayField source="types">
        <SingleFieldList linkType={false}>
            <ChipField source="name" size="small" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="imitatees">
        <SingleFieldList linkType={false}>
            <ChipField source="name" size="small" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);

export default FlyList;
