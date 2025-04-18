import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Thêm Link
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getSingleBookData } from "../backend/getBookData"; // Giả sử hàm này lấy đủ dữ liệu rating hoặc bạn sẽ cập nhật nó
// import { getReviews } from "../backend/getReviews"; // Giả sử bạn có hàm này để lấy reviews
import Preloader from "../components/Preloader";
import StarRating from "../components/StarRating"; // Import component StarRating
import "../../public/assets/css/productDetail.css"; // CSS gốc
import "../../public/assets/css/productDetailCustom.css"; // CSS tùy chỉnh đã thêm

// --- Helper Functions for Cart ---
const getCartItemsFromStorage = () => {
  const items = sessionStorage.getItem("cartItems");
  return items ? JSON.parse(items) : [];
};

const saveCartItemsToStorage = (items) => {
  sessionStorage.setItem("cartItems", JSON.stringify(items));
};
// --- End Helper Functions ---

// Hàm map loại sách
const mapBookType = (typeCode) => {
  switch (typeCode) {
    case "paper":
      return "Sách giấy";
    case "ebook":
      return "Ebook";
    case "audio":
      return "Sách nói";
    default:
      return "Không xác định";
  }
};

// --- Dữ liệu đánh giá mẫu (Xóa khi có dữ liệu thật) ---
const sampleReviews = [
  {
    id: 1,
    user: "Nguyễn Văn A",
    rating: 5,
    comment: "Sách rất hay và ý nghĩa, nội dung sâu sắc, đáng đọc!",
    date: "2025-04-10",
  },
  {
    id: 2,
    user: "Trần Thị B",
    rating: 4,
    comment:
      "Nội dung tốt, trình bày rõ ràng. Tuy nhiên, bìa sách hơi mỏng manh.",
    date: "2025-04-12",
  },
  {
    id: 3,
    user: "Lê Văn C",
    rating: 5,
    comment:
      "Tuyệt vời! Giao hàng nhanh chóng, sách được đóng gói cẩn thận, chất lượng in ấn tốt.",
    date: "2025-04-14",
  },
];
// --- Hết dữ liệu mẫu ---

function ProductDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState("");
  const [selectedType, setSelectedType] = useState("paper");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const DESCRIPTION_MAX_LENGTH = 250; // Giới hạn ký tự mô tả

  // --- State và dữ liệu mẫu cho rating (Sẽ thay bằng dữ liệu thật) ---
  const [averageRating, setAverageRating] = useState(4.3); // Ví dụ
  const [ratingCount, setRatingCount] = useState(125); // Ví dụ
  const [ratingBreakdown, setRatingBreakdown] = useState({
    // Ví dụ
    5: 80,
    4: 25,
    3: 10,
    2: 5,
    1: 5,
  });
  const [reviews, setReviews] = useState(sampleReviews); // Dùng sample data
  // --- Hết state và dữ liệu mẫu ---

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component mount hoặc id thay đổi
    const fetchBookDetail = async () => {
      setLoading(true);
      try {
        // TODO: Đảm bảo getSingleBookData trả về cả thông tin rating
        let bookData = await getSingleBookData(id);
        if (bookData) {
          setBook(bookData);

          // --- Cập nhật state rating bằng dữ liệu thật ---
          // (Bỏ comment và chỉnh sửa khi có dữ liệu)
          // setAverageRating(bookData.average_rating || 0);
          // setRatingCount(bookData.rating_count || 0);
          // setRatingBreakdown(bookData.rating_breakdown || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
          // --- Hết cập nhật state rating ---

          // --- Fetch reviews ---
          // (Bỏ comment khi có hàm getReviews)
          // try {
          //   const fetchedReviews = await getReviews(id); // Gọi hàm lấy reviews
          //   setReviews(fetchedReviews);
          // } catch (reviewError) {
          //   console.error("Error fetching reviews:", reviewError);
          //   setReviews([]); // Đặt reviews thành mảng rỗng nếu lỗi
          // }
          // --- Hết Fetch reviews ---

          // Tính giá ban đầu (ưu tiên sách giấy)
          const priceAfterDiscount =
            bookData.price - (bookData.price * (bookData.discount || 0)) / 100;
          setCurrentPrice(priceAfterDiscount);
        } else {
          console.error("Book not found!");
          setBook(null); // Đảm bảo book là null nếu không tìm thấy
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetail();
  }, [id]); // Thêm id vào dependency array

  // Xử lý chọn loại sách và cập nhật giá (Cần logic giá thật)
  const handleTypeChange = (type) => {
    setSelectedType(type);
    if (book) {
      let price = book.price; // Giá gốc (giả sử là sách giấy)
      // --- TODO: Lấy giá đúng cho ebook và audio ---
      if (type === "ebook") {
        // price = book.ebook_price || book.price * 0.8; // Lấy giá ebook nếu có, nếu không thì giảm 20%
        price = book.price * 0.8; // Tạm thời giảm 20%
      } else if (type === "audio") {
        // price = book.audio_price || book.price * 0.85; // Lấy giá sách nói nếu có, nếu không thì giảm 15%
        price = book.price * 0.85; // Tạm thời giảm 15%
      }
      // --- Hết phần TODO giá ---
      const priceAfterDiscount = price - (price * (book.discount || 0)) / 100; // Áp dụng discount chung (nếu có)
      setCurrentPrice(priceAfterDiscount);
    }
  };

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = () => {
    if (!book) return;
    const cartItems = getCartItemsFromStorage();
    const existingItemIndex = cartItems.findIndex(
      (item) => item.book_id === book.book_id && item.type === selectedType
    );

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      const newItem = {
        book_id: book.book_id, // Chỉ lưu những gì cần thiết cho giỏ hàng
        book_name: book.book_name,
        url_image: book.url_image,
        quantity: quantity,
        type: selectedType,
        price_at_cart: currentPrice, // Giá đã chọn
        original_price: book.price, // Lưu giá gốc để hiển thị nếu cần
        discount_at_cart: book.discount || 0, // Lưu % discount gốc
      };
      cartItems.push(newItem);
    }
    saveCartItemsToStorage(cartItems);
    setAddedMessage(
      `Đã thêm ${quantity} "${book.book_name}" (${mapBookType(
        selectedType
      )}) vào giỏ hàng!`
    );
    setTimeout(() => setAddedMessage(""), 3000);
  };

  // Xử lý thay đổi số lượng
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };

  // Xử lý nút đọc/nghe thử
  const handleReadTrial = () => {
    alert("Chức năng Đọc thử đang được phát triển!");
  };
  const handleListenTrial = () => {
    alert("Chức năng Nghe thử đang được phát triển!");
  };

  // Xử lý nút xem thêm/thu gọn mô tả
  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  // Lấy nội dung mô tả
  const getDescriptionContent = () => {
    if (!book?.description) return "Chưa có mô tả cho sản phẩm này.";
    if (
      book.description.length <= DESCRIPTION_MAX_LENGTH ||
      isDescriptionExpanded
    ) {
      return book.description;
    }
    return `${book.description.substring(0, DESCRIPTION_MAX_LENGTH)}...`;
  };

  // Xử lý nút viết đánh giá
  const handleWriteReview = () => {
    alert("Chức năng viết đánh giá đang được phát triển!");
  };

  // Tính tỷ lệ phần trăm cho breakdown
  const calculateRatingPercentage = (starCount) => {
    if (!ratingBreakdown || ratingCount === 0) return 0;
    return ((ratingBreakdown[starCount] || 0) / ratingCount) * 100;
  };

  // --- Render ---
  if (loading) {
    return <Preloader />;
  }

  if (!book) {
    // --- Giao diện khi không tìm thấy sách ---
    return (
      <>
        <Header />
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>Không tìm thấy sản phẩm</h3>
                <span className="breadcrumb">
                  <Link to="/">Trang chủ</Link> &gt;{" "}
                  <Link to="/shop">Cửa hàng</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container section"
          style={{ textAlign: "center", minHeight: "30vh" }}
        >
          <p>Rất tiếc, không tìm thấy thông tin chi tiết cho sản phẩm này.</p>
          <Link
            to="/shop"
            className="orange-button"
            style={{ marginTop: "20px" }}
          >
            Quay lại cửa hàng
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // --- Giao diện chi tiết sách ---
  return (
    <div>
      <Header />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{book.book_name}</h3>
              <span className="breadcrumb">
                <Link to="/">Trang chủ</Link> &gt;{" "}
                <Link to="/shop">Cửa hàng</Link> &gt; {book.book_name}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product section">
        <div className="container">
          <div className="row">
            {/* Ảnh */}
            <div className="col-lg-6">
              <div className="left-image">
                <img
                  src={
                    book.url_image ||
                    "https://via.placeholder.com/400x600?text=No+Image"
                  }
                  alt={book.book_name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/400x600?text=No+Image";
                  }}
                />
              </div>
            </div>

            {/* Thông tin */}
            <div className="col-lg-6 align-self-center">
              <h4>{book.book_name}</h4>

              {/* Loại Sách */}
              <div className="book-type-selection">
                <h5>Chọn loại sách:</h5>
                <div className="type-options">
                  <button
                    type="button"
                    className={`type-button ${
                      selectedType === "paper" ? "active" : ""
                    }`}
                    onClick={() => handleTypeChange("paper")}
                  >
                    Sách giấy
                  </button>
                  <button
                    type="button"
                    className={`type-button ${
                      selectedType === "ebook" ? "active" : ""
                    }`}
                    onClick={() => handleTypeChange("ebook")}
                  >
                    Ebook
                  </button>
                  <button
                    type="button"
                    className={`type-button ${
                      selectedType === "audio" ? "active" : ""
                    }`}
                    onClick={() => handleTypeChange("audio")}
                  >
                    Sách nói
                  </button>
                </div>
              </div>

              {/* Giá */}
              <span className="price main-price">
                Giá: {currentPrice.toLocaleString()}đ
                {/* Chỉ hiển thị giá gốc nếu có discount VÀ giá gốc khác giá hiện tại (tức là có giảm giá) */}
                {book.discount > 0 && book.price !== currentPrice && (
                  <em className="original-price-display">
                    {book.price.toLocaleString()}đ
                  </em>
                )}
              </span>
              {/* Nút Thử */}
              <div className="trial-buttons">
                {(selectedType === "paper" || selectedType === "ebook") && (
                  <button
                    type="button"
                    onClick={handleReadTrial}
                    className="trial-button read-trial"
                  >
                    <i className="fa fa-book-open"></i> Đọc thử
                  </button>
                )}
                {selectedType === "audio" && (
                  <button
                    type="button"
                    onClick={handleListenTrial}
                    className="trial-button listen-trial"
                  >
                    <i className="fa fa-headphones"></i> Nghe thử
                  </button>
                )}
              </div>

              {/* Mô tả */}
              <div className="description-wrapper">
                <p style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
                  {getDescriptionContent()}
                </p>
                {book.description &&
                  book.description.length > DESCRIPTION_MAX_LENGTH && (
                    <button
                      onClick={toggleDescription}
                      className="read-more-button"
                    >
                      {isDescriptionExpanded ? "Thu gọn" : "Đọc thêm"}
                    </button>
                  )}
              </div>

              {/* Số lượng và Giỏ hàng */}
              <div className="quantity-add-cart">
                <input
                  type="number"
                  className="form-control quantity-input"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="orange-button add-to-cart-button"
                >
                  <i className="fa fa-shopping-bag"></i> Thêm vào giỏ hàng
                </button>
              </div>
              {addedMessage && <p className="added-message">{addedMessage}</p>}

              {/* Thông tin khác */}
              <ul>
                <li>
                  <span>Thể loại:</span>
                  {book.book_genres &&
                  Array.isArray(book.book_genres) &&
                  book.book_genres.length > 0 ? (
                    book.book_genres.map((singleGenre, index) => (
                      <p key={index} className="book-genre">
                        {singleGenre?.genre_name || "N/A"}
                      </p>
                    ))
                  ) : (
                    <p className="book-genre">Chưa phân loại</p> // Hoặc thông báo khác
                  )}
                </li>
                {/* Số lượng còn lại đã bị ẩn/xóa */}
              </ul>
            </div>

            {/* Separator */}
          </div>
        </div>
      </div>

      {/* --- Phần Đánh Giá Bằng Sao --- */}
      <div className="product-ratings-reviews section">
        <div className="container">
          <h3 className="section-title">Đánh giá sản phẩm</h3>
          {ratingCount > 0 ? ( // Chỉ hiển thị nếu có đánh giá
            <div className="row">
              {/* Cột Tóm tắt Rating */}
              <div className="col-lg-5 col-md-6">
                <div className="rating-summary">
                  <div className="average-rating">
                    <span className="average-score">
                      {averageRating.toFixed(1)}
                    </span>
                    <span className="average-stars">
                      <StarRating rating={averageRating} />
                    </span>
                    <span className="total-ratings">
                      ({ratingCount} đánh giá)
                    </span>
                  </div>
                  <div className="rating-breakdown">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div className="breakdown-row" key={stars}>
                        <span className="star-label">
                          {stars} <i className="fas fa-star"></i>
                        </span>
                        <div className="progress-bar-container">
                          <div
                            className="progress-bar"
                            style={{
                              width: `${calculateRatingPercentage(stars)}%`,
                            }}
                            title={`${calculateRatingPercentage(stars).toFixed(
                              0
                            )}%`} // Thêm title để xem % khi hover
                          ></div>
                        </div>
                        <span className="star-percentage">
                          {calculateRatingPercentage(stars).toFixed(0)}%
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleWriteReview}
                    className="orange-button write-review-button"
                  >
                    <i className="fas fa-pencil-alt"></i> Viết đánh giá của bạn
                  </button>
                </div>
              </div>

              {/* Cột Danh sách Reviews */}
              <div className="col-lg-7 col-md-6">
                <div className="reviews-list">
                  <h4 className="reviews-list-title">Đánh giá nổi bật</h4>
                  {reviews && reviews.length > 0 ? (
                    reviews.slice(0, 3).map(
                      (
                        review // Hiển thị tối đa 3 review
                      ) => (
                        <div className="review-item" key={review.id}>
                          <div className="review-header">
                            <span className="reviewer-name">{review.user}</span>
                            <span className="review-stars">
                              <StarRating rating={review.rating} />
                            </span>
                          </div>
                          <p className="review-comment">{review.comment}</p>
                          <span className="review-date">
                            {new Date(review.date).toLocaleDateString("vi-VN")}
                          </span>
                        </div>
                      )
                    )
                  ) : (
                    <p>Chưa có đánh giá nào.</p>
                  )}
                  {reviews &&
                    reviews.length > 3 && ( // Nút xem thêm nếu có nhiều hơn 3 reviews
                      <button
                        className="read-more-button"
                        style={{ marginTop: "15px" }}
                      >
                        Xem tất cả đánh giá
                      </button>
                      // TODO: Thêm logic xử lý cho nút này
                    )}
                </div>
              </div>
            </div>
          ) : (
            // Thông báo khi chưa có đánh giá
            <div className="row">
              <div className="col-12 text-center">
                <p>Chưa có đánh giá nào cho sản phẩm này.</p>
                <button
                  onClick={handleWriteReview}
                  className="orange-button write-review-button"
                  style={{ marginTop: "10px", width: "auto" }}
                >
                  <i className="fas fa-pencil-alt"></i> Hãy là người đầu tiên
                  đánh giá
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* --- Hết Phần Đánh Giá --- */}

      <Footer />
    </div>
  );
}

export default ProductDetails;
