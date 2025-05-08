import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../public/assets/css/Checkout.css"; // Đảm bảo bạn đã tạo và thêm CSS vào file này
import ChatBubble from "../components/ChatBubble";
import { getVoucher } from "../backend/voucherData";

// --- Helper Functions for Cart ---
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

function Checkout() {
  const navigate = useNavigate();
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherMessage, setVoucherMessage] = useState({ text: "", type: "" });

  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    wardCode: "", // Thay đổi tên để phản ánh việc lưu mã
    districtCode: "", // Thay đổi tên để phản ánh việc lưu mã
    provinceCode: "", // Thay đổi tên để phản ánh việc lưu mã
    notes: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [errors, setErrors] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const getCartItemsFromStorage = () => {
    if (userInfo) {
      const items = localStorage.getItem("cart_items");
      console.log(`user cart: ${items}`);
      return items ? JSON.parse(items) : [];
    } else {
      const items = sessionStorage.getItem("cart_items");
      console.log(`None cart: ${items}`);
      return items ? JSON.parse(items) : [];
    }
  };

  // Thêm state cho danh sách voucher
  const [availableVouchers, setAvailableVouchers] = useState([]);

  const handleApplyVoucher = (code) => {
    const voucher = availableVouchers.find((v) => v.code === code);

    if (voucher) {
      let discountValue = 0;

      if (voucher.type === "percent") {
        discountValue = (subtotalAmount * voucher.discount) / 100;
      } else if (voucher.type === "shipping") {
        discountValue = shippingCost;
      } else {
        discountValue = voucher.discount;
      }

      setDiscountAmount(discountValue);
      setVoucherMessage({
        text: `Áp dụng thành công voucher "${code}"!`,
        type: "success",
      });
    } else {
      setDiscountAmount(0);
      setVoucherMessage({
        text: "Mã voucher không hợp lệ hoặc đã hết hạn.",
        type: "error",
      });
    }
    setTimeout(() => setVoucherMessage({ text: "", type: "" }), 4000);
  };
  useEffect(() => {
    const tempCart = getCartItemsFromStorage();
    setCartItems((prev) => tempCart);
    console.log(cartItems);
    document.title = "Thanh toán - Valley Book";
    // Nếu giỏ hàng trống khi vào trang checkout, quay lại giỏ hàng
    if (tempCart.length === 0) {
      console.warn("Giỏ hàng trống, đang chuyển hướng về trang giỏ hàng...");
      // Dùng timeout nhỏ để tránh lỗi state update khi component đang unmount
      const timer = setTimeout(() => navigate("/cart"), 0);
      return () => clearTimeout(timer); // Cleanup timeout
    }
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, []);

  // --- Tính toán Tổng tiền ---
  const subtotalAmount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + (item.price_at_cart || 0) * (item.quantity || 1),
        0
      ),
    [cartItems]
  );

  // Lấy discount từ sessionStorage (chỉ lấy 1 lần)
  const discountAmount = useMemo(
    () => parseFloat(sessionStorage.getItem("discountAmount") || "0"),
    []
  );

  // --- Cập nhật logic tính phí vận chuyển ---
  const calculateShippingCost = (provinceCode) => {
    // Province code của Hà Nội trên open-api.vn thường là 1
    return +provinceCode === 1 ? 20000 : 30000;
  };

  // Hàm tính thời gian giao hàng dự kiến
  const calculateDeliveryTime = (provinceCode) => {
    return +provinceCode === 1 ? "1–2 ngày" : "3–5 ngày";
  };

  // Tính shippingCost dựa trên formData.city hiện tại
  const shippingCost = useMemo(
    () => calculateShippingCost(formData.provinceCode),
    [formData.provinceCode]
  );

  // Tính deliveryTime để hiển thị
  const deliveryTime = useMemo(
    () => calculateDeliveryTime(formData.provinceCode),
    [formData.provinceCode]
  );

  const finalTotalAmount = subtotalAmount - discountAmount + shippingCost;
  // --- Hết Tính toán Tổng tiền ---

  // Hàm xử lý thay đổi input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // --- Validation Form ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Vui lòng nhập họ tên";
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^(0[3|5|7|8|9])+([0-9]{8})\b/.test(formData.phone.trim())) {
      // Regex chuẩn hơn cho SĐT Việt Nam
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.address.trim())
      newErrors.address = "Vui lòng nhập địa chỉ (Số nhà, tên đường)";
    if (!formData.ward.trim()) newErrors.ward = "Vui lòng nhập Phường/Xã";
    if (!formData.district.trim())
      newErrors.district = "Vui lòng nhập Quận/Huyện";
    if (!formData.city.trim()) newErrors.city = "Vui lòng nhập Tỉnh/Thành phố";
    return newErrors;
  };

  // Hàm xử lý đặt hàng
  const handleSubmitOrder = async (e) => {
    // Thêm async nếu gọi API
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(`[name=${firstErrorField}]`);
      if (errorElement) {
        errorElement.focus(); // Focus vào trường lỗi
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // --- Xử lý gửi đơn hàng ---
    const orderData = {
      customerInfo: formData,
      items: cartItems,
      paymentMethod: paymentMethod,
      shippingCost: shippingCost,
      subtotal: subtotalAmount,
      discount: discountAmount,
      total: finalTotalAmount,
      createdAt: new Date().toISOString(), // Thêm thời gian tạo đơn
      // Thêm thông tin người dùng nếu đã đăng nhập
      // userId: supabase.auth.user()?.id || null,
    };

    console.log("--- Chuẩn bị gửi đơn hàng ---");
    console.log(orderData);

    // --- TODO: Gửi dữ liệu lên Backend/API ---
    try {
      // setLoading(true); // Bắt đầu loading nếu cần
      // const response = await fetch('/api/orders', { // Ví dụ endpoint API
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(orderData),
      // });
      // if (!response.ok) {
      //     throw new Error('Đặt hàng thất bại!');
      // }
      // const result = await response.json();
      // console.log('Đặt hàng thành công:', result);

      // --- Giả lập thành công ---
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập chờ API
      console.log("Đặt hàng thành công!"); // Thay alert bằng console.log hoặc thông báo khác nếu muốn

      // Xóa thông tin giỏ hàng và giảm giá sau khi đặt hàng thành công
      sessionStorage.removeItem("cart_items");
      sessionStorage.removeItem("discountAmount"); // Xóa cả discount nếu có

      // Chuyển hướng đến trang đặt hàng thành công
      navigate("/order-success"); // <<< THAY ĐỔI CHỖ NÀY

      // setLoading(false); // Kết thúc loading
    } catch (error) {
      console.error("Lỗi đặt hàng:", error);
      alert("Đã có lỗi xảy ra khi đặt hàng. Vui lòng thử lại.");
      // setLoading(false); // Kết thúc loading
    }
    // --- Hết phần gửi Backend ---
  };
  // --- Fetch dữ liệu tỉnh/thành phố ---
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch("https://provinces.open-api.vn/api/p/");
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error("Lỗi khi tải danh sách tỉnh:", error);
      }
    };

    fetchProvinces();
  }, []);

  // --- Fetch dữ liệu quận/huyện khi tỉnh/thành phố thay đổi ---
  useEffect(() => {
    const fetchDistricts = async (provinceCode) => {
      if (provinceCode) {
        try {
          const response = await fetch(
            `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
          );
          const data = await response.json();
          setDistricts(data.districts || []);
        } catch (error) {
          console.error("Lỗi khi tải danh sách huyện:", error);
        }
      } else {
        setDistricts([]);
      }
    };

    fetchDistricts(formData.provinceCode);
  }, [formData.provinceCode]);

  // --- Fetch dữ liệu xã/phường khi quận/huyện thay đổi ---
  useEffect(() => {
    const fetchWards = async (districtCode) => {
      if (districtCode) {
        try {
          const response = await fetch(
            `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
          );
          const data = await response.json();
          setWards(data.wards || []);
        } catch (error) {
          console.error("Lỗi khi tải danh sách xã:", error);
        }
      } else {
        setWards([]);
      }
    };

    fetchWards(formData.districtCode);
  }, [formData.districtCode]);

  // Add useEffect to fetch vouchers
  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const vouchers = await getVoucher("Voucher");
        if (vouchers) {
          // Transform data to match the structure
          const formattedVouchers = vouchers.map((v) => ({
            code: v.voucher_id,
            discount: v.discount,
            type: v.voucher_id.startsWith("FSHIP") ? "shipping" : "totalPrice",
            detail: v.detail, // Add detail field
          }));
          setAvailableVouchers(formattedVouchers);
        }
      } catch (error) {
        console.error("Error fetching vouchers:", error);
      }
    };

    fetchVouchers();
  }, []);

  return (
    <div>
      <Header currentPage="checkout" />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Thanh Toán</h3>
              <span className="breadcrumb">
                <Link to="/">Trang chủ</Link> &gt;{" "}
                <Link to="/cart">Giỏ hàng</Link> &gt; Thanh toán
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-section container">
        {/* ----- Form chính bao bọc toàn bộ nội dung ----- */}
        <form onSubmit={handleSubmitOrder} noValidate>
          {" "}
          {/* Thêm noValidate để tắt validation mặc định của browser */}
          <div className="row">
            {/* ----- Cột Thông tin giao hàng & Thanh toán ----- */}
            <div className="col-lg-7">
              {/* --- Thông tin giao hàng --- */}
              <div className="checkout-block">
                <h4>Thông tin giao hàng</h4>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="fullName">Họ và Tên *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={errors.fullName ? "error-input" : ""}
                      required
                      aria-describedby="fullNameError"
                    />
                    {errors.fullName && (
                      <small id="fullNameError" className="error-message">
                        {errors.fullName}
                      </small>
                    )}
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? "error-input" : ""}
                      required
                      aria-describedby="emailError"
                    />
                    {errors.email && (
                      <small id="emailError" className="error-message">
                        {errors.email}
                      </small>
                    )}
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="phone">Số điện thoại *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? "error-input" : ""}
                      required
                      aria-describedby="phoneError"
                    />
                    {errors.phone && (
                      <small id="phoneError" className="error-message">
                        {errors.phone}
                      </small>
                    )}
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="address">
                      Địa chỉ (Số nhà, tên đường) *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={errors.address ? "error-input" : ""}
                      required
                      aria-describedby="addressError"
                    />
                    {errors.address && (
                      <small id="addressError" className="error-message">
                        {errors.address}
                      </small>
                    )}
                  </div>
                  {/* --- Các trường địa chỉ --- */}
                  <div className="col-md-4 form-group">
                    <label htmlFor="provinceCode">Tỉnh/Thành phố *</label>
                    <select
                      id="provinceCode"
                      name="provinceCode"
                      value={formData.provinceCode}
                      onChange={handleInputChange}
                      className={errors.provinceCode ? "error-input" : ""}
                      required
                      aria-describedby="provinceCodeError"
                    >
                      <option value="">Chọn tỉnh/thành phố</option>
                      {provinces.map((province) => (
                        <option key={province.code} value={province.code}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                    {errors.provinceCode && (
                      <small id="provinceCodeError" className="error-message">
                        {errors.provinceCode}
                      </small>
                    )}
                  </div>
                  <div className="col-md-4 form-group">
                    <label htmlFor="districtCode">Quận/Huyện *</label>
                    <select
                      id="districtCode"
                      name="districtCode"
                      value={formData.districtCode}
                      onChange={handleInputChange}
                      className={errors.districtCode ? "error-input" : ""}
                      required
                      aria-describedby="districtCodeError"
                    >
                      <option value="">Chọn quận/huyện</option>
                      {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                    {errors.districtCode && (
                      <small id="districtCodeError" className="error-message">
                        {errors.districtCode}
                      </small>
                    )}
                  </div>
                  <div className="col-md-4 form-group">
                    <label htmlFor="wardCode">Phường/Xã *</label>
                    <select
                      id="wardCode"
                      name="wardCode"
                      value={formData.wardCode}
                      onChange={handleInputChange}
                      className={errors.wardCode ? "error-input" : ""}
                      required
                      aria-describedby="wardCodeError"
                    >
                      <option value="">Chọn phường/xã</option>
                      {wards.map((ward) => (
                        <option key={ward.code} value={ward.code}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
                    {errors.wardCode && (
                      <small id="wardCodeError" className="error-message">
                        {errors.wardCode}
                      </small>
                    )}
                  </div>
                  {/* --- Hết các trường địa chỉ --- */}
                  <div className="col-md-12 form-group">
                    <label htmlFor="notes">Ghi chú thêm (Tùy chọn)</label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* --- Phương thức thanh toán --- */}
              <div className="checkout-block">
                <h4>Phương thức thanh toán</h4>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="paymentCod"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="paymentCod">
                    <i className="fas fa-money-bill-wave"></i> Thanh toán khi
                    nhận hàng (COD)
                  </label>
                  {paymentMethod === "cod" && (
                    <p className="payment-info">
                      Bạn trả tiền mặt cho nhân viên giao hàng khi nhận sản
                      phẩm.
                    </p>
                  )}
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="paymentBank"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="paymentBank">
                    <i className="fas fa-university"></i> Chuyển khoản ngân hàng
                  </label>
                  {paymentMethod === "bank" && (
                    <div className="payment-info bank-info">
                      <p>
                        Vui lòng chuyển khoản với nội dung:{" "}
                        <strong>
                          TT {formData.phone || "[Số điện thoại]"}
                        </strong>
                      </p>{" "}
                      {/* Thêm SĐT vào nội dung CK */}
                      <p>
                        <strong>Ngân hàng:</strong> MB Bank
                      </p>
                      <p>
                        <strong>Số tài khoản:</strong> 0123456789
                      </p>
                      <p>
                        <strong>Chủ tài khoản:</strong> VALLEY BOOK STORE
                      </p>
                      <p>
                        (Đơn hàng sẽ được xử lý sau khi chúng tôi nhận được
                        thanh toán)
                      </p>
                    </div>
                  )}
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="paymentOnline"
                    name="paymentMethod"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    disabled
                  />{" "}
                  {/* Vẫn disable */}
                  <label htmlFor="paymentOnline">
                    <i className="fas fa-credit-card"></i> Thanh toán Online
                    (VNPAY, Momo,...) <small>(Sắp có)</small>
                  </label>
                  {paymentMethod === "online" && (
                    <p className="payment-info">
                      Bạn sẽ được chuyển đến cổng thanh toán an toàn.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ----- Cột Tóm tắt đơn hàng ----- */}
            <div className="col-lg-5">
              <div className="order-summary checkout-block">
                <h4>Đơn hàng của bạn ({cartItems.length} sản phẩm)</h4>
                {/* --- Hiển thị danh sách sản phẩm --- */}
                <div className="order-items-list">
                  {cartItems.map((item) => (
                    <div
                      className="order-item"
                      key={`${item.book_id}-${item.type}`}
                    >
                      <img
                        src={
                          item.url_image ||
                          "https://via.placeholder.com/60x90?text=No+Img"
                        }
                        alt={item.book_name}
                        className="order-item-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/60x90?text=No+Img";
                        }}
                      />
                      <div className="order-item-info">
                        <p className="order-item-name">{item.book_name}</p>
                        <small className="order-item-type">
                          Loại: {mapBookType(item.type)}
                        </small>
                        <p className="order-item-price-qty">
                          {item.quantity} x{" "}
                          {(item.price_at_cart || 0).toLocaleString()}đ
                        </p>
                      </div>
                      <span className="order-item-subtotal">
                        {(
                          (item.price_at_cart || 0) * item.quantity
                        ).toLocaleString()}
                        đ
                      </span>
                    </div>
                  ))}
                </div>

                {/* Phần Voucher */}
                <div className="voucher-section">
                  <label htmlFor="voucher">Mã giảm giá:</label>
                  <div className="voucher-select-group">
                    <select
                      id="voucher"
                      value={voucherCode}
                      onChange={(e) => {
                        setVoucherCode(e.target.value);
                        if (e.target.value) {
                          handleApplyVoucher(e.target.value);
                        }
                      }}
                      className="voucher-select"
                    >
                      <option value="">Chọn mã giảm giá</option>
                      {availableVouchers.map((voucher) => (
                        <option key={voucher.code} value={voucher.code}>
                          {voucher.code} - {voucher.detail}
                        </option>
                      ))}
                    </select>
                  </div>
                  {voucherMessage.text && (
                    <p className={`voucher-message ${voucherMessage.type}`}>
                      {voucherMessage.text}
                    </p>
                  )}
                </div>
                {/* Hết Phần Voucher */}

                {/* --- Hiển thị Tổng tiền --- */}
                <div className="order-totals">
                  <div className="totals-row">
                    <span>Tạm tính:</span>
                    <span>{subtotalAmount.toLocaleString()}đ</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="totals-row discount">
                      <span>Giảm giá voucher:</span>
                      <span>- {discountAmount.toLocaleString()}đ</span>
                    </div>
                  )}
                  <div className="totals-row">
                    <span>Phí vận chuyển:</span>
                    <span>
                      {shippingCost > 0
                        ? `${shippingCost.toLocaleString()}đ`
                        : "Miễn phí"}
                    </span>
                  </div>
                  <div className="totals-row">
                    <span>Thời gian giao hàng dự kiến:</span>
                    <span>{deliveryTime}</span>
                  </div>
                  <hr />
                  <div className="totals-row final-total">
                    <span>Tổng cộng:</span>
                    <span>{finalTotalAmount.toLocaleString()}đ</span>
                  </div>
                </div>

                {/* --- Nút Đặt hàng --- */}
                <button
                  type="submit"
                  className="orange-button place-order-button"
                >
                  <i className="fas fa-check-circle"></i> Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </form>{" "}
        {/* Đóng thẻ form */}
      </div>
      <ChatBubble></ChatBubble>
      <Footer />
    </div>
  );
}

export default Checkout;
