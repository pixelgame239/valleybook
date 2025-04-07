import React, { useState } from "react";
import "./loginpage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Vui lòng nhập email và mật khẩu.");
      return;
    }
    console.log("Email:", email, "Password:", password);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert("Chức năng quên mật khẩu chưa được triển khai.");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Đăng Nhập</h2>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Mật khẩu</label>
          <input
            id="password"
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Đăng Nhập
        </button>

        <div className="extra-options">
          <a
            href="#"
            className="forgot-password"
            onClick={handleForgotPassword}
          >
            Quên mật khẩu?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
