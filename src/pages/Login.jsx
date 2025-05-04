import React, { useContext, useEffect, useState } from "react";
import "./loginpage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import supabase from "../backend/initSupabase";
import { AuthContext } from "../components/AuthContext";
import { signUpNewUser } from "../backend/userData";

const LoginPage = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isGoogle, setIsGoogle] = useState(false);
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
    if (error) {
      alert("Sai tài khoản hoặc mật khẩu");
    } else {
      if(!isGoogle){
        console.log("normal login");
        navigate("/");
        setLoggedIn(true);  
      }
    }
  };
  useEffect(()=>{
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        const userEmail = session.user.email;
  
        // Check if user exists
        const { data: accountData, error: fetchError } = await supabase
          .from("accounts")
          .select("email")
          .eq("email", userEmail)
          .single();
        
          console.log(accountData);
  
        if (!accountData) {
          const tempUsername = userEmail.split("@")[0];
          await signUpNewUser(tempUsername, userEmail, null, null, null);
        }
  
        console.log("User data inserted or found");
        setLoggedIn(true);
        setIsGoogle(false);
        navigate("/"); // 👈 Redirect only after session is valid
      }
    });
  
    // Optional cleanup
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [isGoogle])
  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options:{redirectTo:"http://localhost:5173/signIn"}
    });
    if(!error){
      setIsGoogle(prev=>prev=!prev);
      console.log("Running");
  };
}
  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={async(e)=>await handleSubmit(e)}>
          <h2 style={{ color: "#0171F9" }}>Đăng Nhập</h2>

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

          <button className="login-button" type="submit">
            Đăng Nhập
          </button>
          <button
            className="google-login-button"
            type="button"
            onClick={async () => await handleGoogleSignIn()}
          >
            <img
              className="google-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt="Google"
            ></img>
            Đăng nhập với Google
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
