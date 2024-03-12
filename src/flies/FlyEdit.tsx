import { Edit, SimpleForm, TextInput, DateInput, ReferenceArrayInput, SelectArrayInput, required } from 'react-admin';

const FlyEdit = () => {
  const formatArrayInputValue =
    data => data ? data.map(x => typeof x === 'string' ? x : x.id) : [];

  const transformSubmittedData = data => data ? ({
    ...data,
    types: data.types.map(x => typeof x === 'string' ? x : x.id),
    imitatees: data.imitatees.map(x => typeof x === 'string' ? x : x.id),
  }) : null;

  return (
    <Edit title="Edit Fly" transform={transformSubmittedData}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="description" validate={[required()]} fullWidth />
        <ReferenceArrayInput source="types" reference="fly-types">
          <SelectArrayInput format={formatArrayInputValue} validate={[required()]} fullWidth />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="imitatees" reference="imitatees">
          <SelectArrayInput format={formatArrayInputValue} validate={[required()]} fullWidth />
        </ReferenceArrayInput>
        <TextInput source="id" fullWidth disabled />
        <DateInput source="createdAt" disabled />
        <DateInput source="updatedAt" disabled />
      </SimpleForm>
    </Edit>
  );
};

export default FlyEdit;
