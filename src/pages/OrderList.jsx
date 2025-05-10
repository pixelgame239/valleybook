// pages/OrderList.jsx
import React, { useEffect, useState, useContext } from "react"; // Import useContext
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBubble from "../components/ChatBubble";
import "../../public/assets/css/OrderList.css";
import { getAllOrders } from "../backend/orderData";
import { AuthContext } from "../components/AuthContext"; // Import AuthContext
import supabase from "../backend/initSupabase";
function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userData, loggedIn } = useContext(AuthContext); // Sử dụng AuthContext

  useEffect(() => {
    document.title = "Danh sách đơn hàng - Valley Book";

    const fetchOrders = async () => {
      try {
        setLoading(true);
        // Lấy email từ userData nếu người dùng đã đăng nhập
        const userEmail = loggedIn && userData ? userData.email : null;

        if (userEmail) {
          const data = await getAllOrders(userEmail); // Truyền email vào hàm
          const formattedOrders = data.map((order) => ({
            id: order.order_id,
            date: new Date(order.created_at).toLocaleDateString("vi-VN"),
            total: order.total_price,
            status: order.status,
          }));
          setOrders(formattedOrders);
          setError(null);
        } else {
          // Nếu người dùng chưa đăng nhập, không tải đơn hàng và hiển thị thông báo
          setOrders([]);
          setError(null); // Xóa lỗi cũ nếu có
        }
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError("Không thể tải danh sách đơn hàng. Vui lòng thử lại sau.");
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userData, loggedIn]); // Thêm userData và loggedIn vào dependency array

  useEffect(() => {
    if (!loggedIn || !userData?.email) return;

    const realtimeChannel = supabase
      .channel("orders_realtime")
      .on(
        "postgres_changes",
        {
          event: "*", // listen for INSERT, UPDATE, DELETE events
          schema: "public",
          table: "orders",
          filter: `email=eq.${userData.email}`,
        },
        (payload) => {
          console.log("Realtime order event:", payload);
          // Re-fetch orders on any change
          getAllOrders(userData.email)
            .then((data) => {
              const formattedOrders = data.map((order) => ({
                id: order.order_id,
                date: new Date(order.created_at).toLocaleDateString("vi-VN"),
                total: order.total_price,
                status: order.status,
              }));
              setOrders(formattedOrders);
              setError(null);
            })
            .catch((err) => {
              console.error("Error fetching orders in realtime:", err);
              setError("Lỗi tải danh sách đơn hàng.");
            });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(realtimeChannel);
    };
  }, [loggedIn, userData]);

  if (loading) {
    return <div>Đang tải danh sách đơn hàng...</div>;
  }

  // Hiển thị thông báo nếu người dùng chưa đăng nhập
  if (!loggedIn) {
    return (
      <div>
        <Header currentPage="order-list" />
        <div className="page-heading header-text">
          <div className="container">
            <h3>Đơn hàng của tôi</h3>
          </div>
        </div>
        <div className="container order-list">
          <p style={{ textAlign: "center", padding: "20px" }}>
            Vui lòng đăng nhập để xem đơn hàng của bạn.
          </p>
        </div>
        <ChatBubble />
        <Footer />
      </div>
    );
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
        {orders.length === 0 && (
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
