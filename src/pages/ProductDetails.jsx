import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getSingleBookData } from "../backend/getBookData";
import Preloader from "../components/Preloader";
import "../../public/assets/css/productDetail.css";

// --- Helper Functions for Cart (Tạm thời đặt ở đây, nên đưa vào file riêng hoặc Context) ---
const getCartItemsFromStorage = () => {
  // Thay localStorage bằng sessionStorage
  const items = sessionStorage.getItem("cartItems");
  return items ? JSON.parse(items) : []; // Trả về mảng rỗng nếu chưa có
};

const saveCartItemsToStorage = (items) => {
  // Thay localStorage bằng sessionStorage
  sessionStorage.setItem("cartItems", JSON.stringify(items));
};

function ProductDetails() {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
const [quantity, setQuantity] = useState(1); // State cho số lượng, mặc định là 1
const [addedMessage, setAddedMessage] = useState(""); // State cho thông báo
useEffect(() => {
  const fetchBookDetail = async () =>{
    let bookData= await getSingleBookData(id);
    console.log(bookData);
    if(bookData){
      setBook(bookData);
      setLoading(false);
    }
  };
  fetchBookDetail();
}, []);
const handleAddToCart = () => {
  if (!book) return; // Chưa có thông tin sách thì không làm gì

  const cartItems = getCartItemsFromStorage();
  const existingItemIndex = cartItems.findIndex(
    (item) => item.book_id === book.book_id
  );

  if (existingItemIndex > -1) {
    // Sản phẩm đã có trong giỏ, cập nhật số lượng
    cartItems[existingItemIndex].quantity += quantity;
  } else {
    // Sản phẩm chưa có, thêm mới
    const newItem = {
      ...book, // Sao chép tất cả thông tin sách
      id: book.book_id, // Đảm bảo có thuộc tính 'id' nếu Cart.jsx dùng 'id'
      quantity: quantity,
    };
    cartItems.push(newItem);
  }

  saveCartItemsToStorage(cartItems);
  console.log("Updated cart items:", cartItems);
  setAddedMessage(`Đã thêm ${quantity} "${book.book_name}" vào giỏ hàng!`); // Đặt thông báo
  // Xóa thông báo sau vài giây
  setTimeout(() => setAddedMessage(""), 3000);
};

// Xử lý thay đổi số lượng input
const handleQuantityChange = (event) => {
  const value = parseInt(event.target.value, 10);
  if (!isNaN(value) && value > 0) {
    setQuantity(value);
  } else {
    setQuantity(1); // Nếu nhập không hợp lệ thì đặt lại là 1
  }
};
  return (
    <div>
      {loading?<Preloader></Preloader>:<>
      <Header />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{book.book_name}</h3>
              <span className="breadcrumb">
                <a href="/">Trang chủ</a> &gt; <a href="/shop">Cửa hàng</a> &gt;{" "}
                {book.book_name}
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
                {/* Sử dụng book.url_image thay vì hardcode */}
                <img
                  src={
                    book.url_image ||
                    "https://via.placeholder.com/400x600?text=No+Image"
                  }
                  alt={book.book_name}
                />
              </div>
            </div>

            {/* Thông tin */}
            <div className="col-lg-6 align-self-center">
              <h4>{book.book_name}</h4>
              <span className="price">
                Giá:
                {(
                  book.price -
                  (book.price * (book.discount || 0)) / 100
                ).toLocaleString()}
                đ{/* Thêm kiểm tra book.discount tồn tại và lớn hơn 0 */}
                {book.discount && book.discount > 0 ? (
                  <em>{book.price.toLocaleString()}đ</em>
                ) : null}
              </span>
              <p style={{ textAlign: "justify" }}>{book.description}</p>

              {/* Thay thế form bằng div và quản lý bằng state/onClick */}
              <div className="quantity-add-cart">
                <input
                  type="number"
                  className="form-control quantity-input" // Thêm class để style nếu cần
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange} // Cập nhật state khi thay đổi
                  min="1"
                />
                {/* Bỏ type="submit" và thêm onClick */}

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="orange-button"
                >
                  <i className="fa fa-shopping-bag"></i> Thêm vào giỏ hàng
                </button>
              </div>
              {/* Hiển thị thông báo khi thêm thành công */}
              {addedMessage && <p className="added-message">{addedMessage}</p>}

              <ul>
                <li>
                  <span>Thể loại:</span>
                  {/* Kiểm tra book.book_genres tồn tại và là mảng */}
                  {book.book_genres && Array.isArray(book.book_genres) ? (
                    book.book_genres.map((singleGenre, index) => (
                      // Đảm bảo singleGenre có genre_name
                      <p key={index} className="book-genre">
                        {singleGenre?.genre_name || "N/A"}
                      </p>
                    ))
                  ) : (
                    <p className="book-genre">Không xác định</p>
                  )}
                </li>
                {/* Có thể thêm các thông tin khác như tác giả, nhà xuất bản... */}
                <li>
                  <span>Số lượng còn lại:</span> {book.quantity || "Hết hàng"}
                </li>
              </ul>
            </div>

            <div className="col-lg-12">
              <div className="sep"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mô tả & đánh giá */}
      <div className="more-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper">
                    {/* Giữ nguyên phần tab đánh giá */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="reviews-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#reviews"
                          type="button"
                          role="tab"
                          aria-controls="reviews"
                          aria-selected="false"
                        >
                          Đánh giá (0) {/* Cập nhật số lượng nếu có */}
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="reviews"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                    >
                      <p>Chưa có đánh giá nào cho sản phẩm này.</p>
                      {/* Thêm form để người dùng viết đánh giá nếu cần */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    }
    </div>
  );
}

export default ProductDetails;
