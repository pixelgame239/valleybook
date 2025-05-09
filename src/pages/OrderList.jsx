// pages/OrderList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBubble from "../components/ChatBubble";
import "../../public/assets/css/OrderList.css";
import { getAllOrders } from "../backend/orderData";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Danh sách đơn hàng - Valley Book";

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const data = await getAllOrders();
        // Ánh xạ dữ liệu trả về từ Supabase cho phù hợp với cấu trúc mockOrders cũ nếu cần
        // Ví dụ: Supabase trả về order_id, created_at, status, total_price
        const formattedOrders = data.map((order) => ({
          id: order.order_id, // Giả sử Supabase trả về order_id
          date: new Date(order.created_at).toLocaleDateString("vi-VN"), // Định dạng ngày tháng
          total: order.total_price,
          status: order.status,
          // customerName: order.customer_name // Nếu bạn lấy tên khách hàng
        }));
        setOrders(formattedOrders);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError("Không thể tải danh sách đơn hàng. Vui lòng thử lại sau.");
        setOrders([]); // Xóa dữ liệu cũ nếu có lỗi
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Đang tải danh sách đơn hàng...</div>;
  }

  if (error) {
    return (
      <div
        className="container"
        style={{ textAlign: "center", padding: "20px", color: "red" }}
      >
        {error}
      </div>
    );
  }

  return (
    <div>
      <Header currentPage="order-list" />

      <div className="page-heading header-text">
        <div className="container">
          <h3>Đơn hàng của tôi</h3>
        </div>
      </div>

      <div className="container order-list">
        {orders.length === 0 && !loading && (
          <p style={{ textAlign: "center", padding: "20px" }}>
            Bạn chưa có đơn hàng nào.
          </p>
        )}
        {orders.length > 0 && (
          <table className="order-table">
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Ngày đặt</th>
                {/* <th>Tên khách hàng</th> Nếu bạn muốn hiển thị */}
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
                  {/* <td>{order.customerName}</td> */}
                  <td>{order.status}</td>
                  <td>{order.total.toLocaleString()} đ</td>
                  <td>
                    <Link to={`/tracking/${order.id}`} className="btn-view">
                      Xem
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <ChatBubble />
      <Footer />
    </div>
  );
}

export default OrderList;
