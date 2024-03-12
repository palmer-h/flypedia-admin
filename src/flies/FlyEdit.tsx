import { Edit, SimpleForm, TextInput, DateInput, ReferenceArrayInput, SelectArrayInput } from 'react-admin';

const FlyEdit = () => {
  const formatArrayInputValue =
    data => data.map(x => typeof x === 'string' ? x : x.id);

  const transformSubmittedData = data => ({
    ...data,
    types: data.types.map(x => typeof x === 'string' ? x : x.id),
    imitatees: data.imitatees.map(x => typeof x === 'string' ? x : x.id),
  });

  return (
    <Edit title="Edit Fly" transform={transformSubmittedData}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="description" />
        <ReferenceArrayInput source="types" reference="fly-types">
          <SelectArrayInput format={formatArrayInputValue} />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="imitatees" reference="imitatees">
          <SelectArrayInput format={formatArrayInputValue} />
        </ReferenceArrayInput>
        <TextInput source="id" disabled />
        <DateInput source="createdAt" disabled />
        <DateInput source="updatedAt" disabled />
      </SimpleForm>
    </Edit>
  );
};

export default FlyEdit;
