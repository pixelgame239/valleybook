// pages/OrderTracking.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBubble from "../components/ChatBubble";
import "../../public/assets/css/OrderTracking.css";

function OrderTracking() {
  const { orderId } = useParams();
  const [steps, setSteps] = useState([]);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    document.title = `Theo dõi đơn hàng #${orderId} - Valley Book`;
    // TODO: Fetch real order and tracking data by orderId
    const mock = {
      id: orderId,
      customer: {
        name: "Nguyễn Văn A",
        phone: "0123456789",
        address: "123 Đường ABC, Quận 1, TP. Hồ Chí Minh",
      },
      paymentMethod: "COD",
      items: [
        {
          id: 1,
          name: "Sách ReactJS",
          quantity: 1,
          price: 150000,
          image: "https://via.placeholder.com/60x90",
        },
        {
          id: 2,
          name: "Sách NodeJS",
          quantity: 2,
          price: 120000,
          image: "https://via.placeholder.com/60x90",
        },
      ],
      shippingFee: 30000,
      discount: 10000,
      steps: [
        { id: 1, title: "Đã tiếp nhận đơn", date: "2025-05-01" },
        { id: 2, title: "Đang xử lý đơn", date: "2025-05-02" },
        { id: 3, title: "Giao cho đơn vị vận chuyển", date: "2025-05-03" },
        { id: 4, title: "Đang giao hàng", date: "" },
        { id: 5, title: "Hoàn thành", date: "" },
      ],
    };
    setOrder(mock);
    setSteps(mock.steps);
  }, [orderId]);

  if (!order) {
    return <div>Đang tải thông tin đơn hàng...</div>;
  }

  const firstIncomplete = steps.findIndex((step) => !step.date);
  const lastCompletedIndex =
    firstIncomplete === -1 ? steps.length - 1 : firstIncomplete - 1;

  const subtotal = order.items.reduce(
    (sum, it) => sum + it.price * it.quantity,
    0
  );
  const total = subtotal + order.shippingFee - order.discount;
  const currentStatus = steps[lastCompletedIndex]?.title || "Chưa xác định";

  return (
    <div>
      <Header currentPage="order-tracking" />

      <div className="page-heading header-text">
        <div className="container">
          <h3>Theo dõi Đơn hàng #{order.id}</h3>
        </div>
      </div>

      <div className="order-info container">
        <h4>Chi tiết Đơn hàng</h4>
        <div className="customer-info">
          <p>
            <strong>Khách hàng:</strong> {order.customer.name}
          </p>
          <p>
            <strong>SĐT:</strong> {order.customer.phone}
          </p>
          <p>
            <strong>Địa chỉ:</strong> {order.customer.address}
          </p>
          <p>
            <strong>Phương thức thanh toán:</strong>{" "}
            {order.paymentMethod === "COD"
              ? "Thanh toán khi nhận hàng"
              : order.paymentMethod}
          </p>
          <p>
            <strong>Trạng thái hiện tại:</strong> {currentStatus}
          </p>
        </div>

        <table className="order-table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Tạm tính</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id}>
                <td className="product-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                  />
                  <span>{item.name}</span>
                </td>
                <td>{item.quantity}</td>
                <td>{item.price.toLocaleString()} đ</td>
                <td>{(item.price * item.quantity).toLocaleString()} đ</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="totals">
          <div>
            <span>Tạm tính:</span>
            <span>{subtotal.toLocaleString()} đ</span>
          </div>
          <div>
            <span>Phí vận chuyển:</span>
            <span>{order.shippingFee.toLocaleString()} đ</span>
          </div>
          <div>
            <span>Giảm giá:</span>
            <span>-{order.discount.toLocaleString()} đ</span>
          </div>
          <div className="total-row">
            <span>Tổng cộng:</span>
            <span>{total.toLocaleString()} đ</span>
          </div>
        </div>
      </div>

      <ChatBubble />
      <Footer />
    </div>
  );
}

export default OrderTracking;
