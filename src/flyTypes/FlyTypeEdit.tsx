import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const FlyTypeEdit = () => (
  <Edit title="Edit Fly Type">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="id" disabled />
      <DateInput source="createdAt" disabled />
      <DateInput source="updatedAt" disabled />
    </SimpleForm>
  </Edit>
);

export default FlyTypeEdit;
