import { SimpleForm, TextInput, ReferenceArrayInput, Create, required, SelectArrayInput } from 'react-admin';

const FlyCreate = () => (
  <Create title="Create Fly">
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
      <ReferenceArrayInput source="types" reference="fly-types">
        <SelectArrayInput />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="imitatees" reference="imitatees">
        <SelectArrayInput />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);

export default FlyCreate;
