import { SimpleForm, TextInput, Create, required } from 'react-admin';

const ImitateeCreate = () => (
  <Create title="Create Imitatee">
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="description" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
);

export default ImitateeCreate;
