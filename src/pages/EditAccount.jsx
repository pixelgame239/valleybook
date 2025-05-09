import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../backend/initSupabase";
import { getUserDataByUsername } from "../backend/userData"; // Updated import
import "./EditAccount.css";

function EditAccount() {
  // Here the route parameter id is the username (primary key)
  const { id } = useParams();
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    address: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchAccount() {
      // Use getUserDataByUsername to lookup by username
      const data = await getUserDataByUsername(id);
      if (data) {
        setAccount(data);
        setFormData({
          username: data.username || "",
          email: data.email || "",
          phone_number: data.phone_number || "",
          address: data.address || "",
        });
      } else {
        setErrorMessage("Không tìm thấy thông tin tài khoản.");
      }
    }
    fetchAccount();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Exclude username from update as it's the primary key
    const { username, ...updatedData } = formData;

    const { error } = await supabase
      .from("accounts")
      .update(updatedData)
      .eq("username", id);

    if (error) {
      setErrorMessage("Có lỗi xảy ra khi cập nhật tài khoản.");
      console.error("Update error:", error);
    } else {
      navigate("/admin/accounts");
    }
  };

  if (errorMessage) {
    return <div className="edit-account-container">{errorMessage}</div>;
  }

  if (!account) {
    return <div className="edit-account-container">Loading...</div>;
  }

  return (
    <div className="edit-account-container">
      <h2>Chỉnh sửa tài khoản</h2>
      <form onSubmit={handleSubmit} className="edit-account-form">
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Số điện thoại</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Địa chỉ</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

export default EditAccount;
