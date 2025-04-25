// src/components/AdminChatArea.jsx
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../backend/initSupabase"; // Đảm bảo đường dẫn đúng
import ChatMessage from "./ChatMessage"; // Tái sử dụng component hiển thị tin nhắn

function AdminChatArea({ selectedUserId }) {
  // State để lưu trữ danh sách tin nhắn, nội dung tin nhắn mới, trạng thái tải và lỗi
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ref để cuộn xuống cuối danh sách tin nhắn
  const messagesEndRef = useRef(null);

  // Effect để tải tin nhắn ban đầu và thiết lập lắng nghe Realtime
  useEffect(() => {
    // Nếu không có người dùng nào được chọn, xóa danh sách tin nhắn và gỡ bỏ lắng nghe
    if (!selectedUserId) {
      setMessages([]);
      supabase.removeAllChannels(); // Gỡ bỏ tất cả các kênh lắng nghe hiện tại
      return;
    }

    // Bắt đầu tải, reset lỗi
    setLoading(true);
    setError(null);

    // Hàm bất đồng bộ để tải các tin nhắn cũ thuộc cuộc hội thoại với selectedUserId
    const fetchMessages = async () => {
      // Truy vấn Supabase: Lấy tất cả cột từ bảng 'messages'
      // Lọc các tin nhắn dựa trên điều kiện OR:
      // Hoặc (người gửi là selectedUser VÀ người nhận bắt đầu bằng 'admin')
      // Hoặc (người gửi bắt đầu bằng 'admin' VÀ người nhận là selectedUser)
      // Sắp xếp tin nhắn theo thời gian tăng dần (tin nhắn cũ ở trên)
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(
          `and(username.eq.${selectedUserId}, receiver_id.like.admin%)`, // Tin nhắn từ user đến admin
          `and(username.like.admin%, receiver_id.eq.${selectedUserId})` // Tin nhắn từ admin đến user
        )
        .order("created_at", { ascending: true });

      if (error) {
        // Ghi log lỗi và cập nhật state nếu có lỗi
        console.error("Error fetching messages:", error.message);
        setError("Lỗi khi tải tin nhắn.");
        setMessages([]); // Đảm bảo danh sách tin nhắn trống nếu có lỗi
      } else {
        // Cập nhật state messages với dữ liệu nhận được (hoặc mảng rỗng nếu data là null)
        setMessages(data || []);
      }
      // Kết thúc tải
      setLoading(false);
    };

    // Hàm xử lý khi có tin nhắn mới được chèn vào bảng 'messages' qua Realtime
    const handleNewMessage = (payload) => {
      console.log("Realtime event (AdminChatArea):", payload);
      const newMessage = payload.new; // Lấy dữ liệu tin nhắn mới

      // Kiểm tra xem tin nhắn mới có liên quan đến cuộc hội thoại đang xem không:
      // Tin nhắn từ selectedUser gửi đến admin (receiver_id bắt đầu bằng 'admin')
      const isMessageFromSelectedUserToAdmin =
        newMessage.username === selectedUserId &&
        newMessage.receiver_id &&
        newMessage.receiver_id.startsWith("admin");

      // Hoặc tin nhắn từ admin (username bắt đầu bằng 'admin') gửi đến selectedUser
      const isMessageFromAdminToSelectedUser =
        newMessage.username &&
        newMessage.username.startsWith("admin") &&
        newMessage.receiver_id === selectedUserId;

      // Nếu tin nhắn mới thuộc về cuộc hội thoại này, thêm vào state
      if (
        isMessageFromSelectedUserToAdmin ||
        isMessageFromAdminToSelectedUser
      ) {
        console.log("New message added to state:", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } else {
        // Ghi log nếu tin nhắn không thuộc cuộc hội thoại đang xem
        console.log("New message ignored (not for this chat):", newMessage);
      }
    };

    // Trước khi thiết lập lắng nghe mới, gỡ bỏ tất cả các kênh cũ để tránh trùng lặp
    supabase.removeAllChannels();

    // Thiết lập lắng nghe Realtime cho bảng 'messages'
    // Lắng nghe sự kiện 'INSERT' (thêm mới bản ghi)
    // Vì bộ lọc trên Realtime channel có thể bị hạn chế cho các điều kiện OR phức tạp,
    // chúng ta sẽ lọc tin nhắn sau khi nhận payload trong handleNewMessage.
    const channel = supabase
      .channel(`chat_${selectedUserId}_admin`) // Đặt tên kênh duy nhất cho cuộc hội thoại này
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          // filter: "..." // Không sử dụng filter phức tạp ở đây
        },
        handleNewMessage // Hàm xử lý khi có sự kiện INSERT
      )
      .subscribe(); // Bắt đầu lắng nghe

    // Gọi hàm tải tin nhắn ban đầu ngay khi component mount hoặc selectedUserId thay đổi
    fetchMessages();

    // Hàm dọn dẹp: Gỡ bỏ kênh lắng nghe khi component unmount hoặc selectedUserId thay đổi
    return () => {
      console.log("Removing admin_chat_channel for user:", selectedUserId);
      // Sử dụng removeChannel với đối tượng channel cụ thể
      supabase.removeChannel(channel);
    };
  }, [selectedUserId]); // Dependency array: Effect chạy lại mỗi khi selectedUserId thay đổi

  // Effect để tự động cuộn xuống cuối danh sách tin nhắn khi messages state thay đổi
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Hàm xử lý việc gửi tin nhắn
  const handleSendMessage = async () => {
    // Không làm gì nếu nội dung rỗng hoặc chưa có người dùng được chọn
    if (newMessageText.trim() === "" || !selectedUserId) return;

    // TODO: Lấy ID người dùng admin đang đăng nhập thực tế
    // Dòng này cần được thay thế bằng cách lấy ID/username của admin từ phiên đăng nhập
    const currentAdminUserId = "admin1@valleybook.com"; // <-- Thay thế bằng logic lấy ID admin

    // Tạo đối tượng tin nhắn để chèn vào bảng 'messages'
    const messageToInsert = {
      username: currentAdminUserId, // Người gửi là admin hiện tại
      receiver_id: selectedUserId, // Người nhận là người dùng đang chat
      text: newMessageText.trim(), // Nội dung tin nhắn (đã loại bỏ khoảng trắng đầu/cuối)
      // Supabase sẽ tự động điền 'created_at' và 'message_id' (nếu được cấu hình)
    };

    // Chèn tin nhắn mới vào bảng 'messages'
    const { data, error } = await supabase
      .from("messages")
      .insert([messageToInsert]);

    if (error) {
      // Ghi log lỗi và cập nhật state lỗi nếu gửi thất bại
      console.error("Error sending message:", error.message);
      setError("Lỗi khi gửi tin nhắn.");
    } else {
      // Nếu gửi thành công, xóa nội dung trong input và reset lỗi
      setNewMessageText("");
      setError(null);
      // Tin nhắn mới sẽ được thêm vào state 'messages' thông qua Realtime listener
      // nên không cần cập nhật state 'messages' ở đây một cách thủ công (optimistic update có thể cần sau)
    }
  };

  // Xử lý sự kiện nhấn phím trong textarea (dùng Enter để gửi)
  const handleKeyPress = (event) => {
    // Nếu nhấn Enter và không giữ Shift, ngăn hành động mặc định và gọi hàm gửi tin nhắn
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Ngăn xuống dòng mặc định trong textarea
      handleSendMessage();
    }
  };

  // Hàm cuộn thanh cuộn xuống cuối danh sách tin nhắn
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ---- Render UI của khu vực chat ----
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Tiêu đề khu vực chat */}
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

      {/* Khu vực hiển thị tin nhắn */}
      <div
        style={{
          flex: 1, // Cho phép khu vực này chiếm hết không gian trống
          padding: "10px",
          overflowY: "auto", // Thêm thanh cuộn khi nội dung tràn ra
          display: "flex",
          flexDirection: "column",
          // Các style khác cho khu vực tin nhắn nếu cần
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
        {/* Render từng tin nhắn */}
        {messages.map((msg) => (
          <ChatMessage
            key={msg.message_id || uuidv4()} // Sử dụng message_id hoặc uuid ngẫu nhiên làm key
            message={msg}
            // Xác định tin nhắn này có phải do admin gửi hay không (để hiển thị ở bên phải)
            // Giả định username của admin bắt đầu bằng 'admin'
            isSentByCurrentUser={
              msg.username && msg.username.startsWith("admin")
            }
          />
        ))}
        {/* Element rỗng làm điểm neo để cuộn xuống cuối */}
        <div ref={messagesEndRef} />
      </div>

      {/* Khu vực nhập tin nhắn */}
      <div
        style={{
          padding: "10px",
          borderTop: "1px solid #ddd",
          display: "flex",
          alignItems: "center", // Căn chỉnh các mục theo chiều dọc
          flexShrink: 0, // Ngăn khu vực này co lại
        }}
      >
        <textarea
          placeholder={
            selectedUserId ? "Nhập tin nhắn..." : "Chọn người dùng để nhập..."
          }
          style={{
            flex: 1, // Cho phép textarea chiếm hết không gian trống còn lại
            padding: "8px",
            boxSizing: "border-box",
            marginRight: "10px",
            minHeight: "40px", // Chiều cao tối thiểu
            resize: "none", // Vô hiệu hóa resize bằng chuột
            borderRadius: "4px",
            border: "1px solid #ccc",
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
            backgroundColor:
              selectedUserId && newMessageText.trim() !== "" && !loading
                ? "#007bff"
                : "#ccc", // Màu sắc tùy thuộc trạng thái
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor:
              selectedUserId && newMessageText.trim() !== "" && !loading
                ? "pointer"
                : "not-allowed",
            height: "40px", // Chiều cao cố định cho nút
            transition: "background-color 0.2s ease",
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
