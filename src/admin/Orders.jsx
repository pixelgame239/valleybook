// src/admin/orders.js
import React from "react";
// Import các components cần thiết
import {
  List,
  Datagrid,
  TextField,
  DateField, // Cho created_at
  NumberField, // Cho total_price
  Edit, // Cho trang Edit
  Create, // Cho trang Create
  SimpleForm, // Form layout
  TextInput, // Cho văn bản, URL, email, status, payment_method
  NumberInput, // Cho số
  // Nếu order_details là JSON, có thể cần import JsonField hoặc tạo custom field
  // Nếu status hoặc payment_method là Enum/Select, có thể dùng SelectInput
  // Nếu username tham chiếu user, có thể dùng ReferenceField/ReferenceInput
} from "react-admin";

// Component hiển thị danh sách đơn hàng
export const OrderList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      {" "}
      {/* rowClick="edit" để có thể click vào dòng chỉnh sửa */}
      {/* source="" phải khớp với tên cột trong bảng 'orders' */}
      <TextField source="order_id" label="Order ID" />
      <TextField source="username" label="Username" /> {/* Hiển thị username */}
      <DateField source="created_at" label="Created At" showTime />{" "}
      {/* Hiển thị ngày tạo */}
      {/* order_details có thể dài hoặc phức tạp, ban đầu dùng TextField */}
      {/* Nếu là JSON, nên dùng JsonField (cần cài đặt ra-json-ui) hoặc custom field */}
      <TextField source="order_details" label="Details" />
      <NumberField
        source="total_price"
        label="Total Price"
        options={{ style: "currency", currency: "VND" }}
      />{" "}
      {/* Hiển thị tiền tệ */}
      <TextField source="status" label="Status" />
      <TextField source="payment_method" label="Payment Method" />
    </Datagrid>
  </List>
);

// Component chỉnh sửa đơn hàng
export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* order_id là khóa chính, hiển thị nhưng disabled khi chỉnh sửa */}
      <TextInput source="order_id" disabled label="Order ID (Primary Key)" />
      {/* username: hiện tại dùng TextInput, có thể nâng cấp ReferenceInput */}
      <TextInput source="username" label="Username" />
      {/* created_at: không chỉnh sửa */}
      {/* order_details: dùng TextInput, multiline nếu nội dung dài */}
      <TextInput source="order_details" label="Order Details" multiline />
      {/* total_price: dùng NumberInput */}
      <NumberInput source="total_price" label="Total Price" />
      {/* status: dùng TextInput, có thể nâng cấp SelectInput với các lựa chọn */}
      <TextInput source="status" label="Status" />
      {/* payment_method: dùng TextInput, có thể nâng cấp SelectInput */}
      <TextInput source="payment_method" label="Payment Method" />
    </SimpleForm>
  </Edit>
);

// Component thêm mới đơn hàng
export const OrderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* order_id: bắt buộc khi tạo mới */}
      <TextInput source="order_id" disabled required label="Order ID" />
      {/* username: có thể bắt buộc hoặc tự động điền nếu liên kết với user đăng nhập */}
      <TextInput source="username" label="Username" />
      {/* created_at: database tự điền */}
      <TextInput source="order_details" label="Order Details" multiline />
      {/* total_price: bắt buộc và có thể có giá trị mặc định */}
      <NumberInput
        source="total_price"
        required
        label="Total Price"
        defaultValue={0}
      />
      {/* status: có thể bắt buộc, giá trị mặc định (ví dụ: 'pending') */}
      <TextInput
        source="status"
        required
        label="Status"
        defaultValue="pending"
      />
      {/* payment_method: có thể bắt buộc */}
      <TextInput source="payment_method" label="Payment Method" />
    </SimpleForm>
  </Create>
);
