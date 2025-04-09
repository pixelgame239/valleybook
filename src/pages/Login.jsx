import React, { useState } from "react";
import "./loginpage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
  const handleSignup = () => {
    navigate("/signUp");
  };
  return (
    <div className="login-page">
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
            <a href="/signUp" className="sign-up">
              Đăng ký
            </a>
            <Link to="/forgetPassword" className="forgot-password">
              Quên mật khẩu?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
