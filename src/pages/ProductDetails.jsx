import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom"; // Thêm Link
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getSingleBookData } from "../backend/getBookData"; // Giả sử hàm này lấy đủ dữ liệu rating hoặc bạn sẽ cập nhật nó
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../components/SimpleAudioPlayer";
// import { getReviews } from "../backend/getReviews"; // Giả sử bạn có hàm này để lấy reviews
import Preloader from "../components/Preloader";
import StarRating from "../components/StarRating"; // Import component StarRating
import "../../public/assets/css/productDetail.css"; // CSS gốc
import "../../public/assets/css/productDetailCustom.css"; // CSS tùy chỉnh đã thêm
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TrialReadModal from "../components/TrialRead.jsx";
import supabase from "../backend/initSupabase";

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
function ProductDetails({ onMusicControl }) {
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [isBackgroundMuted, setIsBackgroundMuted] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  // +++ THÊM STATE CHO POP-UP +++
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // State để lưu nội dung thông báo

  const [selectedType, setSelectedType] = useState("paper");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const DESCRIPTION_MAX_LENGTH = 250;

  const [reviews, setReviews] = useState([]);
  const [totalRatingCount, setTotalRatingCount] = useState(0);
  const [calculatedAverageRating, setCalculatedAverageRating] = useState(0);
  const [calculatedRatingBreakdown, setCalculatedRatingBreakdown] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [showAllReviews, setShowAllReviews] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleListenTrial = () => {
    if (onMusicControl) {
      onMusicControl("pause");
    }
    setShowAudioPlayer(true);
  };

  // Thêm hàm xử lý khi đóng audio player
  const handleCloseAudioPlayer = () => {
    setShowAudioPlayer(false);
    if (onMusicControl) {
      onMusicControl("play");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBookDetail = async () => {
      setLoading(true);
      try {
        let bookData = await getSingleBookData(id);
        if (bookData) {
          setBook(bookData);
          const currentReviews =
            bookData.reviews && Array.isArray(bookData.reviews)
              ? bookData.reviews
              : [];
          setReviews(currentReviews);

          const count = currentReviews.length;
          setTotalRatingCount(count);

          if (count > 0) {
            const sum = currentReviews.reduce(
              (acc, review) => acc + (review.rating || 0),
              0
            );
            const avg = sum / count;
            setCalculatedAverageRating(avg);

            const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
            currentReviews.forEach((review) => {
              const rating = review.rating;
              if (rating >= 1 && rating <= 5) {
                breakdown[rating]++;
              }
            });
            setCalculatedRatingBreakdown(breakdown);
          } else {
            setCalculatedAverageRating(0);
            setCalculatedRatingBreakdown({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
          }

          const priceAfterDiscount =
            bookData.price - (bookData.price * (bookData.discount || 0)) / 100;
          setCurrentPrice(priceAfterDiscount);
          setSelectedType("paper"); // Mặc định chọn sách giấy khi tải lại
        } else {
          console.error("Book not found!");
          setBook(null);
          setReviews([]);
          setTotalRatingCount(0);
          setCalculatedAverageRating(0);
          setCalculatedRatingBreakdown({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        setBook(null);
        setReviews([]);
        setTotalRatingCount(0);
        setCalculatedAverageRating(0);
        setCalculatedRatingBreakdown({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetail();
  }, [id]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    if (book) {
      let price = book.price; // Giá gốc (giả sử là sách giấy)
      if (type === "ebook") {
        price = book.price * 0.8;
      } else if (type === "audio") {
        price = book.price * 0.85;
      }
      const priceAfterDiscount = price - (price * (book.discount || 0)) / 100;
      setCurrentPrice(priceAfterDiscount);
    }
  };

  // --- CẬP NHẬT HÀM NÀY ---
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
        book_id: book.book_id,
        book_name: book.book_name,
        url_image: book.url_image,
        quantity: quantity,
        type: selectedType,
        price_at_cart: currentPrice,
        original_price: book.price,
        discount_at_cart: book.discount || 0,
      };
      cartItems.push(newItem);
    }
    saveCartItemsToStorage(cartItems);

    // +++ HIỂN THỊ POP-UP +++
    const message = `Đã thêm ${quantity} "${book.book_name}" (${mapBookType(
      selectedType
    )}) vào giỏ hàng!`;
    setPopupMessage(message); // Cập nhật nội dung thông báo
    setShowPopup(true); // Hiển thị pop-up

    // Tự động ẩn pop-up sau 3 giây
    setTimeout(() => {
      setShowPopup(false);
    }, 1500); // 3000ms = 3 giây

    // --- BỎ CÁC DÒNG NÀY ---
    // alert(
    //   `Đã thêm ${quantity} "${book.book_name}" (${mapBookType(
    //     selectedType
    //   )}) vào giỏ hàng!`
    // );
    // setAddedMessage(`Đã thêm ${quantity} "${book.book_name}" (${mapBookType(selectedType)}) vào giỏ hàng!`);
    // setTimeout(() => setAddedMessage(""), 3000);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };

  const handleReadTrial = () => {
    setShowTrialModal(true);
  };
  const handleCloseModal = () => {
    setShowTrialModal(false);
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

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

  const calculateRatingPercentage = (starCount) => {
    if (!calculatedRatingBreakdown || totalRatingCount === 0) return 0;
    return (
      ((calculatedRatingBreakdown[starCount] || 0) / totalRatingCount) * 100
    );
  };

  const handleWriteReviewClick = () => {
    // Kiểm tra lại userInfo trước khi hiển thị form (mặc dù nút đã được kiểm tra)
    if (!userInfo) {
      alert("Vui lòng đăng nhập để viết đánh giá.");
      // Có thể chuyển hướng đến trang đăng nhập nếu muốn
      // navigate('/signIn');
      return;
    }
    setShowReviewForm(true);
  };

  const handleCancelReview = () => {
    setShowReviewForm(false);
    setUserRating(0);
    setHoverRating(0);
    setReviewComment("");
  };

  const handleStarClick = (ratingValue) => {
    setUserRating(ratingValue);
  };

  const handleStarHover = (ratingValue) => {
    setHoverRating(ratingValue);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (userRating === 0) {
      alert("Vui lòng chọn số sao đánh giá.");
      return;
    }
    if (!reviewComment.trim()) {
      alert("Vui lòng nhập nội dung đánh giá.");
      return;
    }

    setIsSubmittingReview(true);
    const newReview = {
      rating: userRating,
      comment: reviewComment,

      username: userInfo.username || "Bạn",
    };

    // Tạo mảng reviews mới, đẩy review mới lên đầu
    const updatedReviews = [newReview, ...(reviews || [])];

    try {
      const { error } = await supabase
        .from("books")
        .update({ reviews: updatedReviews })
        .eq("book_id", book.book_id);
      if (error) throw error;
      setReviews(updatedReviews);

      const count = updatedReviews.length;
      setTotalRatingCount(count);

      if (count > 0) {
        const sum = updatedReviews.reduce(
          (acc, review) => acc + (review.rating || 0),
          0
        );
        const avg = sum / count;
        setCalculatedAverageRating(avg);

        const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        updatedReviews.forEach((review) => {
          const rating = review.rating;
          if (rating >= 1 && rating <= 5) {
            breakdown[rating]++;
          }
        });
        setCalculatedRatingBreakdown(breakdown);
      } else {
        setCalculatedAverageRating(0);
        setCalculatedRatingBreakdown({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
      }
      alert("Gửi đánh giá thành công!");
      handleCancelReview();
    } catch (error) {
      console.error("Lỗi khi lưu đánh giá lên Supabase:", error);
      alert("Không thể lưu đánh giá. Vui lòng thử lại.");
    } finally {
      setIsSubmittingReview(false);
    }
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
    <div style={{ position: "relative" }}>
      {showPopup && (
        <div className="add-to-cart-popup">
          <CheckCircleOutlineIcon
            style={{
              fontSize: "70px",
              color: "lightgreen",
              marginBottom: "10px",
            }}
          ></CheckCircleOutlineIcon>
          <p>{popupMessage}</p>
        </div>
      )}
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
              {/* Tên sách */}
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
                Giá: {Math.ceil(currentPrice).toLocaleString()}đ
                {/* Chỉ hiển thị giá gốc nếu có discount VÀ giá gốc khác giá hiện tại (tức là có giảm giá) */}
                {book.discount > 0 && book.price !== currentPrice && (
                  <em className="original-price-display">
                    {Math.ceil(book.price).toLocaleString()}đ
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
                  <>
                    <button
                      type="button"
                      onClick={handleListenTrial}
                      className="trial-button listen-trial"
                    >
                      <i className="fa fa-headphones"></i> Nghe thử
                    </button>

                    {showAudioPlayer && (
                      <AudioPlayer
                        onClose={handleCloseAudioPlayer}
                        autoPlay={true}
                      />
                    )}
                  </>
                )}
                {/* The modal component */}
                <TrialReadModal
                  show={showTrialModal}
                  handleClose={handleCloseModal}
                />
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

              {/* Thông tin khác */}
              <ul>
                <li>
                  <span style={{ fontSize: "20px", color: "black" }}>
                    Thể loại:
                  </span>
                  {book.book_genres &&
                  Array.isArray(book.book_genres) &&
                  book.book_genres.length > 0 ? (
                    book.book_genres.map((singleGenre, index) => (
                      <p
                        key={index}
                        className="book-genre"
                        onClick={() =>
                          navigate("/shop", {
                            state: {
                              genre: singleGenre.genre_name,
                              author_name: null,
                            },
                          })
                        }
                      >
                        {singleGenre?.genre_name || "N/A"}
                      </p>
                    ))
                  ) : (
                    <p className="book-genre">Chưa phân loại</p> // Hoặc thông báo khác
                  )}
                  <br></br>
                  <span style={{ fontSize: "20px", color: "black" }}>
                    Tác giả:
                  </span>{" "}
                  <p
                    className="book-genre"
                    onClick={() =>
                      navigate("/shop", {
                        state: {
                          genre: null,
                          author_name: book.authors.author_name,
                        },
                      })
                    }
                  >
                    {book.authors.author_name}
                  </p>
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
          {/* SỬ DỤNG totalRatingCount ĐỂ KIỂM TRA */}
          {totalRatingCount > 0 ? (
            <div className="row">
              {/* Cột Tóm tắt Rating */}
              <div className="col-lg-5 col-md-6">
                <div className="rating-summary">
                  <div className="average-rating">
                    <span className="average-score">
                      {/* SỬ DỤNG calculatedAverageRating */}
                      {calculatedAverageRating.toFixed(1)}
                    </span>
                    <span className="average-stars">
                      {/* SỬ DỤNG calculatedAverageRating */}
                      <StarRating rating={calculatedAverageRating} />
                    </span>
                    <span className="total-ratings">
                      {/* SỬ DỤNG totalRatingCount */}({totalRatingCount} đánh
                      giá)
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
                            // Hàm calculateRatingPercentage đã được cập nhật để dùng state mới
                            style={{
                              width: `${calculateRatingPercentage(stars)}%`,
                            }}
                            title={`${calculateRatingPercentage(stars).toFixed(
                              0
                            )}%`}
                          ></div>
                        </div>
                        <span className="star-percentage">
                          {calculateRatingPercentage(stars).toFixed(0)}%
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* ... (Phần form viết đánh giá giữ nguyên) ... */}
                  {userInfo && !showReviewForm && (
                    <button
                      onClick={handleWriteReviewClick}
                      className="orange-button write-review-button"
                    >
                      <i className="fas fa-pencil-alt"></i> Viết đánh giá của
                      bạn
                    </button>
                  )}

                  {/* Form chỉ hiện khi showReviewForm là true (và userInfo đã được kiểm tra khi click nút) */}
                  {showReviewForm && (
                    // --- Form Nhập Đánh Giá ---
                    <form className="review-form" onSubmit={handleReviewSubmit}>
                      <h5>Đánh giá của bạn</h5>
                      {/* Chọn sao */}
                      <div className="form-group star-input-group">
                        <label>Chọn số sao *</label>
                        <div className="stars">
                          {[1, 2, 3, 4, 5].map((starValue) => (
                            <i
                              key={starValue}
                              className={`fa-star ${
                                (hoverRating || userRating) >= starValue
                                  ? "fas"
                                  : "far" // fas = solid, far = regular/empty
                              }`}
                              onClick={() => handleStarClick(starValue)}
                              onMouseEnter={() => handleStarHover(starValue)}
                              onMouseLeave={handleStarLeave}
                            ></i>
                          ))}
                          <span className="selected-rating-text">
                            {userRating > 0 ? `(${userRating}/5 sao)` : ""}
                          </span>
                        </div>
                      </div>
                      {/* Nhập bình luận */}
                      <div className="form-group">
                        <label htmlFor="reviewComment">Viết bình luận *</label>
                        <textarea
                          id="reviewComment"
                          rows="4"
                          placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..."
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                          required
                        ></textarea>
                      </div>

                      {/* --- THÊM CHECKBOX ẨN DANH --- */}
                      {/* --- HẾT CHECKBOX ẨN DANH --- */}
                      {/* Nút Submit/Cancel */}
                      <div className="form-actions">
                        <button
                          type="submit"
                          className="orange-button submit-review-button"
                          disabled={isSubmittingReview}
                        >
                          {isSubmittingReview ? "Đang gửi..." : "Gửi đánh giá"}
                        </button>
                        <button
                          type="button"
                          className="cancel-review-button"
                          onClick={handleCancelReview}
                          disabled={isSubmittingReview}
                        >
                          Hủy
                        </button>
                      </div>
                    </form>
                    // --- Hết Form ---
                  )}
                  {/* --- Hết Nút viết đánh giá và Form --- */}
                </div>
              </div>

              {/* Cột Danh sách Reviews */}
              <div className="col-lg-7 col-md-6">
                <div className="reviews-list">
                  <h4 className="reviews-list-title">Đánh giá nổi bật</h4>
                  {reviews && reviews.length > 0 ? (
                    // +++ SỬ DỤNG STATE showAllReviews ĐỂ QUYẾT ĐỊNH RENDER +++
                    (showAllReviews ? reviews : reviews.slice(0, 3)).map(
                      (review, index) => (
                        <div className="review-item" key={review.id || index}>
                          {" "}
                          {/* Ưu tiên review.id nếu có */}
                          <div className="review-header">
                            <span className="reviewer-name">
                              {/* --- BẮT ĐẦU LOGIC HIỂN THỊ TÊN --- */}
                              {/* Ưu tiên 1: Kiểm tra cờ is_anonymous từ backend (nếu có) */}
                              {review.username}
                            </span>
                            <span className="review-stars">
                              <StarRating rating={review.rating} />
                            </span>
                          </div>
                          <p className="review-comment">{review.comment}</p>
                          {/* Hiển thị ngày nếu có */}
                          {review.date && (
                            <span className="review-date">
                              {new Date(review.date).toLocaleDateString(
                                "vi-VN"
                              )}
                            </span>
                          )}
                        </div>
                      )
                    )
                  ) : (
                    <p>Chưa có đánh giá nào.</p>
                  )}
                  {/* Kiểm tra state `reviews` */}
                  {!showAllReviews && reviews && reviews.length > 3 && (
                    <button
                      className="read-more-button"
                      style={{ marginTop: "15px" }}
                      onClick={() => setShowAllReviews(true)} // Cập nhật state khi click
                    >
                      Xem tất cả đánh giá ({reviews.length})
                    </button>
                  )}

                  {/* Chỉ hiển thị nút "Thu gọn" nếu đang show all */}
                  {showAllReviews && (
                    <button
                      className="read-more-button" // Có thể dùng class khác nếu muốn style riêng
                      style={{ marginTop: "15px" }}
                      onClick={() => setShowAllReviews(false)} // Cập nhật state khi click
                    >
                      Thu gọn đánh giá
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            // Thông báo khi chưa có đánh giá (sử dụng totalRatingCount)
            <div className="row">
              <div className="col-12 text-center">
                <p>Chưa có đánh giá nào cho sản phẩm này.</p>
                {/* +++ KIỂM TRA userInfo TRƯỚC KHI HIỂN THỊ NÚT +++ */}
                {userInfo && ( // Chỉ hiện nút nếu đã đăng nhập
                  <button
                    onClick={handleWriteReviewClick} // Vẫn dùng hàm này để mở form
                    className="orange-button write-review-button"
                    style={{ marginTop: "10px", width: "auto" }}
                  >
                    <i className="fas fa-pencil-alt"></i> Hãy là người đầu tiên
                    đánh giá
                  </button>
                )}
                {/* Form đánh giá sẽ hiện ra khi click nút trên (nếu đã đăng nhập) */}
                {showReviewForm && (
                  <form className="review-form" onSubmit={handleReviewSubmit}>
                    <h5>Đánh giá của bạn</h5>
                    {/* Chọn sao */}
                    <div className="form-group star-input-group">
                      <label>Chọn số sao *</label>
                      <div className="stars">
                        {[1, 2, 3, 4, 5].map((starValue) => (
                          <i
                            key={starValue}
                            className={`fa-star ${
                              (hoverRating || userRating) >= starValue
                                ? "fas"
                                : "far" // fas = solid, far = regular/empty
                            }`}
                            onClick={() => handleStarClick(starValue)}
                            onMouseEnter={() => handleStarHover(starValue)}
                            onMouseLeave={handleStarLeave}
                          ></i>
                        ))}
                        <span className="selected-rating-text">
                          {userRating > 0 ? `(${userRating}/5 sao)` : ""}
                        </span>
                      </div>
                    </div>
                    {/* Nhập bình luận */}
                    <div className="form-group">
                      <label htmlFor="reviewComment">Viết bình luận *</label>
                      <textarea
                        id="reviewComment"
                        rows="4"
                        placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..."
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    {/* --- THÊM CHECKBOX ẨN DANH --- */}
                    {/* --- HẾT CHECKBOX ẨN DANH --- */}
                    {/* Nút Submit/Cancel */}
                    <div className="form-actions">
                      <button
                        type="submit"
                        className="orange-button submit-review-button"
                        disabled={isSubmittingReview}
                      >
                        {isSubmittingReview ? "Đang gửi..." : "Gửi đánh giá"}
                      </button>
                      <button
                        type="button"
                        className="cancel-review-button"
                        onClick={handleCancelReview}
                        disabled={isSubmittingReview}
                      >
                        Hủy
                      </button>
                    </div>
                  </form>
                )}
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
