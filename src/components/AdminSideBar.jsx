// src/components/AdminSidebar.jsx
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../backend/initSupabase"; // Đảm bảo đường dẫn đúng

function AdminSidebar({ onSelectUser, selectedUserId }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ---- Logic tải tin nhắn và lắng nghe tin nhắn mới ----
  useEffect(() => {
    // Hàm tải tin nhắn ban đầu
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      // Lấy tất cả các username duy nhất từ bảng messages
      // Loại trừ các username bắt đầu bằng 'admin'
      const { data, error } = await supabase
        .from("messages")
        .select("username")
        .not("username", "like", "admin%"); // Loại trừ admin users

      if (error) {
        console.error("Error fetching users:", error.message);
        setError("Lỗi khi tải danh sách người dùng.");
        setUsers([]); // Đảm bảo state là mảng rỗng nếu có lỗi
      } else {
        // Lấy danh sách các username duy nhất
        const uniqueUsers = [...new Set(data.map((item) => item.username))];
        // Lọc bỏ các giá trị null hoặc rỗng nếu có
        const filteredUsers = uniqueUsers.filter(
          (username) => username && username.trim() !== ""
        );
        setUsers(filteredUsers);
      }
      setLoading(false); // <-- Luôn đặt loading về false sau khi fetch xong
    };

    fetchUsers(); // Gọi hàm tải người dùng khi component mount

    // Lắng nghe thay đổi trong bảng messages để cập nhật danh sách người dùng nếu có tin nhắn mới từ người dùng mới
    // Thiết lập lắng nghe MỘT LẦN
    const channel = supabase
      .channel("admin_users_channel") // Tên kênh duy nhất
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: "username=neq.admin%", // Chỉ lắng nghe tin nhắn từ người dùng không phải admin
        },
        (payload) => {
          const newUser = payload.new.username;
          // Sử dụng functional update để không cần 'users' trong dependency array của useEffect này
          setUsers((prevUsers) => {
            // Kiểm tra xem người dùng mới có hợp lệ và chưa có trong danh sách không
            if (
              newUser &&
              newUser.trim() !== "" &&
              !prevUsers.includes(newUser)
            ) {
              console.log("New user added via Realtime:", newUser); // Log để debug
              return [...prevUsers, newUser]; // Thêm người dùng mới vào danh sách cũ
            }
            return prevUsers; // Trả về danh sách cũ nếu không có người dùng mới hợp lệ
          });
        }
      )
      .subscribe();

    // Cleanup: Gỡ bỏ lắng nghe khi component unmount
    return () => {
      console.log("Removing admin_users_channel"); // Log để debug
      supabase.removeChannel(channel);
    };
  }, []); // <-- Dependency array rỗng: chỉ chạy effect này MỘT LẦN khi mount

  const sidebarItemStyle = (userId) => ({
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    backgroundColor: selectedUserId === userId ? "#e9e9e9" : "#fff",
    fontWeight: selectedUserId === userId ? "bold" : "normal",
    listStyle: "none", // Loại bỏ dấu đầu dòng mặc định của <li>
    margin: 0,
  });

  const listStyle = {
    padding: 0, // Loại bỏ padding mặc định của <ul>
    margin: 0,
  };

  return (
    <div>
      <h3
        style={{ padding: "10px", margin: 0, borderBottom: "1px solid #ddd" }}
      >
        Người dùng
      </h3>
      {loading && <p style={{ padding: "10px" }}>Đang tải...</p>}
      {error && <p style={{ padding: "10px", color: "red" }}>{error}</p>}
      {!loading && users.length === 0 && !error && (
        <p style={{ padding: "10px" }}>Chưa có người dùng nào.</p>
      )}{" "}
      {/* Thêm điều kiện !error */}
      {!loading && users.length > 0 && (
        <ul style={listStyle}>
          {" "}
          {/* Áp dụng style cho ul */}
          {users.map((user) => (
            <li
              key={user}
              style={sidebarItemStyle(user)}
              onClick={() => {
                console.log("User clicked:", user); // Log để debug
                onSelectUser(user);
              }}
            >
              Người dùng: {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminSidebar;
