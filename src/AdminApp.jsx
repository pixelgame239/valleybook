// src/AdminApp.js
import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./admin/DataProvider.js"; // Import Data Provider
// Import existing components
import { AccountCreate, AccountList, AccountEdit } from "./admin/Accounts.jsx";
import { BookList, BookEdit, BookCreate } from "./admin/Books.jsx";
import { OrderList, OrderEdit, OrderCreate } from "./admin/Orders.jsx";
// Import new components for voucher, genres, and authors (create these files accordingly)
import { VoucherList, VoucherEdit, VoucherCreate } from "./admin/Voucher.jsx";
import { GenreList, GenreEdit, GenreCreate } from "./admin/Genres.jsx";
import { AuthorList, AuthorEdit, AuthorCreate } from "./admin/Authors.jsx";

function AdminApp() {
  return (
    <Admin dataProvider={dataProvider} basename="/admin">
      {/* Resource for accounts */}
      <Resource
        name="accounts"
        list={AccountList}
        edit={AccountEdit}
        create={AccountCreate}
      />
      {/* Resource for books */}
      <Resource
        name="books"
        list={BookList}
        edit={BookEdit}
        create={BookCreate}
      />
      {/* Resource for orders */}
      <Resource
        name="orders"
        list={OrderList}
        edit={OrderEdit}
        create={OrderCreate}
      />
      {/* Resource for voucher */}
      <Resource
        name="voucher"
        list={VoucherList}
        edit={VoucherEdit}
        create={VoucherCreate}
      />
      {/* Resource for genres */}
      <Resource
        name="genres"
        list={GenreList}
        edit={GenreEdit}
        create={GenreCreate}
      />
      {/* Resource for authors */}
      <Resource
        name="authors"
        list={AuthorList}
        edit={AuthorEdit}
        create={AuthorCreate}
      />
      {/* Additional resources can be added here */}
    </Admin>
  );
}

export default AdminApp;
