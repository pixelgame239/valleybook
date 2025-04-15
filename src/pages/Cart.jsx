import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../public/assets/css/Cart.css"; // Tạo file này nếu cần style riêng
import { Link } from "react-router-dom";

const getCartItemsFromStorage = () => {
  // Dữ liệu mẫu nếu chưa có gì trong storage (Giữ lại để test)
  const sampleItems = [
    {
      id: 1,
      book_id: 1,
      book_name: "Sách Mẫu 1",
      price: 150000,
      quantity: 1,
      url_image: "https://via.placeholder.com/100x150",
      discount: 10,
    },
    {
      id: 2,
      book_id: 2,
      book_name: "Sách Mẫu 2 Dài Tên Hơn Một Chút",
      price: 220000,
      quantity: 2,
      url_image: "https://via.placeholder.com/100x150",
      discount: 0,
    },
  ];
  // Thay localStorage bằng sessionStorage
  const items = sessionStorage.getItem("cartItems");
  // Ưu tiên lấy từ sessionStorage, nếu không có thì dùng sample
  return items ? JSON.parse(items) : sampleItems;
};

const saveCartItemsToStorage = (items) => {
  // Thay localStorage bằng sessionStorage
  sessionStorage.setItem("cartItems", JSON.stringify(items));
};
// --- End Helper Functions ---

// --- Dữ liệu Voucher mẫu (Nên lấy từ API hoặc cấu hình) ---
const VALID_VOUCHERS = {
  GIAM10: { type: "percentage", value: 10 }, // Giảm 10%
  GIAM50K: { type: "fixed", value: 50000 }, // Giảm 50,000đ
  FREESHIP: { type: "shipping", value: 0 }, // Logic freeship có thể khác
};
// --- End Voucher mẫu ---

