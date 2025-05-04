import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../backend/initSupabase";
import "./SetNewPassword.css";

const SetNewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("access_token")) {
      supabase.auth
        .exchangeCodeForSession(window.location.href)
        .catch((err) => {
          console.error("Failed to exchange token:", err.message);
          setError("Không thể xác thực liên kết. Vui lòng thử lại.");
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Mật khẩu không khớp");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      setError("Có lỗi xảy ra khi cập nhật mật khẩu");
    } else {
      if (!error) {
        const {
          data: { user },
        } = await supabase.auth.getUser(); // lấy user hiện tại

        // Cập nhật password dạng plain text trong bảng "accounts"
        await supabase
          .from("accounts")
          .update({ password: newPassword }) // ❗Plain text — chỉ dùng nếu thật sự cần thiết
          .eq("email", user.email);

        setSuccess("Đặt lại mật khẩu thành công!");
        setTimeout(() => navigate("/signIn"), 2000);
      }
    }
  };

  return (
    <div className="page-container">
      <div className="reset-container">
        <h2>Đặt lại mật khẩu</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <form className="reset-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="new-password">Mật khẩu mới</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              autoComplete="new-password" // ✅ Thêm dòng này
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              autoComplete="new-password" // ✅ Thêm dòng này
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="submit-button" type="submit">
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewPassword;
