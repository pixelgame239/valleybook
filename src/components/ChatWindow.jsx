// src/components/ChatWindow.js
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../backend/initSupabase"; // Import Supabase client đã khởi tạo
import { getAnonymousUserId } from "../backend/AnonymousUser"; // Import hàm lấy ID ẩn danh
import ChatMessage from "./ChatMessage"; // Import component hiển thị tin nhắn
import { v4 as uuidv4 } from "uuid"; // Cần cài đặt uuid: npm install uuid

function ChatWindow({ isOpen }) {
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [anonymousUserId, setAnonymousUserId] = useState(null); // Lưu ID người dùng ẩn danh tại đây
  const [loading, setLoading] = useState(false); // Thêm state loading
  const [error, setError] = useState(null); // Thêm state error

  const messagesEndRef = useRef(null); // Ref để cuộn xuống cuối

  // ---- Logic lấy ID người dùng ẩn danh khi component mount ----
  // Effect này chạy một lần khi component mount để lấy ID người dùng ẩn danh
  useEffect(() => {
    const userId = getAnonymousUserId();
    setAnonymousUserId(userId);
    console.log("Anonymous User ID:", userId); // Log ID khi lấy
  }, []); // Dependency array rỗng: chỉ chạy một lần

  // ---- Logic tải tin nhắn cũ và lắng nghe tin nhắn mới ----
  // Effect này chạy khi anonymousUserId có giá trị HOẶC khi cửa sổ chat mở/đóng
  useEffect(() => {
    // Chỉ chạy effect này khi anonymousUserId đã có và cửa sổ chat mở
    if (!anonymousUserId || !isOpen) {
      // Nếu không đủ điều kiện, xóa tin nhắn và gỡ bỏ lắng nghe
      setMessages([]);
      supabase.removeAllChannels(); // Gỡ bỏ tất cả các kênh lắng nghe hiện tại
      return;
    }

    setLoading(true); // Bắt đầu tải
    setError(null); // Reset lỗi

    // Hàm bất đồng bộ để tải các tin nhắn cũ thuộc cuộc hội thoại với anonymousUserId
    const fetchMessages = async () => {
      // Lấy tin nhắn giữa người dùng ẩn danh này VÀ admin
      // Dùng điều kiện OR: (tin nhắn từ người dùng ẩn danh gửi đến admin) HOẶC (tin nhắn từ admin gửi đến người dùng ẩn danh)
      // Giả định các ID/username của admin bắt đầu bằng 'admin'
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(
          `and(username.eq.${anonymousUserId}, receiver_id.like.admin%)`, // Tin nhắn từ user đến admin
          `and(username.like.admin%, receiver_id.eq.${anonymousUserId})` // Tin nhắn từ admin đến user
        )
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching messages:", error.message);
        setError("Lỗi khi tải tin nhắn."); // Cập nhật state lỗi
        setMessages([]);
      } else {
        setMessages(data || []); // Cập nhật state messages
      }
      setLoading(false); // Kết thúc tải
    };

    // Hàm xử lý khi có tin nhắn mới được chèn vào bảng 'messages' qua Realtime
    const handleNewMessage = (payload) => {
      console.log("Realtime event received:", payload);
      const newMessage = payload.new; // Lấy dữ liệu tin nhắn mới

      // Kiểm tra xem tin nhắn mới có thuộc cuộc hội thoại của người dùng ẩn danh hiện tại không:
      // Tin nhắn từ người dùng ẩn danh hiện tại gửi đến admin
      const isMessageFromCurrentUserToAdmin =
        newMessage.username === anonymousUserId &&
        newMessage.receiver_id &&
        newMessage.receiver_id.startsWith("admin");

      // Hoặc tin nhắn từ admin gửi đến người dùng ẩn danh hiện tại
      const isMessageFromAdminToCurrentUser =
        newMessage.username &&
        newMessage.username.startsWith("admin") &&
        newMessage.receiver_id === anonymousUserId;

      // Nếu tin nhắn mới thuộc về cuộc hội thoại này, thêm vào state
      if (isMessageFromCurrentUserToAdmin || isMessageFromAdminToCurrentUser) {
        console.log("Message passed filter:", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } else {
        console.log("Message filtered out (not for this user):", newMessage);
      }
    };

    // Trước khi thiết lập lắng nghe mới, gỡ bỏ tất cả các kênh cũ
    supabase.removeAllChannels();

    // Thiết lập lắng nghe Realtime cho bảng 'messages'
    // Sử dụng tên kênh cụ thể cho người dùng ẩn danh này
    // Lắng nghe sự kiện 'INSERT' (thêm mới bản ghi)
    const channel = supabase
      .channel(`chat_user_${anonymousUserId}`) // Tên kênh duy nhất cho người dùng này
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          // Có thể thêm filter ở đây nếu Supabase Realtime hỗ trợ lọc phức tạp (OR trên 2 cột)
          // Hiện tại lọc bằng tay trong handleNewMessage đơn giản hơn.
        },
        handleNewMessage // Hàm xử lý khi có sự kiện INSERT
      )
      .subscribe(); // Bắt đầu lắng nghe

    // Gọi hàm tải tin nhắn ban đầu ngay khi effect chạy (khi anonymousUserId có giá trị và cửa sổ mở)
    fetchMessages();

    // Hàm dọn dẹp: Gỡ bỏ kênh lắng nghe khi component unmount hoặc anonymousUserId/isOpen thay đổi
    return () => {
      console.log("Removing chat channel for user:", anonymousUserId);
      supabase.removeChannel(channel); // Sử dụng removeChannel với đối tượng channel cụ thể
    };
    // Dependency array: Effect chạy lại mỗi khi anonymousUserId HOẶC isOpen thay đổi
  }, [anonymousUserId, isOpen]);

  // Effect để tự động cuộn xuống cuối danh sách tin nhắn khi messages state thay đổi VÀ cửa sổ chat đang mở
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]); // Effect chạy lại khi messages HOẶC isOpen thay đổi

  // ---- Logic gửi tin nhắn ----
  const handleSendMessage = async () => {
    if (newMessageText.trim() === "" || !anonymousUserId) return; // Không gửi tin nhắn rỗng hoặc chưa có ID

    // TODO: Xác định ID của tài khoản admin hoặc inbox admin mà tin nhắn này sẽ gửi tới
    // Đây có thể là một ID cố định cho "inbox admin" hoặc ID của admin online nào đó
    const adminReceiverId = "admin_inbox"; // <-- Cần thay thế bằng ID admin nhận thực tế

    const { data, error } = await supabase.from("messages").insert([
      {
        username: anonymousUserId, // Người gửi là người dùng ẩn danh hiện tại
        receiver_id: adminReceiverId, // <-- Thêm trường người nhận là admin
        text: newMessageText.trim(), // Nội dung tin nhắn
        // Supabase sẽ tự động thêm created_at và message_id
      },
    ]);

    if (error) {
      console.error("Error sending message:", error.message);
      setError("Lỗi khi gửi tin nhắn."); // Cập nhật state lỗi
    } else {
      setNewMessageText(""); // Xóa nội dung input
      setError(null); // Reset lỗi nếu gửi thành công
      // Tin nhắn mới sẽ được thêm vào state `messages` thông qua Realtime listener
    }
  };

  // Xử lý nhấn Enter để gửi
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      // Cho phép Shift+Enter xuống dòng
      event.preventDefault(); // Ngăn hành vi mặc định
      handleSendMessage();
    }
  };

  // ---- Logic cuộn xuống cuối ----
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ---- Render UI của cửa sổ chat ----
  // Hiển thị hoặc ẩn cửa sổ chat dựa vào prop isOpen
  if (!isOpen) {
    return null; // Nếu cửa sổ không mở, không render gì cả
  }

  return (
    // Đặt component trong một div hoặc modal phù hợp với thiết kế UI của bạn
    // Ví dụ về container cơ bản (bạn sẽ cần điều chỉnh style này)
    <div
      style={{
        position: "fixed", // Hoặc 'absolute' tùy vị trí mong muốn
        bottom: "20px",
        right: "20px",
        width: "350px", // Chiều rộng cửa sổ chat
        height: "500px", // Chiều cao cửa sổ chat
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000, // Đảm bảo cửa sổ chat nằm trên các element khác
      }}
    >
      {/* Bạn có thể thêm header cho cửa sổ chat ở đây (ví dụ: nút đóng) */}
      {/* <div style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Chat Support</div> */}

      {/* Khu vực hiển thị tin nhắn */}
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
        {!loading && messages.length === 0 && (
          <p>Bắt đầu cuộc trò chuyện mới!</p>
        )}

        {/* Hiển thị tin nhắn */}
        {messages.map((msg) => (
          <ChatMessage
            key={msg.message_id || uuidv4()} // Sử dụng message_id hoặc uuid ngẫu nhiên làm key
            message={msg}
            // Tin nhắn do người dùng ẩn danh hiện tại gửi đi
            isSentByCurrentUser={msg.username === anonymousUserId}
          />
        ))}
        {/* Element rỗng dùng để cuộn xuống cuối */}
        <div ref={messagesEndRef} />
      </div>

      {/* Khu vực nhập tin nhắn */}
      <div
        style={{
          padding: "10px",
          borderTop: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
        }}
      >
        <textarea
          type="text" // Dùng textarea cho phép xuống dòng
          placeholder={
            anonymousUserId ? "Nhập tin nhắn..." : "Đang tải ID người dùng..."
          }
          style={{
            flex: 1,
            padding: "8px",
            boxSizing: "border-box",
            marginRight: "10px",
            minHeight: "40px",
            resize: "none", // Vô hiệu hóa resize bằng chuột
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={!anonymousUserId || loading} // Vô hiệu hóa khi chưa có ID hoặc đang tải
          rows={1} // Bắt đầu với 1 dòng
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "8px 15px",
            backgroundColor:
              anonymousUserId && newMessageText.trim() !== "" && !loading
                ? "#007bff"
                : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor:
              anonymousUserId && newMessageText.trim() !== "" && !loading
                ? "pointer"
                : "not-allowed",
            height: "40px",
            transition: "background-color 0.2s ease",
          }}
          disabled={!anonymousUserId || newMessageText.trim() === "" || loading} // Vô hiệu hóa nút gửi
        >
          Gửi
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
