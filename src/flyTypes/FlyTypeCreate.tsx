import { SimpleForm, TextInput, Create, required } from 'react-admin';

const FlyTypeCreate = () => (
  <Create title="Create Fly Type">
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="description" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
);

export default FlyTypeCreate;
