// src/components/ChatMessage.js
import React from "react";
import { useLocation } from "react-router-dom";

// Component để hiển thị một tin nhắn
function ChatMessage({ message, isSentByCurrentUser }) {
  const location = useLocation();
  const isAdminChat = location.pathname === "/adminChat";

  const isAdmin = message?.username?.startsWith("admin");

  const getTextAlign = () => {
    if (isAdminChat) {
      return isAdmin ? "right" : "left";
    } else {
      return isAdmin ? "left" : "right";
    }
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        textAlign: getTextAlign(),
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "8px 12px",
          borderRadius: "15px",
          backgroundColor: getTextAlign() === "right" ? "#007bff" : "#e9e9eb",
          color: getTextAlign() === "right" ? "#fff" : "#000",
          maxWidth: "80%",
          wordBreak: "break-word",
        }}
      >
        {message.text}
      </span>
      <div style={{ fontSize: "0.7em", color: "#888", marginTop: "2px" }}>
        {isAdmin
          ? "Admin"
          : isAdminChat
          ? "Khách hàng" // 👉 Nếu ở adminChat thì ghi "Khách hàng"
          : "Bạn"}{" "}
      </div>
    </div>
  );
}

export default ChatMessage;
