import React, { useState, useEffect, useMemo, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../public/assets/css/Checkout.css"; // Đảm bảo bạn đã tạo và thêm CSS vào file này
import ChatBubble from "../components/ChatBubble";
import { AuthContext } from "../components/AuthContext";
import { getUserVoucher, getVoucher } from "../backend/voucherData";
import {
  generateNewOrder,
  handleSendEmail,
  insertOrder,
} from "../backend/orderData";
import supabase from "../backend/initSupabase";
import { updateCartItems, updateVoucherItems } from "../backend/userData";
import gachaStyles from "../components/GachaStrip.module.css";
import GachaStrip from "../components/GachaStrip";

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
  const { loggedIn } = useContext(AuthContext);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState(
    userInfo
      ? {
          fullName: userInfo.username,
          phone: userInfo.phoneNumber?userInfo.phone_number:"",
          email: userInfo.email,
          address: userInfo.address?userInfo.address.split(", ")[0]:"",
          // Initialize codes as empty since you'll look them up later
          wardCode: "",
          // Extract ward name from the address (if provided)
          wardName: userInfo.address?userInfo.address.split(", ")[1] || "":"",
          districtCode: "",
          districtName: userInfo.address?userInfo.address.split(", ")[2] || "":"",
          provinceCode: "",
          provinceName: userInfo.address?userInfo.address.split(", ")[3] || "":"",
          notes: "",
        }
      : {
          fullName: "",
          phone: "",
          email: "",
          address: "",
          wardCode: "",
          wardName: "",
          districtCode: "",
          districtName: "",
          provinceCode: "",
          provinceName: "",
          notes: "",
        }
  );

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [errors, setErrors] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [orderID, setOrderID] = useState();

  // Retrieves cart items from storage (local if logged in; otherwise session)
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

  // State for vouchers
  const [availableVouchers, setAvailableVouchers] = useState([]);

  const handleApplyVoucher = (code) => {
    if (code === "default") {
      setDiscountAmount(0);
      setVoucherMessage({
        text: "Đã bỏ áp dụng mã giảm giá",
        type: "info",
      });
      // Optionally clear any previously applied voucher in state as well.
      return;
    }
    const voucher = availableVouchers.find((v) => v.code === code);
    console.log(voucher);
    if (voucher) {
      let discountValue = 0;
      if (voucher.discount <= 100 && voucher.code.startsWith("VG")) {
        discountValue = (subtotalAmount * voucher.discount) / 100;
      } else if (voucher.code === "FSHIP100") {
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

  // On component mount: fetch cart items & redirect if cart empty.
  useEffect(() => {
    const tempCart = getCartItemsFromStorage();
    setCartItems(tempCart);
    console.log(cartItems);
    document.title = "Thanh toán - Valley Book";
    setOrderID(generateNewOrder());
    console.log(orderID);
    if (tempCart.length === 0) {
      console.warn("Giỏ hàng trống, đang chuyển hướng về trang giỏ hàng...");
      const timer = setTimeout(() => navigate("/cart"), 0);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, []);

  // --- Calculate Totals ---
  const subtotalAmount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + (item.price_at_cart || 0) * (item.quantity || 1),
        0
      ),
    [cartItems]
  );

  const [discountAmount, setDiscountAmount] = useState(() =>
    parseFloat(sessionStorage.getItem("discountAmount") || "0")
  );

  const calculateShippingCost = (provinceCode) => {
    // For example, if province code 1 means Hà Nội
    return +provinceCode === 1 ? 20000 : 30000;
  };

  const calculateDeliveryTime = (provinceCode) => {
    return +provinceCode === 1 ? "1–2 ngày" : "3–5 ngày";
  };

  const shippingCost = useMemo(() => {
    const allDigital = cartItems.every(
      (item) => item.type === "ebook" || item.type === "audio"
    );

    if (cartItems.length > 0 && allDigital) {
      return 0;
    }

    return calculateShippingCost(formData.provinceCode);
  }, [cartItems, formData.provinceCode]);

  const deliveryTime = useMemo(() => {
    // Kiểm tra xem tất cả các mặt hàng trong giỏ có phải là kỹ thuật số không (ebook hoặc audio)
    const allDigital = cartItems.every(
      (item) => item.type === "ebook" || item.type === "audio"
    );

    if (cartItems.length > 0 && allDigital) {
      return "30 phút"; // Thời gian giao hàng cho các sản phẩm số
    }
    // Nếu có sách giấy hoặc giỏ hàng trống, tính toán thời gian giao hàng như bình thường
    return calculateDeliveryTime(formData.provinceCode);
  }, [cartItems, formData.provinceCode]); // Thêm cartItems vào mảng dependencies

  const finalTotalAmount = subtotalAmount - discountAmount + shippingCost;
  // --- End Calculation ---

  // Generic input change handler for text fields.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // --- Updated Handlers for Dropdowns ---

  const handleProvinceChange = (e) => {
    const provinceCode = e.target.value;
    const selectedProvince = provinces.find(
      (prov) => String(prov.code) === provinceCode
    );
    setFormData((prev) => ({
      ...prev,
      provinceCode,
      provinceName: selectedProvince ? selectedProvince.name : "",
      // Reset district & ward when province changes:
      districtCode: "",
      districtName: "",
      wardCode: "",
      wardName: "",
    }));
  };

  const handleDistrictChange = (e) => {
    const districtCode = e.target.value;
    const selectedDistrict = districts.find(
      (dist) => String(dist.code) === districtCode
    );
    setFormData((prev) => ({
      ...prev,
      districtCode,
      districtName: selectedDistrict ? selectedDistrict.name : "",
      // Reset ward when district changes:
      wardCode: "",
      wardName: "",
    }));
  };

  const handleWardChange = (e) => {
    const wardCode = e.target.value;
    const selectedWard = wards.find((ward) => String(ward.code) === wardCode);
    setFormData((prev) => ({
      ...prev,
      wardCode,
      wardName: selectedWard ? selectedWard.name : "",
    }));
  };

  // --- Validation Function ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Vui lòng nhập họ tên";
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^(0[3|5|7|8|9])+([0-9]{8})\b/.test(formData.phone.trim())) {
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
    if (!formData.wardCode) newErrors.ward = "Vui lòng chọn Phường/Xã";
    if (!formData.districtCode) newErrors.district = "Vui lòng chọn Quận/Huyện";
    if (!formData.provinceCode)
      newErrors.province = "Vui lòng chọn Tỉnh/Thành phố";
    return newErrors;
  };

  // --- Handle Order Submission ---
  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(`[name=${firstErrorField}]`);
      if (errorElement) {
        errorElement.focus();
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Include the names along with codes in the order details.
    const orderDetails = {
      customerInfo: {
        ...formData,
      },
      items: cartItems,
      paymentMethod,
      shippingCost,
      subtotal: subtotalAmount,
      discount: discountAmount,
      total: finalTotalAmount,
    };

    try {
      let needConfirm = false;
      const orderStatus =
        paymentMethod === "bank"
          ? "Đang chờ xác nhận"
          : userInfo
          ? "Đang xử lý"
          : "Đang chờ xác nhận";
      const result = await insertOrder(orderDetails, orderStatus);
      if (!userInfo && paymentMethod === "cod") {
        // console.log(result.order_id, result.email);
        await handleSendEmail(`${result.order_id}`, result.email);
        needConfirm = true;
        navigate("/order-success", { state: { confirm: needConfirm } });
      } else if (!userInfo && paymentMethod === "bank") {
        navigate("/order-success", { state: { confirm: needConfirm } });
      }
      console.log("Order inserted successfully:", result);
      if (userInfo) {
        localStorage.setItem("cart_items", "[]");
        if (userInfo.user_voucher && userInfo.user_voucher.length > 0) {
          const voucherArr = userInfo.user_voucher;
          const indexToRemove = voucherArr.indexOf(voucherCode);
          if (indexToRemove !== -1) {
            voucherArr.splice(indexToRemove, 1);
          }
          const updatedAvailableVouchers = voucherArr;
          await updateVoucherItems(userInfo.email, updatedAvailableVouchers);
        }
        await updateCartItems(userInfo.email, []);
        sessionStorage.removeItem("cart_items");
        sessionStorage.removeItem("discountAmount");
        if (orderDetails.total > 300000) {
          console.log("Overlay");
          setIsOverlayOpen(true);
        } else {
          navigate("/order-success", { state: { confirm: needConfirm } });
        }
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Đã có lỗi xảy ra khi đặt hàng. Vui lòng thử lại.");
    }
  };

  // --- Fetch Province Data ---
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

  // Fetch districts when province changes.
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

  // Fetch wards when district changes.
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

  // --- Fetch User Vouchers ---
  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        let vouchers;
        if (userInfo.user_voucher && userInfo.user_voucher.length > 0) {
          vouchers = await getUserVoucher(userInfo.user_voucher);
        } else {
          vouchers = [];
        }
        if (vouchers.length > 0) {
          // Transform the voucher data structure as needed.
          const formattedVouchers = vouchers.map((v) => ({
            code: v.voucher_id,
            discount: v.discount,
            type: v.voucher_id.startsWith("FSHIP") ? "shipping" : "totalPrice",
            detail: v.detail,
          }));
          setAvailableVouchers(formattedVouchers);
        }
      } catch (error) {
        console.error("Error fetching vouchers:", error);
      }
    };
    if (userInfo) {
      fetchVouchers();
    }
  }, []);
  useEffect(() => {
    if (provinces.length && formData.provinceName) {
      const selectedProvince = provinces.find(
        (prov) =>
          prov.name.trim().toLowerCase() ===
          formData.provinceName.trim().toLowerCase()
      );
      if (selectedProvince) {
        setFormData((prev) => ({
          ...prev,
          provinceCode: selectedProvince.code,
        }));
      }
    }
  }, [provinces, formData.provinceName]);

  // --- Lookup District Code by Name when districts data is loaded ---
  useEffect(() => {
    if (districts.length && formData.districtName) {
      const selectedDistrict = districts.find(
        (dist) =>
          dist.name.trim().toLowerCase() ===
          formData.districtName.trim().toLowerCase()
      );
      if (selectedDistrict) {
        setFormData((prev) => ({
          ...prev,
          districtCode: selectedDistrict.code,
        }));
      }
    }
  }, [districts, formData.districtName]);

  // --- Lookup Ward Code by Name when wards data is loaded ---
  useEffect(() => {
    if (wards.length && formData.wardName) {
      const selectedWard = wards.find(
        (ward) =>
          ward.name.trim().toLowerCase() ===
          formData.wardName.trim().toLowerCase()
      );
      if (selectedWard) {
        setFormData((prev) => ({
          ...prev,
          wardCode: selectedWard.code,
        }));
      }
    }
  }, [wards, formData.wardName]);
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
      {isOverlayOpen && (
        <div className={gachaStyles.overlay}>
          <div className={gachaStyles.overlayContent}>
            {/* Remove the close button here, we'll use the main button in GachaStrip */}
            {/* <button onClick={closeOverlay} className={styles.closeOverlayBtn}>
                  &times;
                </button> */}
            {/* Pass the closeOverlay function as a prop */}
            <GachaStrip
              onCloseOverlay={() => {
                setIsOverlayOpen(false);
                navigate("/order-success");
              }}
            />
          </div>
        </div>
      )}
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
                    <label htmlFor="fullName">Người nhận *</label>
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
                      disabled={loggedIn} // disable if loggedIn is true
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
                      onChange={handleProvinceChange}
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
                      onChange={handleDistrictChange}
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
                      onChange={handleWardChange}
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
                {!cartItems.every((item) => {
                  const type = mapBookType(item.type);
                  return type === "Ebook" || type === "Sách nói";
                }) && (
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
                )}
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
                    hoặc ví điện tử
                  </label>
                  {paymentMethod === "bank" && (
                    <div className="payment-info bank-info">
                      <p>
                        Nội dung chuyển khoản:{" "}
                        <strong>
                          ORDER{orderID} {formData.phone || "[Số điện thoại]"}
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
                {userInfo ? (
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
                        <option key="" value="default">
                          {availableVouchers.length > 0
                            ? "Chọn mã giảm giá"
                            : "Chưa có mã giảm giá nào"}
                        </option>
                        {availableVouchers.map((voucher) => (
                          <option key={voucher.code} value={voucher.code}>
                            {voucher.detail}
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
                ) : (
                  <p>Hãy đăng nhập để sử dụng voucher</p>
                )}
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
