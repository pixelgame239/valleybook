// src/admin/books.js
import React from "react";
import EditBook from "../pages/EditBook";
// Import các components cần thiết cho List, Edit, Create và các input
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  UrlField,
  ImageField,
  useRecordContext,
  Edit, // <-- Import Edit
  Create, // <-- Import Create
  SimpleForm, // <-- Import SimpleForm
  TextInput, // <-- Import TextInput
  NumberInput, // <-- Import NumberInput
  // BooleanInput nếu có trường boolean
  // ReferenceInput nếu có khóa ngoại (ví dụ: author_id)
  // ImageInput nếu muốn upload ảnh thay vì chỉ lưu URL
} from "react-admin";

// --- CUSTOM FIELD COMPONENT ĐỂ CẮT NGẮN VĂN BẢN (giữ nguyên) ---
const TruncatedTextField = ({ source, maxLength = 100 }) => {
  const record = useRecordContext();
  if (!record) return null;
  const value = record[source];
  if (value == null || typeof value !== "string") return <span></span>;
  const truncatedValue =
    value.length > maxLength ? value.substring(0, maxLength) + "..." : value;
  return <span>{truncatedValue}</span>;
};

// Component hiển thị danh sách sách (giữ nguyên, đã dùng TruncatedTextField)
export const BookList = (props) => (
  <List {...props}>
    <Datagrid
      rowClick={(id, basePath, record) => {
        // Always navigate to the edit view for the clicked record.
        return "edit";
      }}
    >
      <TextField source="book_id" label="Book ID" />
      <TextField source="book_name" label="Book Name" />
      <TruncatedTextField
        source="description"
        label="Description"
        maxLength={200}
      />
      <NumberField source="price" label="Price" />
      <NumberField source="quantity" label="Quantity" />
      <NumberField source="discount" label="Discount" />
      <TextField source="author_id" label="Author ID" />
      <DateField source="created_at" label="Created At" showTime />
      <ImageField source="url_image" label="Image" title="book_name" />
      <TextField source="reviews" label="Reviews" />
    </Datagrid>
  </List>
);

// --- Component chỉnh sửa sách ---
export const BookEdit = () => {
  return <EditBook />;
};

// --- Component thêm mới sách ---
export const BookCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* book_id là khóa chính, bắt buộc khi tạo mới */}
      {/* <TextInput source="book_id" required label="Book ID" /> */}
      {/* book_name cũng có thể là bắt buộc */}
      <TextInput source="book_name" required label="Book Name" />
      <TextInput source="description" label="Description" multiline />
      {/* Có thể đặt giá trị mặc định cho các trường số */}
      <NumberInput source="price" label="Price" defaultValue={0} />
      <NumberInput source="quantity" label="Quantity" defaultValue={0} />
      <NumberInput source="discount" label="Discount" defaultValue={0} />
      <TextInput source="author_id" label="Author ID" />
      <TextInput source="url_image" label="Image URL" />
      <TextInput source="reviews" label="Reviews" multiline />
      {/* created_at sẽ được database tự set */}
    </SimpleForm>
  </Create>
);

// Export tất cả các components
