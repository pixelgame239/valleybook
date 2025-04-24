// src/admin/accounts.js
import React from "react";
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
      <TextField source="name_alias" />
      <TextField source="phone_number" />
      {/* Sử dụng BooleanField nếu muốn hiển thị checkbox/icon thay vì true/false */}
      <TextField source="black_list" />
      {/* Thêm các TextField hoặc loại Field khác */}
    </Datagrid>
  </List>
);

// Component chỉnh sửa tài khoản
export const AccountEdit = (props) => (
  <Edit {...props}>
    {" "}
    {/* props từ react-admin (chứa id của record) */}
    <SimpleForm>
      {" "}
      {/* Form đơn giản */}
      {/* Trường khóa chính thường không được chỉnh sửa hoặc là disabled */}
      {/* source="username" ở đây là tên cột trong database */}
      <TextInput source="username" disabled label="Username (Primary Key)" />
      {/* Các input cho các trường có thể chỉnh sửa */}
      <EmailField source="email" />
      <TextInput source="name_alias" />
      <TextInput source="phone_number" />
      {/* Input cho trường boolean (black_list) */}
      <BooleanInput source="black_list" />
      {/* created_at thường được quản lý bởi database, không cần input */}
    </SimpleForm>
  </Edit>
);

// Component thêm mới tài khoản
export const AccountCreate = (props) => (
  <Create {...props}>
    {" "}
    {/* props từ react-admin */}
    <SimpleForm>
      {" "}
      {/* Form đơn giản */}
      {/* Trường khóa chính (username) cần được nhập khi tạo mới và là bắt buộc */}
      <TextInput source="username" required />{" "}
      {/* required làm trường bắt buộc */}
      {/* Các input cho các trường khi tạo mới */}
      <TextInput source="email" required type="email" label="Email" />{" "}
      {/* required làm trường bắt buộc */}
      <TextInput source="name_alias" />
      <TextInput source="phone_number" />
      {/* Trường boolean khi tạo mới, có thể set giá trị mặc định */}
      <BooleanInput source="black_list" defaultValue={false} />{" "}
      {/* Set giá trị mặc định */}
      {/* created_at sẽ được database tự set */}
    </SimpleForm>
  </Create>
);

// Export tất cả các components
// export { AccountList, AccountEdit, AccountCreate }; // Cách export khác
