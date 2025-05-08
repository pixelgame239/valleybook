// pages/OrderList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBubble from "../components/ChatBubble";
import "../../public/assets/css/OrderList.css";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    document.title = "Danh sách đơn hàng - Valley Book";
    // TODO: Fetch real data for current user
    const mockOrders = [
      {
        id: "ORD001",
        date: "2025-05-01",
        total: 350000,
        status: "Đang giao hàng",
      },
      { id: "ORD002", date: "2025-04-20", total: 250000, status: "Hoàn thành" },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <div>
      <Header currentPage="order-list" />

      <div className="page-heading header-text">
        <div className="container">
          <h3>Đơn hàng của tôi</h3>
        </div>
      </div>

      <div className="container order-list">
        <table className="order-table">
          <thead>
            <tr>
              <th>Mã đơn</th>
              <th>Ngày đặt</th>
              <th>Trạng thái</th>
              <th>Tổng cộng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.total.toLocaleString()} đ</td>
                <td>
                  <Link to={`/order/${order.id}/tracking`} className="btn-view">
                    Xem
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ChatBubble />
      <Footer />
    </div>
  );
}

export default OrderList;
