import React, { useState, useEffect, useRef } from "react"; // Import useRef
import "./ChatBubble.css"; // Import file CSS

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(false);

  const chatWindowRef = useRef(null); // Tạo ref cho cửa sổ chat
  const chatBubbleRef = useRef(null); // Tạo ref cho icon bong bóng

  // Hiển thị tin nhắn ban đầu sau một vài giây khi component được mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Ẩn tin nhắn ban đầu khi cửa sổ chat chính mở
  useEffect(() => {
    if (open) {
      setShowInitialMessage(false);
    }
  }, [open]);

  // Xử lý logic đóng pop-up khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      // Kiểm tra nếu click không nằm trong cửa sổ chat VÀ không nằm trong icon bong bóng
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target) &&
        chatBubbleRef.current &&
        !chatBubbleRef.current.contains(event.target)
      ) {
        setOpen(false); // Đóng pop-up
      }
    }

    // Chỉ thêm event listener khi pop-up đang mở
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function: gỡ bỏ event listener khi component unmount hoặc pop-up đóng
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, chatWindowRef, chatBubbleRef]); // Chạy lại effect khi open state hoặc refs thay đổi

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

  // Xử lý đóng tin nhắn ban đầu (nếu người dùng click vào nó)
  const handleCloseInitialMessage = () => {
    setShowInitialMessage(false);
  };

  return (
    <>
      {/* Cửa sổ chat chính - Thêm ref */}
      <div className={`chat-window ${open ? "open" : ""}`} ref={chatWindowRef}>
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
