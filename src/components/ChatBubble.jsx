// src/components/ChatBubble.js
import React, { useState, useEffect, useRef } from "react";
import ChatWindow from "./ChatWindow"; // Import ChatWindow component
import "./ChatBubble.css"; // Import file CSS (giữ nguyên)
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";

export default function ChatBubble() {
  const { userData } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(false);
  // Không cần state messages, newMessageText, anonymousUserId ở đây nữa

  const chatWindowRef = useRef(null);
  const chatBubbleRef = useRef(null);

  // ---- Logic hiển thị/ẩn tin nhắn ban đầu và cửa sổ chat ----
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialMessage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Ẩn tin nhắn ban đầu khi cửa sổ chat chính mở
    if (open) {
      setShowInitialMessage(false);
    }
  }, [open]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target) &&
        chatBubbleRef.current &&
        !chatBubbleRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, chatWindowRef, chatBubbleRef]);
  // ---- Kết thúc logic hiển thị/ẩn ----

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
    transition: "transform 0.3s ease-in-out",
    transform: open ? "rotate(360deg)" : "rotate(0deg)",
  };

  const handleCloseInitialMessage = () => {
    setShowInitialMessage(false);
  };

  if (userData?.email?.startsWith("admin")) {
    return (
      <Link to="/adminChat" style={{ textDecoration: "none" }}>
        <div style={bubbleStyle}>admin chat</div>
      </Link>
    );
  }

  return (
    <>
      {/* Cửa sổ chat chính - Thêm ref */}
      {/* Thay thế nội dung cũ bằng ChatWindow component */}
      <div className={`chat-window ${open ? "open" : ""}`} ref={chatWindowRef}>
        <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
          <strong>Hỗ trợ trực tuyến</strong>
          {/* Nút đóng cửa sổ chat */}
          <span
            style={{ float: "right", cursor: "pointer", fontSize: "1.2em" }}
            onClick={() => setOpen(false)}
          >
            ×
          </span>
        </div>
        {/* Sử dụng ChatWindow component */}
        <ChatWindow isOpen={open} />
      </div>

      {/* Tin nhắn pop-up ban đầu */}
      {showInitialMessage && !open && (
        <div
          className="initial-message-popup"
          onClick={handleCloseInitialMessage}
        >
          Chúng tôi có thể giúp gì cho bạn?
          <span className="initial-message-close-button">×</span>
        </div>
      )}

      {/* Icon bong bóng chat - Thêm ref */}
      <div
        style={bubbleStyle}
        onClick={() => setOpen(!open)}
        ref={chatBubbleRef}
      >
        {open ? "×" : "💬"}
      </div>
    </>
  );
}
