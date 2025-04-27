import React from "react";
// Import tệp CSS cho preloader (bạn sẽ cần thêm các style mới vào đây)
import "./Preloader.css";

// Đây là nơi bạn sẽ import tệp ảnh GIF của mình
// Ví dụ: import bookFlippingGif from './duong-dan/toi/anh/book-flipping.gif';
// Thay thế dòng dưới đây bằng dòng import thực tế của bạn,
// hoặc sử dụng trực tiếp đường dẫn public nếu ảnh nằm trong thư mục public
const bookFlippingGif = "/assets/images/preloader.gif"; // <--- Thay thế '/path/to/your/book-flipping.gif' bằng đường dẫn thực tế của tệp GIF

function Preloader() {
  return (
    // Giữ lại id và class js-preloader cho logic ẩn/hiện, thêm class gif-preloader
    <div id="js-preloader" className="js-preloader gif-preloader">
      {/* Thẻ img hiển thị ảnh GIF */}
      {/* Sử dụng biến bookFlippingGif đã định nghĩa ở trên */}
      <img src={bookFlippingGif} alt="Loading..." className="book-gif" />
    </div>
  );
}

export default Preloader;
