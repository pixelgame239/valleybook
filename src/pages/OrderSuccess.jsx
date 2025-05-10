// src/pages/OrderSuccess.jsx
import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../public/assets/css/OrderSuccess.css"; // Tạo file CSS riêng nếu cần style đặc biệt
import "../../public/assets/css/Checkout.css"; // Hoặc tái sử dụng style từ Checkout

function OrderSuccess() {
  const location  = useLocation();
  const { confirm } = location.state || false;
  useEffect(() => {
    document.title = "Đặt hàng thành công - Valley Book";
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, []);
  const { paymentMethod } = useParams();
  return (
    <div>
      <Header currentPage="orderSuccess" />{" "}
      {/* Đặt currentPage phù hợp nếu cần highlight header */}
      {/* Bạn có thể tái sử dụng page-heading nếu muốn */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Đặt Hàng Thành Công</h3>
              <span className="breadcrumb">
                <Link to="/">Trang chủ</Link> &gt; Đặt hàng thành công
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-section container">
        {" "}
        {/* Tái sử dụng class từ Checkout */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="checkout-block order-success-block">
              {" "}
              {/* Tái sử dụng class từ Checkout */}
              <div className="order-success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h4>Cảm ơn bạn đã đặt hàng!</h4>
              <p>Đơn hàng của bạn đã được tiếp nhận thành công.</p>
              <p>
                Chúng tôi sẽ xử lý đơn hàng và giao đến bạn trong thời gian sớm
                nhất.
                {/* Bạn có thể thêm thông tin chi tiết hơn nếu có, ví dụ mã đơn hàng */}
                {/* Mã đơn hàng của bạn là: <strong>#12345</strong> */}
              </p>
              {confirm?<p>
                Một email xác nhận đơn hàng đã được gửi đến địa chỉ email của bạn.
              </p>:null}
              
              <div className="order-success-actions">
                <Link to="/shop" className="orange-button">
                  {" "}
                  {/* Sử dụng class nút từ Cart/Checkout */}
                  <i className="fa fa-shopping-bag"></i> Tiếp tục mua sắm
                </Link>
                <Link to="/" className="secondary-button">
                  {" "}
                  {/* Tạo class mới hoặc dùng style khác */}
                  <i className="fa fa-home"></i> Về trang chủ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderSuccess;
