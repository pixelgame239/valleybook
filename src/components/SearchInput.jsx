import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom"; // Thêm useNavigate
import supabase from "../backend/initSupabase"; // Đường dẫn tới file initSupabase
import StarRating from "../components/StarRating"; // Import StarRating nếu bạn có component này
import "./SearchInput.css"; // Đảm bảo CSS được import

// --- Helper function để tính giá sau giảm giá ---
const calculateDiscountedPrice = (price, discount) => {
  if (!price) return 0;
  const discountAmount = (price * (discount || 0)) / 100;
  return price - discountAmount;
};

// --- Helper function để tính rating trung bình ---
const calculateAverageRating = (reviews) => {
  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
    return 0;
  }
  const totalRating = reviews.reduce(
    (sum, review) => sum + (review.rating || 0),
    0
  );
  return totalRating / reviews.length;
};

// --- Hàm debounce ---
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef(null); // Ref cho container chính
  const navigate = useNavigate(); // Hook để điều hướng

  // --- Hàm gọi Supabase để tìm kiếm sách ---
  const searchBooks = async (term) => {
    if (!term.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsLoading(true);
    setShowResults(true); // Hiển thị popup ngay khi bắt đầu tìm kiếm

    try {
      // Sử dụng ilike cho tìm kiếm không phân biệt hoa thường và gần đúng
      // Lấy các trường cần thiết: id, tên, ảnh, giá, discount, reviews, và tên tác giả từ bảng liên kết
      const { data, error } = await supabase
        .from("books")
        .select(
          `
          book_id,
          book_name,
          url_image,
          price,
          discount,
          reviews,
          authors ( author_name )
        `
        )
        .ilike("book_name", `%${term}%`) // Tìm kiếm gần đúng, không phân biệt hoa/thường
        .limit(10); // Giới hạn số lượng kết quả

      if (error) {
        throw error;
      }

      // Định dạng lại dữ liệu trả về nếu cần (ví dụ: tính giá, rating)
      const formattedResults = data.map((book) => ({
        ...book,
        final_price: calculateDiscountedPrice(book.price, book.discount),
        average_rating: calculateAverageRating(book.reviews),
        author_name: book.authors?.author_name || "N/A", // Lấy tên tác giả
      }));

      setResults(formattedResults);
    } catch (error) {
      console.error("Error searching books:", error);
      setResults([]); // Xóa kết quả nếu có lỗi
    } finally {
      setIsLoading(false);
    }
  };

  // --- Sử dụng useCallback và debounce để tối ưu hóa việc gọi API ---
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce(searchBooks, 300), []); // 300ms delay

  // --- Xử lý khi input thay đổi ---
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim()) {
      debouncedSearch(term);
    } else {
      // Nếu ô input trống, hủy debounce và ẩn kết quả
      debouncedSearch.cancel?.(); // Hủy debounce nếu có hàm cancel (cần thư viện debounce hỗ trợ)
      setResults([]);
      setShowResults(false);
      setIsLoading(false);
    }
  };

  // --- Xử lý khi nhấn Enter ---
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Ngăn form submit mặc định
      // Có thể thêm logic ở đây, ví dụ: điều hướng đến trang kết quả tìm kiếm đầy đủ
      if (searchTerm.trim()) {
        navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`); // Ví dụ: điều hướng đến trang shop với query
        setShowResults(false); // Ẩn popup sau khi Enter
      }
    }
  };

  // --- Xử lý đóng pop-up khi click ra ngoài ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };
    // Thêm event listener khi component mount
    document.addEventListener("mousedown", handleClickOutside);
    // Dọn dẹp event listener khi component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Chạy một lần duy nhất

  return (
    // Bọc toàn bộ component trong div với ref
    <div className="search-input-container" ref={searchContainerRef}>
      <div className="search-input">
        {/* Không cần thẻ form nữa nếu không submit theo cách truyền thống */}
        <input
          type="text"
          placeholder="Tìm kiếm sách..."
          id="searchText"
          name="searchKeyword"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Thêm xử lý Enter
          className="search-input-field"
          autoComplete="off" // Tắt gợi ý mặc định của trình duyệt
        />
        {/* Icon tìm kiếm có thể giữ lại hoặc bỏ đi tùy ý */}
        <span className="search-icon-wrapper">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/search.png"
            alt="search icon"
            className="search-icon"
          />
        </span>

        {/* Pop-up hiển thị kết quả */}
        {showResults && (
          <div className="search-results-popup">
            {isLoading ? (
              <div className="loading-indicator">Đang tìm kiếm...</div>
            ) : results.length > 0 ? (
              <ul>
                {results.map((book) => (
                  <li key={book.book_id} className="search-result-item">
                    <Link
                      to={`/shop/${book.book_id}`}
                      onClick={() => setShowResults(false)} // Ẩn popup khi click vào link
                    >
                      <img
                        src={
                          book.url_image ||
                          "https://via.placeholder.com/50x75?text=N/A"
                        } // Ảnh mặc định
                        alt={book.book_name}
                        className="result-book-image"
                      />
                      <div className="result-book-info">
                        <div className="result-book-name">{book.book_name}</div>
                        <div className="result-book-author">
                          {book.author_name}
                        </div>
                        <div className="result-book-price">
                          {book.final_price.toLocaleString()}đ
                          {/* Hiển thị giá gốc nếu có giảm giá */}
                          {book.discount > 0 && (
                            <span className="original-price">
                              {book.price.toLocaleString()}đ
                            </span>
                          )}
                        </div>
                        {/* Hiển thị sao đánh giá (cần component StarRating) */}
                        {/* <div className="result-book-rating">
                          <StarRating rating={book.average_rating} />
                          ({book.average_rating.toFixed(1)})
                        </div> */}
                        {/* Hoặc chỉ hiển thị số sao nếu không có component */}
                        <div className="result-book-rating">
                          {book.average_rating > 0
                            ? `⭐️ ${book.average_rating.toFixed(1)}`
                            : "Chưa có đánh giá"}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="no-results">Không tìm thấy kết quả nào.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
