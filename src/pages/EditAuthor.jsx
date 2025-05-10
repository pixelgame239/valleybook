import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../backend/initSupabase";
import "./EditAuthor.css";

function EditAuthor() {
  const { id } = useParams(); // id corresponds to author_id
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);
  const [formData, setFormData] = useState({
    author_id: "",
    author_name: "",
    created_at: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchAuthor() {
      const { data, error } = await supabase
        .from("authors")
        .select("*")
        .eq("author_id", id)
        .single();
      if (error) {
        console.error("Error fetching author:", error);
        setErrorMessage("Không tìm thấy thông tin tác giả.");
      } else if (data) {
        setAuthor(data);
        setFormData({
          author_id: data.author_id || "",
          author_name: data.author_name || "",
          created_at: data.created_at || "",
        });
      }
    }
    fetchAuthor();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Exclude author_id and created_at from update
    const { author_id, created_at, ...updatedData } = formData;
    const { error } = await supabase
      .from("authors")
      .update(updatedData)
      .eq("author_id", id);
    if (error) {
      setErrorMessage("Có lỗi xảy ra khi cập nhật tác giả.");
      console.error("Update error:", error);
    } else {
      navigate("/admin/authors");
    }
  };

  if (errorMessage) {
    return <div className="edit-author-container">{errorMessage}</div>;
  }

  if (!author) {
    return <div className="edit-author-container">Loading...</div>;
  }

  return (
    <div className="edit-author-container">
      <h2>Chỉnh sửa Tác giả</h2>
      <form onSubmit={handleSubmit} className="edit-author-form">
        <div className="form-group">
          <label htmlFor="author_id">Author ID (không thể chỉnh sửa)</label>
          <input
            type="text"
            id="author_id"
            name="author_id"
            value={formData.author_id}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="author_name">Author Name</label>
          <input
            type="text"
            id="author_name"
            name="author_name"
            value={formData.author_name}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

export default EditAuthor;
