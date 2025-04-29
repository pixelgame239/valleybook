// src/components/AdminSidebar.jsx
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../backend/initSupabase";
import "./AdminSidebar.css"; // Import CSS for styling

function AdminSidebar({ onSelectUser, selectedUserId }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unreadCounts, setUnreadCounts] = useState({});

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

      // Add to your existing fetchUsers function
      const { data: unreadData } = await supabase
        .from("messages")
        .select("username")
        .eq("receiver_id", "admin1@valleybook.com")
        .eq("read", false);

      // Manually count messages per user
      const countsMap = unreadData.reduce((acc, item) => {
        acc[item.username] = (acc[item.username] || 0) + 1;
        return acc;
      }, {});
      setUnreadCounts(countsMap);

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

    const subscription = supabase
      .channel("unread-messages")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
          filter: "receiver_id=eq.admin1@valleybook.com",
        },
        (payload) => {
          // Update counts when messages change
          if (payload.eventType === "INSERT" && !payload.new.read) {
            setUnreadCounts((prev) => ({
              ...prev,
              [payload.new.username]: (prev[payload.new.username] || 0) + 1,
            }));
          } else if (payload.eventType === "UPDATE" && payload.new.read) {
            setUnreadCounts((prev) => ({
              ...prev,
              [payload.new.username]: Math.max(
                (prev[payload.new.username] || 0) - 1,
                0
              ),
            }));
          }
        }
      )
      .subscribe();

    fetchUsers();

    return () => {
      if (subscription) supabase.removeChannel(subscription);
    };

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
              className={`admin-sidebar__item ${
                selectedUserId === user ? "admin-sidebar__item--active" : ""
              }`}
              onClick={async () => {
                console.log("User clicked:", user);
                console.log("Current selectedUserId:", selectedUserId);
                console.log("Comparison result:", selectedUserId === user);
                onSelectUser(user);
                const { data, error } = await supabase
                  .from("messages")
                  .update({ read: true })
                  .eq("username", user);
                if (error)
                  console.error("Error marking messages as read:", error);
                console.log("Marked messages as read:", data);
              }}
            >
              {unreadCounts[user] > 0 && (
                <span
                  className="unread-badge"
                  style={{ marginRight: "5px", marginLeft: "0px" }}
                >
                  {unreadCounts[user] || 0}
                </span>
              )}
              {user}

              {selectedUserId === user &&
                console.log(
                  "Applied className:",
                  `admin-sidebar__item ${
                    selectedUserId === user ? "admin-sidebar__item--active" : ""
                  }`
                )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminSidebar;
