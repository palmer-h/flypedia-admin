import { TextField, Show, SimpleShowLayout, DateField } from 'react-admin';

const FlyTypeShow = () => (
  <Show title="Fly Type">
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="id" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export default FlyTypeShow;
