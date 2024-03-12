import { SimpleForm, TextInput, ReferenceArrayInput, Create, required, SelectArrayInput } from 'react-admin';

const FlyCreate = () => (
  <Create title="Create Fly">
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="description" validate={[required()]} fullWidth />
      <ReferenceArrayInput source="types" reference="fly-types">
        <SelectArrayInput validate={[required()]} fullWidth />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="imitatees" reference="imitatees">
        <SelectArrayInput validate={[required()]} fullWidth />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);

export default FlyCreate;
