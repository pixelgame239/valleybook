import React, { useState } from "react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  const bubbleStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    zIndex: 1000,
  };

  const windowStyle = {
    position: "fixed",
    bottom: "100px",
    right: "20px",
    width: "300px",
    height: "400px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 1000,
  };

  return (
    <>
      {open && (
        <div style={windowStyle}>
          <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
            <strong>Hỗ trợ trực tuyến</strong>
          </div>
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {/* Nội dung chat hoặc tích hợp chat widget */}
            <p>Chào bạn! Chúng tôi có thể giúp gì hôm nay?</p>
          </div>
          <div style={{ padding: "10px", borderTop: "1px solid #ddd" }}>
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
        </div>
      )}
      <div style={bubbleStyle} onClick={() => setOpen(!open)}>
        {open ? "×" : "💬"}
      </div>
    </>
  );
}
