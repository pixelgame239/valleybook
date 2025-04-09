import React, { useState } from "react";
import "./loginpage.css";
import { useNavigate } from "react-router-dom";
import supabase from "../backend/initSupabase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Vui lòng nhập email và mật khẩu.");
      return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if(error){
      alert("Sai tài khoản hoặc mật khẩu");
    }
    else{
      navigate("/");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert("Chức năng quên mật khẩu chưa được triển khai.");
  };
  const handleSignup=()=>{
    navigate("/signUp");
  }
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
          <button className="google-login-button"><img className="google-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="Google"></img>Đăng nhập với Google</button>
          <div className="extra-options">
            <a href="/signUp"
            className="sign-up">
              Đăng ký
            </a>
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
    </div>
  );
};

export default LoginPage;
