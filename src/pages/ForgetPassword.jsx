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
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:5173/setNewPassword",
      });

      if (error) {
        setError("Đã có lỗi xảy ra khi gửi liên kết. Vui lòng thử lại.");
        setMessage("");
      } else {
        setError("");
        setMessage("Liên kết đặt lại mật khẩu đã được gửi.");
        alert("Hãy kiểm tra email của bạn");
      }
    }
  };

  return (
    <div className="page-container">
      <div className="signup-container">
        <h2>Quên mật khẩu</h2>
        {message && <p className="success-message">{message}</p>}
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label style={{ color: "#0171F9" }}>Email</label>
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
    </div>
  );
};

export default ForgetPassword;
