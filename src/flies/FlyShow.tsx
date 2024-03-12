import { Datagrid, TextField, Show, SimpleShowLayout, ArrayField, DateField, SingleFieldList, ChipField } from 'react-admin';

const FlyShow = () => (
  <Show title="Fly">
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <ArrayField source="types" label="Types">
        <SingleFieldList resource="fly-types">
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="imitatees" label="Imitatees" >
        <SingleFieldList resource="imitatees">
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="id" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export default FlyShow;