function Cart() {
  const [cartItems, setCartItems] = useState(getCartItemsFromStorage());
  const [voucherCode, setVoucherCode] = useState(""); // State cho input voucher
  const [appliedVoucher, setAppliedVoucher] = useState(null); // State lưu voucher đã áp dụng
  const [discountAmount, setDiscountAmount] = useState(0); // State lưu số tiền giảm giá
  const [voucherMessage, setVoucherMessage] = useState({ text: "", type: "" }); // State cho thông báo voucher (success/error)

  // --- Đặt tiêu đề trang ---
  useEffect(() => {
    document.title = "Giỏ hàng - Valley Book"; // Thay Valley Book bằng tên trang web của bạn
  }, []);
  // --- Hết đặt tiêu đề trang ---

  // Tính tổng tiền tạm tính (chưa voucher)
  const calculateSubtotalForItem = (item) => {
    const priceAfterDiscount =
      item.price - (item.price * (item.discount || 0)) / 100;
    return priceAfterDiscount * item.quantity;
  };

  const subtotalAmount = cartItems.reduce(
    (total, item) => total + calculateSubtotalForItem(item),
    0
  );

  // Hàm cập nhật số lượng (Giữ nguyên)
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map(
      (item) =>
        item.book_id === id ? { ...item, quantity: newQuantity } : item // Dùng book_id để nhất quán
    );
    setCartItems(updatedItems);
    saveCartItemsToStorage(updatedItems);
    // Tính toán lại giảm giá nếu số lượng thay đổi
    applyVoucherDiscount(appliedVoucher, updatedItems);
  };

  // Hàm xóa sản phẩm (Giữ nguyên)
  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.book_id !== id); // Dùng book_id
    setCartItems(updatedItems);
    saveCartItemsToStorage(updatedItems);
    // Tính toán lại giảm giá nếu số lượng thay đổi
    applyVoucherDiscount(appliedVoucher, updatedItems);
  };

  // --- Hàm tính toán và áp dụng giảm giá voucher ---
  const applyVoucherDiscount = (voucher, currentCartItems) => {
    if (!voucher) {
      setDiscountAmount(0);
      return 0; // Không có voucher thì không giảm
    }

    const currentSubtotal = currentCartItems.reduce(
      (total, item) => total + calculateSubtotalForItem(item),
      0
    );
    let calculatedDiscount = 0;

    if (voucher.type === "percentage") {
      calculatedDiscount = (currentSubtotal * voucher.value) / 100;
    } else if (voucher.type === "fixed") {
      calculatedDiscount = voucher.value;
    }
    // Thêm các loại voucher khác nếu cần (ví dụ: freeship)

    // Đảm bảo giảm giá không vượt quá tổng tiền
    calculatedDiscount = Math.min(calculatedDiscount, currentSubtotal);
    setDiscountAmount(calculatedDiscount);
    return calculatedDiscount; // Trả về để dùng ngay nếu cần
  };

  // --- Hàm xử lý khi nhấn nút Áp dụng Voucher ---
  const handleApplyVoucher = () => {
    const code = voucherCode.trim().toUpperCase(); // Chuẩn hóa mã
    const voucher = VALID_VOUCHERS[code];

    if (voucher) {
      // Áp dụng thành công
      setAppliedVoucher(voucher); // Lưu lại voucher đã áp dụng
      applyVoucherDiscount(voucher, cartItems); // Tính toán và set state giảm giá
      setVoucherMessage({
        text: `Áp dụng thành công voucher "${code}"!`,
        type: "success",
      });
    } else {
      // Áp dụng thất bại
      setAppliedVoucher(null); // Xóa voucher cũ (nếu có)
      setDiscountAmount(0); // Reset giảm giá
      setVoucherMessage({
        text: "Mã voucher không hợp lệ hoặc đã hết hạn.",
        type: "error",
      });
    }
    // Xóa thông báo sau vài giây
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
              {/* Có thể giữ lại H3 này hoặc bỏ đi nếu đã có H1 bên dưới */}
              <h3>Giỏ Hàng Của Bạn</h3>
              <span className="breadcrumb">
                <Link to="/">Trang chủ</Link> &gt; Giỏ hàng
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-section ">
        <div className="container">
          {/* --- Thêm Tiêu đề Trang --- */}
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title">Giỏ hàng</h1> {/* Tiêu đề chính */}
            </div>
          </div>
          {/* --- Hết Tiêu đề Trang --- */}

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
              {/* Danh sách sản phẩm (Giữ nguyên logic render) */}
              <div className="col-lg-8">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tạm tính</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      // Đảm bảo key là duy nhất, dùng book_id nếu có
                      <tr key={item.book_id || item.id}>
                        <td>
                          <div className="product-info">
                            <img
                              src={item.url_image}
                              alt={item.book_name}
                              className="product-image"
                            />
                            <span className="product-name">
                              {item.book_name}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="product-price">
                            {(
                              item.price -
                              (item.price * (item.discount || 0)) / 100
                            ).toLocaleString()}
                            đ
                            {item.discount > 0 && (
                              <em className="original-price">
                                {item.price.toLocaleString()}đ
                              </em>
                            )}
                          </span>
                        </td>
                        <td>
                          <div className="quantity-control">
                            {/* Dùng book_id cho các hàm */}
                            <button
                              onClick={() =>
                                updateQuantity(item.book_id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              min="1"
                              readOnly
                            />
                            <button
                              onClick={() =>
                                updateQuantity(item.book_id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          {calculateSubtotalForItem(item).toLocaleString()}đ
                        </td>
                        <td>
                          {/* Dùng book_id cho hàm xóa */}
                          <button
                            onClick={() => removeItem(item.book_id)}
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

              {/* Tóm tắt giỏ hàng (Cập nhật) */}
              <div className="col-lg-4">
                <div className="cart-summary">
                  <h4>Tóm tắt đơn hàng</h4>
                  <div className="summary-row">
                    <span>Tạm tính:</span>
                    <span>{subtotalAmount.toLocaleString()}đ</span>
                  </div>

                  {/* --- Phần Voucher --- */}
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
                    {/* Hiển thị thông báo voucher */}
                    {voucherMessage.text && (
                      <p className={`voucher-message ${voucherMessage.type}`}>
                        {voucherMessage.text}
                      </p>
                    )}
                  </div>
                  {/* --- Hết Phần Voucher --- */}

                  {/* Hiển thị giảm giá nếu có */}
                  {discountAmount > 0 && (
                    <div className="summary-row discount-row">
                      <span>Giảm giá voucher:</span>
                      <span>- {discountAmount.toLocaleString()}đ</span>
                    </div>
                  )}

                  {/* Có thể thêm phí vận chuyển ở đây */}

                  <div className="summary-row total-row">
                    <span>Tổng cộng:</span>
                    <span>{finalTotalAmount.toLocaleString()}đ</span>
                  </div>

                  <button className="orange-button checkout-button">
                    Tiến hành thanh toán
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
