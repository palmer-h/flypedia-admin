import { TextField, Show, SimpleShowLayout, DateField } from 'react-admin';

const ImitateeShow = () => (
  <Show title="Imitatee">
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="id" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export default ImitateeShow;
