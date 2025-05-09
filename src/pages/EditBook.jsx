import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBookData } from "../backend/getBookData";
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
    // ... add other editable fields as needed
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
          // ... fill in other fields if present
        });
      } else {
        setErrorMessage("Không tìm thấy thông tin sách.");
      }
    }
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Remove username from updated data (can't be edited)
    const { username, ...updatedData } = formData;
    const { error } = await supabase
      .from("books")
      .update(updatedData)
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
          <label htmlFor="url_image">URL ảnh</label>
          <input
            type="text"
            id="url_image"
            name="url_image"
            value={formData.url_image}
            onChange={handleChange}
            required
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

        {/* Add more fields as needed */}
        <button type="submit" className="submit-btn">
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

export default EditBook;
