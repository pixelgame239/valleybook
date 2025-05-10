// src/admin/books.js
import React from "react";
import EditBook from "../pages/EditBook";
import { uploadImage } from "../components/UploadToSupabase";
import { useState } from "react";

// Import các components cần thiết cho List, Edit, Create và các input
import {
  useNotify,
  useRedirect,
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  UrlField,
  ImageField,
  ImageInput,
  useRecordContext,
  Edit, // <-- Import Edit
  Create, // <-- Import Create
  SimpleForm, // <-- Import SimpleForm
  TextInput, // <-- Import TextInput
  NumberInput, // <-- Import NumberInput
  // BooleanInput nếu có trường boolean
  // ReferenceInput nếu có khóa ngoại (ví dụ: author_id)
  // ImageInput nếu muốn upload ảnh thay vì chỉ lưu URL
  ReferenceInput,
  AutocompleteInput,
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
export const BookCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const [imageFile, setImageFile] = useState(null);

  return (
    <Create
      {...props}
      transform={async (data) => {
        try {
          if (imageFile) {
            const imageUrl = await uploadImage(imageFile);
            data.url_image = imageUrl;
          }
          delete data.book_id; // Nếu Supabase tự sinh
          return data;
        } catch (error) {
          notify("Upload ảnh thất bại", { type: "error" });
          throw error;
        }
      }}
      onSuccess={() => {
        notify("Tạo sách thành công");
        redirect("list", "books");
      }}
    >
      <SimpleForm>
        <TextInput source="book_name" required label="Book Name" />
        <TextInput source="description" label="Description" multiline />
        <NumberInput source="price" label="Price" defaultValue={0} />
        <NumberInput source="quantity" label="Quantity" defaultValue={0} />
        <NumberInput source="discount" label="Discount" defaultValue={0} />
        <ReferenceInput source="author_id" reference="authors" label="Author">
          <AutocompleteInput optionText="author_name" />
        </ReferenceInput>

        {/* Upload ảnh: dùng input HTML thuần */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0])}
        />
      </SimpleForm>
    </Create>
  );
};
// Export tất cả các components
