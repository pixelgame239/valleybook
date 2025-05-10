import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../backend/initSupabase";
import "./EditGenre.css";

function EditGenre() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [genre, setGenre] = useState(null);
  const [formData, setFormData] = useState({
    genre_name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchGenre() {
      const { data, error } = await supabase
        .from("genres")
        .select("*")
        .eq("genre_name", id)
        .single();
      if (error || !data) {
        setErrorMessage("Không tìm thấy thông tin thể loại.");
      } else {
        setGenre(data);
        setFormData({ genre_name: data.genre_name || "" });
      }
    }
    fetchGenre();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("genres")
      .update({ genre_name: formData.genre_name })
      .eq("genre_name", id);
    if (error) {
      setErrorMessage("Có lỗi xảy ra khi cập nhật thể loại.");
      console.error("Update error:", error);
    } else {
      navigate("/admin/genres");
    }
  };

  if (errorMessage) {
    return <div className="edit-genre-container">{errorMessage}</div>;
  }

  if (!genre) {
    return <div className="edit-genre-container">Loading...</div>;
  }

  return (
    <div className="edit-genre-container">
      <h2>Chỉnh sửa thể loại</h2>
      <form onSubmit={handleSubmit} className="edit-genre-form">
        <div className="form-group">
          <label htmlFor="genre_name">Tên thể loại</label>
          <input
            type="text"
            id="genre_name"
            name="genre_name"
            value={formData.genre_name}
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

export default EditGenre;
