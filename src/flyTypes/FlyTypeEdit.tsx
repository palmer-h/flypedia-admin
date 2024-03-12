import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const FlyTypeEdit = () => (
  <Edit title="Edit Fly Type">
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <TextInput source="description" fullWidth />
      <TextInput source="id" disabled fullWidth />
      <DateInput source="createdAt" disabled />
      <DateInput source="updatedAt" disabled />
    </SimpleForm>
  </Edit>
);

export default FlyTypeEdit;
