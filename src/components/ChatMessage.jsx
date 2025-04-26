// src/components/ChatMessage.js
import React from "react";

// Component để hiển thị một tin nhắn
function ChatMessage({ message, isSentByCurrentUser }) {
  // console.log(
  //   `ChatMessage ID: ${message.message_id}, Prop received: ${isSentByCurrentUser}`
  // );

  return (
    <div
      style={{
        marginBottom: "10px",
        textAlign: message.username.startsWith("admin") ? "left" : "right", // Căn lề dựa vào người gửi
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "8px 12px",
          borderRadius: "15px",
          backgroundColor: isSentByCurrentUser ? "#007bff" : "#e9e9eb", // Màu sắc dựa vào người gửi
          color: isSentByCurrentUser ? "#fff" : "#000",
          maxWidth: "80%",
          wordBreak: "break-word",
        }}
      >
        {message.text}
      </span>
      <div style={{ fontSize: "0.7em", color: "#888", marginTop: "2px" }}>
        {/* Hiển thị "Bạn" hoặc "Admin" */}
        {message.username && message.username.startsWith("admin")
          ? "Admin"
          : "Bạn"}
        {/* Tùy chọn hiển thị thời gian: {new Date(message.created_at).toLocaleTimeString()} */}
      </div>
    </div>
  );
}

export default ChatMessage;
