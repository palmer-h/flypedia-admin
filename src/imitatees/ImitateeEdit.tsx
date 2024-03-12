import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const ImitateeEdit = () => (
  <Edit title="Edit Imitatee">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="id" disabled />
      <DateInput source="createdAt" disabled />
      <DateInput source="updatedAt" disabled />
    </SimpleForm>
  </Edit>
);

export default ImitateeEdit;
