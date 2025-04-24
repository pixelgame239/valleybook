// src/pages/AdminChatScreen.jsx
import React, { useState } from "react";
import AdminSidebar from "../components/AdminSideBar.jsx";
import AdminChatArea from "../components/AdminChatArea.jsx";

export default function AdminChatScreen() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const screenContainerStyle = {
    display: "flex",
    height: "100vh", // Sử dụng toàn bộ chiều cao viewport
  };

  const sidebarContainerStyle = {
    width: "300px", // Chiều rộng cố định cho sidebar
    borderRight: "1px solid #ddd",
    overflowY: "auto", // Thêm cuộn nếu danh sách người dùng dài
  };

  const chatAreaContainerStyle = {
    flex: 1, // Sử dụng phần còn lại của không gian
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={screenContainerStyle}>
      <div style={sidebarContainerStyle}>
        {/* Truyền hàm chọn người dùng xuống AdminSidebar */}
        <AdminSidebar
          onSelectUser={setSelectedUserId}
          selectedUserId={selectedUserId}
        />
      </div>
      <div style={chatAreaContainerStyle}>
        {/* Truyền ID người dùng được chọn xuống AdminChatArea */}
        <AdminChatArea selectedUserId={selectedUserId} />
      </div>
    </div>
  );
}
