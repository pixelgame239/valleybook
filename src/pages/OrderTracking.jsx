// pages/OrderTracking.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBubble from "../components/ChatBubble";
import "../../public/assets/css/OrderTracking.css";
import { getOrderById } from "../backend/orderData";
import supabase from "../backend/initSupabase";

function OrderTracking() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = `Theo dõi đơn hàng #${orderId} - Valley Book`;

    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        const data = await getOrderById(orderId);
        if (data) {
          const orderDetailsFromSupabase = data.order_details;
          const formattedOrder = {
            id: data.order_id,
            customer: {
              name: orderDetailsFromSupabase.customerInfo.fullName,
              phone: orderDetailsFromSupabase.customerInfo.phone,
              address: `${orderDetailsFromSupabase.customerInfo.address}, ${orderDetailsFromSupabase.customerInfo.wardName}, ${orderDetailsFromSupabase.customerInfo.districtName}, ${orderDetailsFromSupabase.customerInfo.provinceName}`,
            },
            paymentMethod: data.payment_method,
            items: orderDetailsFromSupabase.items.map((item) => ({
              id: item.book_id,
              name: item.book_name,
              quantity: item.quantity,
              price: item.price_at_cart,
              image: item.url_image,
            })),
            shippingFee: orderDetailsFromSupabase.shippingCost,
            discount: orderDetailsFromSupabase.discount || 0,
            status: data.status,
          };
          setOrder(formattedOrder);
          setError(null);
        } else {
          setError(`Không tìm thấy đơn hàng với mã ${orderId}.`);
        }
      } catch (err) {
        console.error(`Failed to fetch order ${orderId}:`, err);
        setError("Không thể tải thông tin đơn hàng. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  // Realtime subscription effect for order updates
  useEffect(() => {
    if (!orderId) return;

    const realtimeChannel = supabase
      .channel("order_updates")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "orders",
          filter: `order_id=eq.${orderId}`,
        },
        (payload) => {
          const updated = payload.new;
          const orderDetailsFromSupabase = updated.order_details;
          const formattedOrder = {
            id: updated.order_id,
            customer: {
              name: orderDetailsFromSupabase.customerInfo.fullName,
              phone: orderDetailsFromSupabase.customerInfo.phone,
              address: `${orderDetailsFromSupabase.customerInfo.address}, ${orderDetailsFromSupabase.customerInfo.wardName}, ${orderDetailsFromSupabase.customerInfo.districtName}, ${orderDetailsFromSupabase.customerInfo.provinceName}`,
            },
            paymentMethod: updated.payment_method,
            items: orderDetailsFromSupabase.items.map((item) => ({
              id: item.book_id,
              name: item.book_name,
              quantity: item.quantity,
              price: item.price_at_cart,
              image: item.url_image,
            })),
            shippingFee: orderDetailsFromSupabase.shippingCost,
            discount: orderDetailsFromSupabase.discount || 0,
            status: updated.status,
          };
          setOrder(formattedOrder);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(realtimeChannel);
    };
  }, [orderId]);

  if (loading) {
    return <div>Đang tải thông tin đơn hàng...</div>;
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

  if (!order) {
    return <div>Không có thông tin đơn hàng.</div>;
  }

  const subtotal = order.items.reduce(
    (sum, it) => sum + it.price * it.quantity,
    0
  );
  const total = subtotal + order.shippingFee - order.discount;
  const currentStatus = order.status;

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
            {order.paymentMethod === "cod"
              ? "Thanh toán khi nhận hàng"
              : order.paymentMethod === "bank"
              ? "Chuyển khoản ngân hàng"
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
