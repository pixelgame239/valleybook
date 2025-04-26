import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Thêm Link
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getSingleBookData } from "../backend/getBookData"; // Giả sử hàm này lấy đủ dữ liệu rating hoặc bạn sẽ cập nhật nó
import { useNavigate } from "react-router-dom";

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
function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState("");
  const [selectedType, setSelectedType] = useState("paper");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const DESCRIPTION_MAX_LENGTH = 250; // Giới hạn ký tự mô tả

  const [reviews, setReviews] = useState([]); // Khởi tạo là mảng rỗng
  // --- State cho dữ liệu rating tính toán ---
  const [totalRatingCount, setTotalRatingCount] = useState(0);
  const [calculatedAverageRating, setCalculatedAverageRating] = useState(0);
  const [calculatedRatingBreakdown, setCalculatedRatingBreakdown] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });
  // --- Hết State rating tính toán ---

  // --- State mới cho Form Đánh giá ---
  const [showReviewForm, setShowReviewForm] = useState(false); // State để ẩn/hiện form
  const [userRating, setUserRating] = useState(0); // Điểm sao người dùng chọn
  const [hoverRating, setHoverRating] = useState(0); // Điểm sao khi hover
  const [reviewComment, setReviewComment] = useState(""); // Nội dung bình luận
  const [isSubmittingReview, setIsSubmittingReview] = useState(false); // State loading khi gửi
  const [isAnonymous, setIsAnonymous] = useState(false); // <-- THÊM STATE NÀY
  // --- Hết State mới ---

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi component mount hoặc id thay đổi
    const fetchBookDetail = async () => {
      setLoading(true);
      try {
        // TODO: Đảm bảo getSingleBookData trả về cả thông tin rating
        let bookData = await getSingleBookData(id);
        if (bookData) {
          setBook(bookData);
          console.log(bookData);
          // Lấy reviews từ bookData (đã làm ở bước trước)
          const currentReviews =
            bookData.reviews && Array.isArray(bookData.reviews)
              ? bookData.reviews
              : [];
          setReviews(currentReviews);

          // --- TÍNH TOÁN RATING TỪ currentReviews ---
          const count = currentReviews.length;
          setTotalRatingCount(count); // Cập nhật tổng số đánh giá

          if (count > 0) {
            // Tính tổng điểm
            const sum = currentReviews.reduce(
              (acc, review) => acc + (review.rating || 0),
              0
            );
            // Tính trung bình và cập nhật state
            const avg = sum / count;
            setCalculatedAverageRating(avg);

            // Tính breakdown
            const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
            currentReviews.forEach((review) => {
              const rating = review.rating;
              if (rating >= 1 && rating <= 5) {
                breakdown[rating]++;
              }
            });
            setCalculatedRatingBreakdown(breakdown); // Cập nhật breakdown
          } else {
            // Reset nếu không có đánh giá
            setCalculatedAverageRating(0);
            setCalculatedRatingBreakdown({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
          }
          // --- HẾT PHẦN TÍNH TOÁN ---
          // --- Hết phần lấy reviews ---
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
          setReviews([]);
          // Reset cả rating tính toán
          setTotalRatingCount(0);
          setCalculatedAverageRating(0);
          setCalculatedRatingBreakdown({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        setBook(null);
        setReviews([]);
        // Reset cả rating tính toán
        setTotalRatingCount(0);
        setCalculatedAverageRating(0);
        setCalculatedRatingBreakdown({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
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
    // SỬ DỤNG STATE MỚI
    if (!calculatedRatingBreakdown || totalRatingCount === 0) return 0;
    return (
      ((calculatedRatingBreakdown[starCount] || 0) / totalRatingCount) * 100
    );
  };

  // --- Hàm xử lý Form Đánh giá ---
  const handleWriteReviewClick = () => {
    // TODO: Kiểm tra xem người dùng đã đăng nhập chưa
    // if (!isUserLoggedIn) { navigate('/signIn'); return; }
    setShowReviewForm(true); // Hiển thị form
  };

  const handleCancelReview = () => {
    setShowReviewForm(false); // Ẩn form
    setUserRating(0); // Reset sao
    setHoverRating(0);
    setReviewComment(""); // Reset comment
    setIsAnonymous(false);
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
    console.log("Submitting review:", {
      rating: userRating,
      comment: reviewComment,
      anonymous: isAnonymous, // Log thêm trạng thái ẩn danh
    });

    // --- TODO: Gọi API để gửi đánh giá lên backend ---
    try {
      // const reviewData = {
      //     bookId: id,
      //     rating: userRating,
      //     comment: reviewComment,
      //     // Thêm userId nếu cần
      // };
      // await submitReview(reviewData); // Gọi hàm API của bạn

      // --- Giả lập thành công ---
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Gửi đánh giá thành công!");

      // Cập nhật lại danh sách reviews (lý tưởng nhất là fetch lại)
      // const updatedReviews = await getReviews(id);
      // setReviews(updatedReviews);
      // Hoặc thêm review mới vào đầu danh sách (tạm thời)
      const newReview = {
        id: Date.now(), // Hoặc ID từ backend
        // Thay đổi user dựa trên isAnonymous
        user: isAnonymous ? "Người dùng ẩn danh" : "Bạn", // <-- THAY ĐỔI Ở ĐÂY
        rating: userRating,
        comment: reviewComment,
        date: new Date().toISOString(),
        // Có thể thêm trường is_anonymous: isAnonymous nếu backend cần
      };
      setReviews([newReview, ...reviews]);
      // TODO: Cập nhật lại averageRating, ratingCount, ratingBreakdown (lý tưởng là fetch lại book data)

      handleCancelReview(); // Đóng form và reset
    } catch (error) {
      console.error("Lỗi gửi đánh giá:", error);
      alert("Đã có lỗi xảy ra khi gửi đánh giá. Vui lòng thử lại.");
    } finally {
      setIsSubmittingReview(false);
    }
    // --- Hết phần gọi API ---
  };
  // --- Hết Hàm xử lý Form Đánh giá ---

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
                  <span style={{ fontSize: "20px", color: "black" }}>
                    Thể loại:
                  </span>
                  {book.book_genres &&
                  Array.isArray(book.book_genres) &&
                  book.book_genres.length > 0 ? (
                    book.book_genres.map((singleGenre, index) => (
                      <p key={index} className="book-genre" onClick={()=>navigate("/shop", {state:{genre: singleGenre.genre_name, author_name:null}})}>
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
                  <p className="book-genre" onClick={()=>navigate("/shop", {state:{genre:null, author_name: book.authors.author_name}})}>
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
                  {!showReviewForm ? (
                    <button
                      onClick={handleWriteReviewClick}
                      className="orange-button write-review-button"
                    >
                      <i className="fas fa-pencil-alt"></i> Viết đánh giá của bạn
                    </button>
                  ) : (
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
                      <div className="form-group anonymous-checkbox-group">
                        <input
                          type="checkbox"
                          id="anonymousReview"
                          checked={isAnonymous}
                          onChange={(e) => setIsAnonymous(e.target.checked)}
                        />
                        <label htmlFor="anonymousReview">
                          Gửi đánh giá ẩn danh
                        </label>
                      </div>
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
                    reviews.slice(0, 3).map((review, index) => (
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
                            {new Date(review.date).toLocaleDateString("vi-VN")}
                          </span>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>Chưa có đánh giá nào.</p>
                  )}
                  {/* Kiểm tra state `reviews` */}
                  {reviews &&
                    reviews.length > 3 && ( // Nút xem thêm nếu có nhiều hơn 3 reviews
                      <button
                        className="read-more-button"
                        style={{ marginTop: "15px" }}
                        // TODO: Thêm logic xử lý cho nút này (ví dụ: hiển thị tất cả reviews)
                        onClick={() =>
                          alert(
                            "Chức năng xem tất cả đánh giá đang được phát triển!"
                          )
                        }
                      >
                        Xem tất cả đánh giá
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
                {/* ... Nút viết đánh giá đầu tiên ... */}
                <button
                  onClick={handleWriteReviewClick} // Sử dụng hàm mở form mới
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
