import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../backend/initSupabase";
import { getUserData } from "../backend/userData";
import "./EditAccount.css";

function EditAccount() {
  // Here the route parameter id is the username (primary key)
  const { id } = useParams();
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone_number: "",
    address: "",
    user_voucher: "",
    cart_items: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchAccount() {
      // getUserData should now lookup by username
      const data = await getUserData(id);
      if (data) {
        setAccount(data);
        setFormData({
          username: data.username || "",
          // For security reasons, we leave password field empty unless set intentionally
          password: "",
          email: data.email || "",
          phone_number: data.phone_number || "",
          address: data.address || "",
          user_voucher: data.user_voucher || "",
          // Display cart_items as a JSON string if present
          cart_items: data.cart_items ? JSON.stringify(data.cart_items) : "",
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
    const { username, password, ...updatedData } = formData;
    // If password is provided update it; otherwise leave it unchanged
    if (password) {
      updatedData.password = password;
    }
    // Process cart_items: if empty string, set to empty array; otherwise, try parsing.
    if (updatedData.cart_items.trim() === "") {
      updatedData.cart_items = [];
    } else {
      try {
        updatedData.cart_items = JSON.parse(updatedData.cart_items);
      } catch (parseError) {
        console.error("Error parsing cart_items JSON:", parseError);
        updatedData.cart_items = []; // fallback to empty array
      }
    }
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
          <label htmlFor="username">
            Tên đăng nhập (không thể chỉnh sửa - khóa chính)
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Mật khẩu (nhập vào nếu muốn thay đổi)
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Để trống nếu không thay đổi"
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
        <div className="form-group">
          <label htmlFor="user_voucher">Voucher của người dùng</label>
          <input
            type="text"
            id="user_voucher"
            name="user_voucher"
            value={formData.user_voucher}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cart_items">Giỏ hàng (JSON)</label>
          <textarea
            id="cart_items"
            name="cart_items"
            value={formData.cart_items}
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

export default EditAccount;
