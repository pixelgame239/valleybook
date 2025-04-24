// src/components/ChatWindow.js
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../backend/initSupabase"; // Import Supabase client đã khởi tạo
import { getAnonymousUserId } from "../backend/AnonymousUser"; // Import hàm lấy ID ẩn danh
import ChatMessage from "./ChatMessage"; // Import component hiển thị tin nhắn

function ChatWindow({ isOpen }) {
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [anonymousUserId, setAnonymousUserId] = useState(null); // Lưu ID người dùng ẩn danh tại đây

  const messagesEndRef = useRef(null); // Ref để cuộn xuống cuối

  // ---- Logic lấy ID người dùng ẩn danh khi component mount ----
  useEffect(() => {
    const userId = getAnonymousUserId();
    setAnonymousUserId(userId);
    console.log("Anonymous User ID:", userId); // Log ID khi lấy
  }, []); // Chỉ chạy một lần khi component mount

  // ---- Logic tải tin nhắn cũ và lắng nghe tin nhắn mới ----
  useEffect(() => {
    // Chỉ chạy effect này khi anonymousUserId đã có và cửa sổ chat mở
    if (!anonymousUserId || !isOpen) return;

    // Hàm tải tin nhắn ban đầu
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching messages:", error.message);
      } else {
        // Lọc tin nhắn ở client: chỉ hiển thị tin nhắn của người dùng này HOẶC tin nhắn từ admin
        const filteredMessages = data.filter(
          (msg) =>
            msg.username === anonymousUserId ||
            (msg.username && msg.username.startsWith("admin"))
        );
        setMessages(filteredMessages);
      }
    };

    // Hàm xử lý tin nhắn mới từ Realtime
    const handleNewMessage = (payload) => {
      console.log("Realtime event received:", payload);
      console.log("Current anonymousUserId:", anonymousUserId); // Log ID hiện tại
      console.log("Incoming message username:", payload.new.username); // Log username từ tin nhắn đến
      console.log("Realtime event received:", payload); // <-- Thêm dòng này
      // Logic lọc và cập nhật state ở dưới...
      if (
        payload.new.username === anonymousUserId ||
        (payload.new.username && payload.new.username.startsWith("admin"))
      ) {
        console.log("Message passed filter:", payload.new); // <-- Thêm dòng này
        setMessages((prevMessages) => [...prevMessages, payload.new]);
      } else {
        console.log("Message filtered out:", payload.new); // <-- Thêm dòng này
      }
    };

    // Thiết lập lắng nghe Realtime
    const channel = supabase
      .channel("messages_channel") // Tên kênh tùy ý, nên là duy nhất
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          // Có thể thêm filter ở đây nếu cần, nhưng lọc ở client đơn giản hơn với logic OR
        },
        handleNewMessage
      )
      .subscribe();

    // Tải tin nhắn cũ ngay khi lắng nghe được thiết lập
    fetchMessages();

    // Cleanup: Gỡ bỏ lắng nghe khi component unmount hoặc cửa sổ chat đóng
    return () => {
      supabase.removeChannel(channel);
    };
  }, [anonymousUserId, isOpen]); // Effect chạy lại khi anonymousUserId hoặc isOpen thay đổi

  // ---- Logic gửi tin nhắn ----
  const handleSendMessage = async () => {
    if (newMessageText.trim() === "" || !anonymousUserId) return; // Không gửi tin nhắn rỗng hoặc chưa có ID

    const { data, error } = await supabase.from("messages").insert([
      {
        username: anonymousUserId, // Sử dụng ID ẩn danh làm username
        text: newMessageText.trim(),
        // Supabase sẽ tự động thêm created_at và message_id
      },
    ]);

    if (error) {
      console.error("Error sending message:", error.message);
    } else {
      setNewMessageText(""); // Xóa nội dung input
      // Tin nhắn mới sẽ được thêm vào state `messages` thông qua Realtime listener
    }
  };

  // Xử lý nhấn Enter để gửi
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Ngăn hành vi mặc định (xuống dòng trong textarea nếu có)
      handleSendMessage();
    }
  };

  // ---- Logic cuộn xuống cuối ----
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Cuộn xuống cuối khi tin nhắn thay đổi và cửa sổ chat đang mở
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // ---- Render UI của cửa sổ chat ----
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {" "}
      {/* Điều chỉnh style để khung chat sử dụng không gian */}
      <div
        style={{
          flex: 1,
          padding: "10px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Hiển thị tin nhắn */}
        {messages.map((msg) => (
          <ChatMessage
            key={msg.message_id}
            message={msg}
            isSentByCurrentUser={msg.username === anonymousUserId}
          />
        ))}
        {/* Element rỗng dùng để cuộn xuống cuối */}
        <div ref={messagesEndRef} />
      </div>
      <div
        style={{
          padding: "10px",
          borderTop: "1px solid #ddd",
          display: "flex",
        }}
      >
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          style={{
            flex: 1,
            padding: "8px",
            boxSizing: "border-box",
            marginRight: "10px",
          }}
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={!anonymousUserId} // Vô hiệu hóa input nếu chưa có ID ẩn danh
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "8px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          disabled={!anonymousUserId || newMessageText.trim() === ""} // Vô hiệu hóa nút gửi khi không có ID hoặc tin nhắn rỗng
        >
          Gửi
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
