// src/components/ChatWindow.js
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../backend/initSupabase";
import { getAnonymousUserId } from "../backend/AnonymousUser";
import ChatMessage from "./ChatMessage";
import "./ChatWindow.css"; // Import file CSS (giữ nguyên)

function ChatWindow({ isOpen }) {
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [anonymousUserId, setAnonymousUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const messagesEndRef = useRef(null);
  const channelRef = useRef(null); // Ref để lưu channel hiện tại

  // Lấy Anonymous User ID khi component mount
  useEffect(() => {
    const userId = userInfo ? userInfo.email :getAnonymousUserId();
    setAnonymousUserId(userId);
    console.log("Anonymous User ID:", userId);
  }, []);

  // Tải tin nhắn và lắng nghe realtime khi anonymousUserId hoặc isOpen thay đổi
  useEffect(() => {
    if (!anonymousUserId || !isOpen) {
      // Nếu đóng chat hoặc chưa có userId -> clear dữ liệu và gỡ lắng nghe
      setMessages([]);
      console.log("Clearing chat and removing channels...");
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
      return;
    }

    const fetchMessages = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(
          `and(username.eq.${anonymousUserId},receiver_id.ilike.admin%),` +
            `and(username.ilike.admin%,receiver_id.eq.${anonymousUserId})`
        )
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching messages:", error.message);
        setError("Lỗi khi tải tin nhắn.");
        setMessages([]);
      } else {
        setMessages(data || []);
      }
      setLoading(false);
    };

    fetchMessages();

    // Remove kênh cũ trước khi tạo kênh mới
    if (channelRef.current) {
      supabase.removeChannel(channelRef.current);
    }

    const newChannel = supabase
      .channel(`chat-messages-${anonymousUserId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          console.log("New message payload:", payload);
          const newMessage = payload.new;

          const isFromCurrentUserToAdmin =
            newMessage.username === anonymousUserId &&
            newMessage.receiver_id &&
            newMessage.receiver_id.startsWith("admin");

          const isFromAdminToCurrentUser =
            newMessage.username &&
            newMessage.username.startsWith("admin") &&
            newMessage.receiver_id === anonymousUserId;

          if (isFromCurrentUserToAdmin || isFromAdminToCurrentUser) {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
          } else {
            console.log("Ignored message not for this chat session.");
          }
        }
      )
      .subscribe((status) => {
        console.log("Subscription status:", status);
      });

    channelRef.current = newChannel;

    // Clean up channel khi component unmount hoặc dependency thay đổi
    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
    };
  }, [anonymousUserId, isOpen]);

  // Scroll xuống cuối mỗi khi messages thay đổi
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Hàm gửi tin nhắn
  const handleSendMessage = async () => {
    if (newMessageText.trim() === "") return;

    const { error } = await supabase.from("messages").insert([
      {
        username: anonymousUserId,
        receiver_id: "admin1@valleybook.com", // Giả định gửi đến admin1
        text: newMessageText.trim(),
      },
    ]);

    if (error) {
      console.error("Error sending message:", error.message);
      setError("Không thể gửi tin nhắn.");
    } else {
      setNewMessageText("");
    }
  };

  return (
    <div className={`chat-window ${isOpen ? "open" : "closed"}`}>
      {/* Thông báo header */}
      <div className="chat-info" role="status" aria-live="polite">
        Chúng tôi sẽ trả lời trong thời gian sớm nhất
      </div>
      {loading && <p>Đang tải tin nhắn...</p>}
      {error && <p className="error">{error}</p>}
      <div className="messages-list">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div
        className="chat-input"
        // style={{ border: "2px solid #0171F9", borderRadius: "20px" }}
      >
        <input
          type="text"
          value={newMessageText}
          style={{ border: "none", outline: "none" }}
          onChange={(e) => setNewMessageText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          placeholder="Nhập tin nhắn..."
        />
        <button onClick={handleSendMessage}>Gửi</button>
      </div>
    </div>
  );
}

export default ChatWindow;
