import React from "react";
import "../../public/assets/css/confirmation.css";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <DownloadDoneIcon
          style={{
            fontSize: "300px",
            color: "forestgreen",
          }}
        />
      </div>
      <h2>Xác nhận Email Thành Công</h2>
      <p>
        Tài khoản của bạn đã được xác nhận. Bạn có thể đóng tab này. <br />
      </p>
      <p>Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi!</p>
    </div>
  );
};

export default Confirmation;
