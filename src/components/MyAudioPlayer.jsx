import React, { useRef, useEffect } from "react";

function MyAudioPlayer() {
  const audioUrl =
    "https://asrqcfdysjuddpjxnnkx.supabase.co/storage/v1/object/sign/audio/web-sound-2.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdWRpby93ZWItc291bmQtMi5tcDMiLCJpYXQiOjE3NDY5NTExMTQsImV4cCI6MTc3ODQ4NzExNH0.U0EdcZs_PpnEllKGh4QmdAAFMTDZLAKbnCzYYUfQ99E";

  // 1. Tạo một ref để tham chiếu đến phần tử audio
  const audioRef = useRef(null);

  // 2. Sử dụng useEffect để thêm event listeners sau khi component mount
  useEffect(() => {
    const audioElement = audioRef.current;

    // Kiểm tra xem phần tử audio có tồn tại không
    if (audioElement) {
      // Hàm xử lý khi nhạc bắt đầu phát
      const handlePlaying = () => {
        console.log("Audio bắt đầu phát!");
      };

      // Hàm xử lý khi có lỗi xảy ra
      const handleError = () => {
        console.error("Đã xảy ra lỗi khi phát audio.");
        // Bạn có thể kiểm tra thêm chi tiết lỗi nếu cần, ví dụ:
        // console.error("Mã lỗi:", audioElement.error.code);
        // console.error("Thông báo lỗi:", audioElement.error.message);
      };

      // Thêm các bộ lắng nghe sự kiện
      audioElement.addEventListener("playing", handlePlaying);
      audioElement.addEventListener("error", handleError);

      // 3. Cleanup function: Xóa bộ lắng nghe khi component unmount
      return () => {
        audioElement.removeEventListener("playing", handlePlaying);
        audioElement.removeEventListener("error", handleError);
      };
    }
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy một lần sau render ban đầu

  return (
    <div>
      {/* Các nội dung khác của component */}

      {/* Nhúng thẻ audio và gán ref */}
      <audio ref={audioRef} autoPlay loop>
        <source src={audioUrl} type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ thẻ audio.
      </audio>

      {/* Các nội dung khác của component */}
    </div>
  );
}

export default MyAudioPlayer;
