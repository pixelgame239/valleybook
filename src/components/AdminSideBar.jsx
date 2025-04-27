// src/components/AdminSidebar.jsx
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../backend/initSupabase";
import "./AdminSidebar.css"; // Import CSS for styling

function AdminSidebar({ onSelectUser, selectedUserId }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load users and subscribe to new messages
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("messages")
        .select("username")
        .or(
          `receiver_id.eq.admin1@valleybook.com,username.eq.admin1@valleybook.com`
        )
        .order("created_at", { ascending: false });
      console.log("data ===", data);

      if (error) {
        console.error("Error fetching users:", error.message);
        setError("Lỗi khi tải danh sách người dùng.");
        setUsers([]);
      } else {
        const sortedData = [...data].sort((a, b) => {
          if (a.username === "admin1@valleybook.com") return -1;
          if (b.username === "admin1@valleybook.com") return 1;
          return 0; // Keep original order for others
        });

        const uniqueUsers = [
          ...new Set(sortedData.map((item) => item.username)),
        ];
        const filteredUsers = uniqueUsers.filter(
          (username) => username && username.trim() !== ""
        );
        setUsers(filteredUsers);
      }
      setLoading(false);
    };

    fetchUsers();

    const channel = supabase
      .channel("admin_users_channel")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: "username=neq.admin%",
        },
        (payload) => {
          const newUser = payload.new.username;
          setUsers((prev) => {
            if (newUser && newUser.trim() !== "" && !prev.includes(newUser)) {
              return [...prev, newUser];
            }
            return prev;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="admin-sidebar">
      <h3 className="admin-sidebar__header">Người dùng</h3>
      {loading && <p className="admin-sidebar__loading">Đang tải...</p>}
      {error && <p className="admin-sidebar__error">{error}</p>}

      {!loading && users.length === 0 && !error && (
        <p className="admin-sidebar__empty">Chưa có người dùng nào.</p>
      )}

      {!loading && users.length > 0 && (
        <ul className="admin-sidebar__list">
          {users.map((user) => (
            <li
              key={user}
              className={`admin-sidebar__item $
                selectedUserId === user ? 'admin-sidebar__item--active' : ''
              `}
              onClick={() => onSelectUser(user)}
            >
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminSidebar;
