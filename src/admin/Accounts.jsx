// src/admin/accounts.js
import React from "react";
import EditAccount from "../pages/EditAccount";
import { useNavigate } from "react-router-dom";

// Import các components cần thiết cho List, Edit, Create và các input
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit, // Import Edit
  Create, // Import Create
  SimpleForm, // Import SimpleForm (hoặc TabbedForm)
  TextInput, // Import các loại Input
  BooleanInput,
  useRedirect,
} from "react-admin";

// Component hiển thị danh sách tài khoản (giữ nguyên)
export const AccountList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      {" "}
      {/* rowClick="edit" cho phép click vào dòng để chỉnh sửa */}
      {/* source="" phải khớp với tên cột trong bảng 'accounts' */}
      {/* Hiển thị username làm trường ID trong danh sách */}
      <TextField source="username" label="Username (ID)" />
      <EmailField source="email" /> {/* Ví dụ cột Email */}
      {/* <TextField source="created_at" /> Có thể không cần hiển thị trong danh sách chính*/}
      <TextField source="phone_number" />
      <TextField source="address" />
      {/* Sử dụng BooleanField nếu muốn hiển thị checkbox/icon thay vì true/false */}
      {/* Thêm các TextField hoặc loại Field khác */}
    </Datagrid>
  </List>
);

// Component chỉnh sửa tài khoản
export const AccountEdit = () => {
  return <EditAccount />;
};

// Component thêm mới tài khoản
export const AccountCreate = (props) => {
  const redirect = useRedirect();

  const handleSuccess = () => {
    // Force redirect to the account list view
    redirect("list");
  };

  return (
    <Create {...props}>
      <SimpleForm redirect="list" onSuccess={handleSuccess}>
        <TextInput source="username" required />
        <TextInput source="password" required />
        <TextInput source="email" required type="email" label="Email" />
        <TextInput source="phone_number" />
        <TextInput source="address" />
      </SimpleForm>
    </Create>
  );
};
