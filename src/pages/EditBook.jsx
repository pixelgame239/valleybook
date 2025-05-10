import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBookData } from "../backend/getBookData";
import { uploadImage } from "../components/UploadToSupabase"; // Import hàm uploadImage
import supabase from "../backend/initSupabase";
import "./EditBook.css";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [formData, setFormData] = useState({
    book_name: "",
    url_image: "",
    price: "",
    description: "",
    quantity: "", // Added field for quantity
    imageFile: null, // Field for the image file
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchBook() {
      const data = await getSingleBookData(id);
      if (data) {
        setBook(data);
        setFormData({
          book_name: data.book_name || "",
          url_image: data.url_image || "",
          price: data.price || "",
          description: data.description || "",
          quantity: data.quantity || "", // Set quantity from fetched data
          imageFile: null, // Reset image field on load
        });
      } else {
        setErrorMessage("Không tìm thấy thông tin sách.");
      }
    }
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile") {
      // Handle file selection
      setFormData((prev) => ({ ...prev, imageFile: files[0] }));
    } else {
      // Handle other input fields
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let updatedData = { ...formData };
    // If there's a new image, upload it to Supabase and get the URL
    if (formData.imageFile) {
      const imageUrl = await uploadImage(formData.imageFile);
      if (imageUrl) {
        updatedData.url_image = imageUrl;
      } else {
        setErrorMessage("Lỗi khi tải lên ảnh.");
        return;
      }
    }

    // Remove username from updated data (can't be edited)
    const { imageFile, ...bookDataToUpdate } = updatedData;

    // Update the book in the database
    const { error } = await supabase
      .from("books")
      .update(bookDataToUpdate)
      .eq("book_id", id);
    if (error) {
      setErrorMessage("Có lỗi xảy ra khi cập nhật sách.");
      console.error("Update error:", error);
    } else {
      navigate("/admin/books");
    }
  };

  if (errorMessage) {
    return <div className="edit-book-container">{errorMessage}</div>;
  }

  if (!book) {
    return <div className="edit-book-container">Loading...</div>;
  }

  return (
    <div className="edit-book-container">
      <h2>Chỉnh sửa sách</h2>
      <form onSubmit={handleSubmit} className="edit-book-form">
        <div className="form-group">
          <label htmlFor="book_name">Tên sách</label>
          <input
            type="text"
            id="book_name"
            name="book_name"
            value={formData.book_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="url_image">Ảnh hiện tại</label>
          {formData.url_image && (
            <div>
              <img
                src={formData.url_image}
                alt="Book cover"
                style={{ width: "150px", height: "auto", marginBottom: "10px" }}
              />
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="imageFile">Chọn ảnh mới (nếu có)</label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Giá</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Số lượng</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Mô tả</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
          />
        </div>

        <button type="submit" className="submit-btn">
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

export default EditBook;
