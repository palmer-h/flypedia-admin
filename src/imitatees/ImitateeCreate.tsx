import { SimpleForm, TextInput, Create, required } from 'react-admin';

const ImitateeCreate = () => (
  <Create title="Create Imitatee">
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default ImitateeCreate;
