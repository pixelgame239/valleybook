import React from "react";
import "./SetNewPassword.css"; // nhớ import file CSS riêng

const SetNewPassword = () => {
  return (
    <div className="page-container">
      <div className="reset-container">
        <h2>Đặt lại mật khẩu</h2>
        <form className="reset-form">
          <div className="form-group">
            <label htmlFor="new-password">Mật khẩu mới</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
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
