// src/components/AdminChatArea.jsx
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../backend/initSupabase"; // Đảm bảo đường dẫn đúng
import ChatMessage from "./ChatMessage"; // Tái sử dụng component hiển thị tin nhắn

function AdminChatArea({ selectedUserId }) {
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null); // Ref để cuộn xuống cuối

  // ---- Logic tải tin nhắn và lắng nghe tin nhắn mới ----
  useEffect(() => {
    // Chỉ chạy effect này khi selectedUserId có giá trị
    if (!selectedUserId) {
      setMessages([]); // Xóa tin nhắn khi không có người dùng nào được chọn
      return;
    }

    setLoading(true);
    setError(null);

    // Hàm tải tin nhắn ban đầu
    const fetchMessages = async () => {
      // Lấy tin nhắn từ người dùng được chọn HOẶC tin nhắn do admin gửi (để hiển thị cuộc hội thoại đầy đủ)
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(`username.eq.${selectedUserId},username.like.admin%`) // Lọc tin nhắn
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching messages:", error.message);
        setError("Lỗi khi tải tin nhắn.");
        setMessages([]); // Xóa tin nhắn cũ nếu có lỗi
      } else {
        // Lọc thêm ở client nếu cần, nhưng mệnh đề OR trên Supabase thường đủ
        setMessages(data || []); // Đảm bảo data là mảng nếu rỗng
      }
      setLoading(false);
    };

    // Hàm xử lý tin nhắn mới từ Realtime
    const handleNewMessage = (payload) => {
      console.log("Realtime event (AdminChatArea):", payload);
      // Kiểm tra xem tin nhắn mới có liên quan đến người dùng đang xem hay không
      const incomingUsername = payload.new.username;
      if (
        incomingUsername === selectedUserId ||
        (incomingUsername && incomingUsername.startsWith("admin"))
      ) {
        setMessages((prevMessages) => [...prevMessages, payload.new]);
      }
    };

    // Thiết lập lắng nghe Realtime
    const channel = supabase
      .channel(`chat_${selectedUserId}`) // Kênh riêng cho từng cuộc hội thoại
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          // Có thể thêm filter ở đây: chỉ nhận tin nhắn từ selectedUserId HOẶC admin
          // filter: `username=eq.${selectedUserId}` // Lọc ban đầu, có thể cần thêm logic OR
          // Bỏ filter ở đây và lọc ở handleNewMessage để xử lý cả tin nhắn admin
        },
        handleNewMessage
      )
      .subscribe();

    // Tải tin nhắn cũ ngay khi lắng nghe được thiết lập (hoặc khi selectedUserId thay đổi)
    fetchMessages();

    // Cleanup: Gỡ bỏ lắng nghe khi component unmount hoặc selectedUserId thay đổi
    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedUserId]); // Effect chạy lại khi selectedUserId thay đổi

  // ---- Logic gửi tin nhắn ----
  const handleSendMessage = async () => {
    if (newMessageText.trim() === "" || !selectedUserId) return; // Không gửi tin nhắn rỗng hoặc chưa chọn người dùng

    const adminUserId = "admin_user_1"; // Thay thế bằng ID admin thực tế hoặc logic xác định admin

    const { data, error } = await supabase.from("messages").insert([
      {
        username: adminUserId, // Sử dụng ID admin
        text: newMessageText.trim(),
        // Supabase sẽ tự động thêm created_at và message_id
      },
    ]);

    if (error) {
      console.error("Error sending message:", error.message);
      setError("Lỗi khi gửi tin nhắn.");
    } else {
      setNewMessageText(""); // Xóa nội dung input
      // Tin nhắn mới sẽ được thêm vào state `messages` thông qua Realtime listener
      setError(null); // Xóa lỗi nếu gửi thành công
    }
  };

  // Xử lý nhấn Enter để gửi
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      // Cho phép Shift+Enter xuống dòng
      event.preventDefault();
      handleSendMessage();
    }
  };

  // ---- Logic cuộn xuống cuối ----
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Cuộn xuống cuối khi tin nhắn thay đổi
    scrollToBottom();
  }, [messages]);

  // ---- Render UI của khu vực chat ----
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
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
        {/* Hiển thị tin nhắn */}
        {messages.map((msg) => (
          <ChatMessage
            key={msg.message_id || uuidv4()} // Sử dụng message_id hoặc uuid ngẫu nhiên
            message={msg}
            isSentByCurrentUser={
              msg.username && msg.username.startsWith("admin")
            } // Admin là người gửi tin nhắn này
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
          alignItems: "center", // Căn chỉnh các mục theo chiều dọc
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
            minHeight: "40px", // Chiều cao tối thiểu
            resize: "none", // Vô hiệu hóa resize bằng chuột
          }}
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={!selectedUserId || loading} // Vô hiệu hóa khi chưa chọn người dùng hoặc đang tải
          rows={1} // Bắt đầu với 1 dòng
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
            height: "40px", // Chiều cao cố định cho nút
          }}
          disabled={!selectedUserId || newMessageText.trim() === "" || loading} // Vô hiệu hóa nút gửi
        >
          Gửi
        </button>
      </div>
    </div>
  );
}

export default AdminChatArea;
