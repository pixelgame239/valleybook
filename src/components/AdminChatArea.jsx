import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../backend/initSupabase";
import ChatMessage from "./ChatMessage";

function AdminChatArea({ selectedUserId, currentAdminUserId }) {
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const channelRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Log props and state changes
  useEffect(() => {
    console.log("Current state:", {
      selectedUserId,
      currentAdminUserId,
      newMessageText,
      loading,
    });
  }, [selectedUserId, currentAdminUserId, newMessageText, loading]);

  useEffect(() => {
    if (!selectedUserId) {
      setMessages([]);
      if (channelRef.current) {
        console.log("Removing chat channel as no user is selected.");
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
      return;
    }

    setLoading(true);
    setError(null);

    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from("messages")
          .select("*")
          .or(
            `and(username.eq.${selectedUserId},receiver_id.ilike.admin%),` +
              `and(username.ilike.admin%,receiver_id.eq.${selectedUserId})`
          )
          .order("created_at", { ascending: true });

        if (error) throw error;
        setMessages(data || []);
      } catch (error) {
        console.error("Error fetching messages:", error.message);
        setError("Lỗi khi tải tin nhắn.");
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    const handleNewMessage = (payload) => {
      console.log("New message received:", payload.new);
      const newMessage = payload.new;

      const isMessageFromSelectedUserToAdmin =
        newMessage.username === selectedUserId &&
        newMessage.receiver_id?.startsWith("admin");

      const isMessageFromAdminToSelectedUser =
        newMessage.username?.startsWith("admin") &&
        newMessage.receiver_id === selectedUserId;

      if (
        isMessageFromSelectedUserToAdmin ||
        isMessageFromAdminToSelectedUser
      ) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    };

    if (channelRef.current) {
      supabase.removeChannel(channelRef.current);
      channelRef.current = null;
    }

    const channel = supabase
      .channel(`chat_admin_${selectedUserId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        handleNewMessage
      )
      .subscribe((status, err) => {
        if (err) {
          console.error("Subscription error:", err);
          setError("Lỗi khi kết nối Realtime.");
        }
      });

    channelRef.current = channel;
    fetchMessages();

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
    };
  }, [selectedUserId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    console.log("handleSendMessage called", {
      selectedUserId,
      currentAdminUserId,
      newMessageText,
      loading,
    });

    if (
      newMessageText.trim() === "" ||
      !selectedUserId ||
      !currentAdminUserId
    ) {
      console.log("Validation failed:", {
        newMessageText,
        selectedUserId,
        currentAdminUserId,
      });
      setError("Vui lòng nhập tin nhắn và chọn người dùng.");
      return;
    }

    if (newMessageText.length > 1000) {
      setError("Tin nhắn quá dài (tối đa 1000 ký tự).");
      return;
    }

    console.log("Sending message with:", {
      currentAdminUserId: currentAdminUserId,
      selectedUserId,
      text: newMessageText.trim(),
    });

    const messageToInsert = {
      username: currentAdminUserId,
      receiver_id: selectedUserId,
      text: newMessageText.trim(),
    };

    try {
      const { data, error } = await supabase
        .from("messages")
        .insert([messageToInsert])
        .select()
        .single();

      if (error) throw error;
      setNewMessageText("");
      setError(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setError(`Lỗi khi gửi tin nhắn: ${error.message}`);
    }
  };

  const handleKeyPress = (event) => {
    console.log("Key down:", event.key);
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          padding: "10px",
          borderBottom: "1px solid #ddd",
          flexShrink: 0,
        }}
      >
        <strong>
          {selectedUserId
            ? `Chat với: ${selectedUserId}`
            : "Chọn người dùng để chat"}
        </strong>
      </div>
      <div
        style={{
          flex: 1,
          padding: "10px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {loading && <p>Đang tải tin nhắn...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!selectedUserId && (
          <p>Vui lòng chọn một người dùng từ danh sách bên trái.</p>
        )}
        {selectedUserId && !loading && messages.length === 0 && (
          <p>Chưa có tin nhắn nào.</p>
        )}
        {messages.map((msg) => (
          <ChatMessage
            key={msg.message_id}
            message={msg}
            isSentByCurrentUser={msg.username?.startsWith("admin")}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div
        style={{
          padding: "10px",
          borderTop: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <textarea
          placeholder={
            selectedUserId ? "Nhập tin nhắn..." : "Chọn người dùng để nhập..."
          }
          style={{
            flex: 1,
            padding: "8px",
            boxSizing: "border-box",
            marginRight: "10px",
            minHeight: "40px",
            resize: "none",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
          onKeyDown={handleKeyPress} // Changed to onKeyDown
          disabled={!selectedUserId || loading}
          rows={1}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "8px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          disabled={!selectedUserId || newMessageText.trim() === "" || loading}
        >
          Gửi
        </button>
      </div>
    </div>
  );
}

export default AdminChatArea;
