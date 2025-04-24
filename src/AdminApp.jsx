// src/AdminApp.js
import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./admin/DataProvider.js"; // Import Data Provider

// Import các components hiển thị dữ liệu
import { AccountCreate, AccountList, AccountEdit } from "./admin/Accounts.jsx"; // <-- Import AccountList
import { BookList, BookEdit, BookCreate } from "./admin/Books.jsx"; // <-- IMPORT BookList
import { OrderList, OrderEdit, OrderCreate } from "./admin/Orders.jsx"; // <-- IMPORT components cho orders

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
      {/* ĐỊNH NGHĨA RESOURCE CHO BẢNG 'orders' */}
      {/* 'name="orders"' phải khớp với tên bảng trong Supabase */}
      <Resource
        name="orders"
        list={OrderList} // <-- Thêm list component cho orders
        edit={OrderEdit} // <-- Thêm edit component cho orders
        create={OrderCreate} // <-- Thêm create component cho orders
      />
      {/* Các Resource khác sẽ thêm vào đây sau */}
      {/* Ví dụ cho bảng 'messages': */}
      {/* <Resource name="messages" list={MessageList} /> */}
    </Admin>
  );
}

export default AdminApp;
