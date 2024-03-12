import { SimpleForm, TextInput, Create, required } from 'react-admin';

const FlyTypeCreate = () => (
  <Create title="Create Fly Type">
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default FlyTypeCreate;
