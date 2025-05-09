import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const GenreList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="genre_name" label="Genre Name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const GenreEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="genre_name" label="Genre Name" />
    </SimpleForm>
  </Edit>
);

export const GenreCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="genre_name" label="Genre Name" />
    </SimpleForm>
  </Create>
);
