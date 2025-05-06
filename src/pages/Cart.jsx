import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../public/assets/css/Cart.css";
import { Link } from "react-router-dom";
import ChatBubble from "../components/ChatBubble";

// --- Helper Functions for Cart ---
const getCartItemsFromStorage = () => {
  // Thay localStorage bằng sessionStorage
  const items = sessionStorage.getItem("cartItems");
  return items ? JSON.parse(items) : []; // Chỉ lấy từ storage, không dùng sample nữa
};

const saveCartItemsToStorage = (items) => {
  // Thay localStorage bằng sessionStorage
  sessionStorage.setItem("cartItems", JSON.stringify(items));
};
// --- End Helper Functions ---

// --- Dữ liệu Voucher mẫu (Giữ nguyên) ---
const VALID_VOUCHERS = {
  GIAM10: { type: "percentage", value: 10 },
  GIAM50K: { type: "fixed", value: 50000 },
  FREESHIP: { type: "shipping", value: 0 },
};
// --- End Voucher mẫu ---

// Hàm ánh xạ mã loại sách sang tên tiếng Việt
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

function Cart() {
  const [cartItems, setCartItems] = useState(getCartItemsFromStorage());
  const [voucherCode, setVoucherCode] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [voucherMessage, setVoucherMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    document.title = "Giỏ hàng - Valley Book";
    applyVoucherDiscount(appliedVoucher, cartItems);
  }, [cartItems, appliedVoucher]); 

  // --- Tính tổng tiền tạm tính (sử dụng price_at_cart) ---
  const calculateSubtotalForItem = (item) => {
    // Sử dụng giá đã lưu khi thêm vào giỏ hàng
    return (item.price_at_cart || 0) * (item.quantity || 1);
  };

  const subtotalAmount = cartItems.reduce(
    (total, item) => total + calculateSubtotalForItem(item),
    0
  );

  // Hàm cập nhật số lượng
  const updateQuantity = (id, type, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map((item) =>
      item.book_id === id && item.type === type // Phân biệt dựa trên cả id và type
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCartItems(updatedItems);
    saveCartItemsToStorage(updatedItems);
    // Tính lại giảm giá đã được tích hợp trong useEffect
  };

  // Hàm xóa sản phẩm
  const removeItem = (id, type) => {
    const updatedItems = cartItems.filter(
      (item) => !(item.book_id === id && item.type === type) // Phân biệt dựa trên cả id và type
    );
    setCartItems(updatedItems);
    saveCartItemsToStorage(updatedItems);
    // Tính lại giảm giá đã được tích hợp trong useEffect
  };

  // Hàm tính toán và áp dụng giảm giá voucher (sử dụng subtotalAmount đã tính đúng)
  const applyVoucherDiscount = (voucher, currentCartItems) => {
    // Tính lại subtotal dựa trên currentCartItems để đảm bảo tính đúng
    const currentSubtotal = currentCartItems.reduce(
      (total, item) => total + calculateSubtotalForItem(item),
      0
    );

    if (!voucher || currentSubtotal === 0) {
      setDiscountAmount(0);
      return 0;
    }

    let calculatedDiscount = 0;
    if (voucher.type === "percentage") {
      calculatedDiscount = (currentSubtotal * voucher.value) / 100;
    } else if (voucher.type === "fixed") {
      calculatedDiscount = voucher.value;
    }

    calculatedDiscount = Math.min(calculatedDiscount, currentSubtotal);
    setDiscountAmount(calculatedDiscount);
    return calculatedDiscount;
  };

  // Hàm xử lý khi nhấn nút Áp dụng Voucher
  const handleApplyVoucher = () => {
    const code = voucherCode.trim().toUpperCase();
    const voucher = VALID_VOUCHERS[code];

    if (voucher) {
      setAppliedVoucher(voucher);
      applyVoucherDiscount(voucher, cartItems); // Cập nhật state giảm giá
      setVoucherMessage({
        text: `Áp dụng thành công voucher "${code}"!`,
        type: "success",
      });
    } else {
      setAppliedVoucher(null);
      setDiscountAmount(0);
      setVoucherMessage({
        text: "Mã voucher không hợp lệ hoặc đã hết hạn.",
        type: "error",
      });
    }
    setTimeout(() => setVoucherMessage({ text: "", type: "" }), 4000);
  };

  // Tính tổng tiền cuối cùng
  const finalTotalAmount = subtotalAmount - discountAmount;

  return (
    <div>
      <Header currentPage="cart" />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Giỏ Hàng Của Bạn</h3>
              <span className="breadcrumb">
                <Link to="/">Trang chủ</Link> &gt; Giỏ hàng
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">Giỏ hàng</h1>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fa fa-shopping-cart empty-cart-icon"></i>
              <p>Giỏ hàng của bạn đang trống.</p>
              <Link to="/shop" className="orange-button">
                Tiếp tục mua sắm
              </Link>
            </div>
          ) : (
            <div className="row">
              {/* Danh sách sản phẩm */}
              <div className="col-lg-8">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Tạm tính</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      // --- Sử dụng key kết hợp id và type ---
                      <tr key={`${item.book_id}-${item.type}`}>
                        <td>
                          <div className="product-info">
                            <img
                              src={
                                item.url_image ||
                                "https://via.placeholder.com/100x150?text=No+Image"
                              }
                              alt={item.book_name}
                              className="product-image"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://via.placeholder.com/100x150?text=No+Image";
                              }}
                            />
                            <div>
                              {" "}
                              {/* Thêm div để chứa tên và loại */}
                              <span className="product-name">
                                {item.book_name}
                              </span>
                              {/* --- Hiển thị loại sách --- */}
                              <small className="product-type-display">
                                Loại: {mapBookType(item.type)}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="product-price">
                            {/* --- Hiển thị giá tại thời điểm thêm vào giỏ --- */}
                            {(item.price_at_cart || 0).toLocaleString()}đ
                            {/* Hiển thị giá gốc nếu có giảm giá (dựa trên discount gốc của sách giấy) */}
                            {item.discount_at_cart > 0 && (
                              <em className="original-price">
                                {item.original_price
                                  ? item.original_price.toLocaleString() + "đ"
                                  : ""}
                              </em>
                            )}
                          </span>
                        </td>
                        <td>
                          <div className="quantity-control">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.book_id,
                                  item.type,
                                  item.quantity - 1
                                )
                              }
                              disabled={item.quantity <= 1} // Vô hiệu hóa nút nếu số lượng là 1
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              min="1"
                              readOnly // Nên để readOnly vì đã có nút +/-
                            />
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.book_id,
                                  item.type,
                                  item.quantity + 1
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          {/* --- Tạm tính dựa trên giá tại giỏ hàng --- */}
                          {calculateSubtotalForItem(item).toLocaleString()}đ
                        </td>
                        <td>
                          <button
                            onClick={() => removeItem(item.book_id, item.type)}
                            className="remove-button"
                          >
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Tóm tắt giỏ hàng */}
              <div className="col-lg-4">
                <div className="cart-summary">
                  <h4>Tóm tắt đơn hàng</h4>
                  <div className="summary-row">
                    <span>Tạm tính:</span>
                    <span>{subtotalAmount.toLocaleString()}đ</span>
                  </div>

                  {/* Phần Voucher */}
                  <div className="voucher-section">
                    <label htmlFor="voucher">Mã giảm giá:</label>
                    <div className="voucher-input-group">
                      <input
                        type="text"
                        id="voucher"
                        placeholder="Nhập mã voucher"
                        value={voucherCode}
                        onChange={(e) => setVoucherCode(e.target.value)}
                      />
                      <button
                        onClick={handleApplyVoucher}
                        className="apply-voucher-button"
                      >
                        Áp dụng
                      </button>
                    </div>
                    {voucherMessage.text && (
                      <p className={`voucher-message ${voucherMessage.type}`}>
                        {voucherMessage.text}
                      </p>
                    )}
                  </div>
                  {/* Hết Phần Voucher */}

                  {discountAmount > 0 && (
                    <div className="summary-row discount-row">
                      <span>Giảm giá voucher:</span>
                      <span>- {discountAmount.toLocaleString()}đ</span>
                    </div>
                  )}

                  <div className="summary-row total-row">
                    <span>Tổng cộng:</span>
                    <span>{finalTotalAmount.toLocaleString()}đ</span>
                  </div>

                  <Link
                    to="/checkout"
                    className="orange-button checkout-button"
                  >
                    Tiến hành thanh toán
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
          <ChatBubble />
      <Footer />
    </div>
  );
}

export default Cart;
