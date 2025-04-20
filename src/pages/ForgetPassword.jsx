import React, { useState } from "react";
import "./ForgetPassword.css";
import supabase from "../backend/initSupabase";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setError("Vui lòng nhập đúng định dạng email");
      setMessage("");
    } else {
      // Giả sử gửi yêu cầu thành công
      await supabase.auth.resetPasswordForEmail(email);
      setError("");
    }
  };

  return (
    <div className="signup-container">
      <h2>Quên mật khẩu</h2>
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <div className="error">{error}</div>}
        </div>
        <button type="submit" className="submit-button">
          Gửi liên kết đặt lại
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
