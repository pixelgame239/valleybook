// src/AdminApp.js
import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./admin/DataProvider.js"; // Import Data Provider

// Import các components hiển thị dữ liệu
import { AccountCreate, AccountList, AccountEdit } from "./admin/Accounts.jsx"; // <-- Import AccountList
import { BookList, BookEdit, BookCreate } from "./admin/Books"; // <-- IMPORT BookList

// Bạn sẽ cần thêm Auth Provider sau này cho việc đăng nhập admin
// import { authProvider } from './admin/dataProvider';

function AdminApp() {
  return (
    <Admin dataProvider={dataProvider} basename="/admin">
      {/* Định nghĩa Resource cho bảng 'accounts' */}
      {/* 'name="accounts"' phải khớp với tên bảng trong Supabase */}
      <Resource
        name="accounts"
        list={AccountList}
        edit={AccountEdit} // <-- Thêm edit component
        create={AccountCreate} // <-- Thêm create component
      />
      {/* <-- Thêm/Bỏ comment dòng này */}
      <Resource
        name="books"
        list={BookList}
        edit={BookEdit} // <-- Thêm edit component cho books
        create={BookCreate} // <-- Thêm create component cho books
      />{" "}
      {/* <-- THÊM Resource cho books */}
      {/* Các Resource khác sẽ thêm vào đây sau */}
      {/* Ví dụ cho bảng 'messages': */}
      {/* <Resource name="messages" list={MessageList} /> */}
    </Admin>
  );
}

export default AdminApp;
