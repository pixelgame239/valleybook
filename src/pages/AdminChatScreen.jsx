import React, { useState, useEffect } from "react";
import { supabase } from "../backend/initSupabase"; // Import Supabase client
import AdminSidebar from "../components/AdminSideBar.jsx";
import AdminChatArea from "../components/AdminChatArea.jsx";

export default function AdminChatScreen() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentAdminUserId, setCurrentAdminUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch authenticated user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) throw error;
        if (user) {
          console.log("Authenticated user:", user);
          setCurrentAdminUserId(user.email); // Or user.email, depending on your setup
        } else {
          setError("Vui lòng đăng nhập với tài khoản admin.");
        }
      } catch (err) {
        console.error("Error fetching user:", err.message);
        setError("Lỗi khi xác thực người dùng.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const screenContainerStyle = {
    display: "flex",
    height: "100vh",
  };

  const sidebarContainerStyle = {
    width: "300px",
    borderRight: "1px solid #ddd",
    overflowY: "auto",
  };

  const chatAreaContainerStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  // Show loading or error states
  if (loading) {
    return <div>Đang tải thông tin người dùng...</div>;
  }

  if (error || !currentAdminUserId) {
    return (
      <div>
        {error || "Vui lòng đăng nhập với tài khoản admin."}
        {/* Optionally add a login button or redirect */}
      </div>
    );
  }

  return (
    <div style={screenContainerStyle}>
      <div style={sidebarContainerStyle}>
        <AdminSidebar
          onSelectUser={setSelectedUserId}
          selectedUserId={selectedUserId}
        />
      </div>
      <div style={chatAreaContainerStyle}>
        <AdminChatArea
          selectedUserId={selectedUserId}
          currentAdminUserId={currentAdminUserId}
        />
      </div>
    </div>
  );
}
