// src/components/EventPopup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../public/assets/css/EventPopup.css";

const EventPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/innovationPage"); // Điều hướng đến trang InnovationPage
    onClose(); // Đóng pop-up sau khi điều hướng
  };

  return (
    <div className="event-popup-overlay">
      <div className="event-popup-content">
        <button className="event-popup-close" onClick={onClose}>
          &times; {/* Ký tự 'X' */}
        </button>
        <img
          src="../public/assets/images/valleychill.jpg"
          alt="Sự kiện Valley Chill"
          className="event-popup-image"
        />
        <h2 className="event-popup-title">Sự kiện đặc biệt Valley Chill</h2>
        <button className="event-popup-button" onClick={handleLearnMore}>
          Tìm hiểu ngay
        </button>
      </div>
    </div>
  );
};

export default EventPopup;
