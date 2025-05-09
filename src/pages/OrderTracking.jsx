// pages/OrderTracking.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBubble from "../components/ChatBubble";
import "../../public/assets/css/OrderTracking.css";
import { getOrderById } from "../backend/orderData";

function OrderTracking() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [steps, setSteps] = useState([]); // Bạn có thể lấy steps từ order.order_details nếu có

  useEffect(() => {
    document.title = `Theo dõi đơn hàng #${orderId} - Valley Book`;

    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        const data = await getOrderById(orderId);
        if (data) {
          // Ánh xạ dữ liệu từ Supabase sang cấu trúc state `order`
          // Dựa vào cấu trúc trong orders_rows.sql và mock data cũ
          const orderDetailsFromSupabase = data.order_details; // Đây là cột JSON

          const formattedOrder = {
            id: data.order_id,
            customer: {
              name: orderDetailsFromSupabase.customerInfo.fullName,
              phone: orderDetailsFromSupabase.customerInfo.phone,
              address: `${orderDetailsFromSupabase.customerInfo.address}, ${orderDetailsFromSupabase.customerInfo.wardName}, ${orderDetailsFromSupabase.customerInfo.districtName}, ${orderDetailsFromSupabase.customerInfo.provinceName}`,
            },
            paymentMethod: data.payment_method, // 'bank', 'cod', etc.
            items: orderDetailsFromSupabase.items.map((item) => ({
              id: item.book_id, // Hoặc một id duy nhất cho sản phẩm trong giỏ hàng
              name: item.book_name,
              quantity: item.quantity,
              price: item.price_at_cart, // Hoặc original_price tùy theo logic của bạn
              image: item.url_image,
            })),
            shippingFee: orderDetailsFromSupabase.shippingCost,
            discount: orderDetailsFromSupabase.discount || 0, // Giả sử có trường discount trong order_details
            // steps: orderDetailsFromSupabase.tracking_steps || [], // Nếu bạn lưu các bước tracking trong order_details
            // Bạn cần có logic để quản lý các bước tracking (steps) riêng nếu nó không nằm trong order_details
            // Ví dụ, có thể tạo một bảng riêng cho tracking status hoặc cập nhật trường status trong bảng orders
            status: data.status, // Trạng thái chung của đơn hàng
          };
          setOrder(formattedOrder);
          // setSteps(formattedOrder.steps); // Cập nhật steps nếu có
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
    // Trường hợp này ít khi xảy ra nếu loading và error được xử lý đúng
    return <div>Không có thông tin đơn hàng.</div>;
  }

  // Logic tính toán tổng tiền và trạng thái hiện tại (cần điều chỉnh dựa trên dữ liệu thật)
  // Ví dụ:
  const subtotal = order.items.reduce(
    (sum, it) => sum + it.price * it.quantity,
    0
  );
  const total = subtotal + order.shippingFee - order.discount;
  // const currentStatus = order.steps.length > 0 ? order.steps.find(step => !step.date)?.title || order.steps[order.steps.length -1].title : order.status;
  // Logic cho currentStatus và steps cần được điều chỉnh cho phù hợp với cách bạn lưu trữ thông tin tracking
  // Dưới đây là ví dụ đơn giản nếu chỉ dùng order.status
  const currentStatus = order.status;

  // Logic cho các bước tracking (steps)
  // Bạn cần định nghĩa 'steps' dựa trên dữ liệu thực tế, có thể là từ order.status hoặc một trường riêng.
  // Ví dụ đơn giản hóa:
  const mockSteps = [
    {
      id: 1,
      title: "Đã tiếp nhận đơn",
      date:
        order.status === "Đã tiếp nhận đơn"
          ? new Date().toLocaleDateString("vi-VN")
          : "",
    },
    {
      id: 2,
      title: "Đang xử lý đơn",
      date:
        order.status === "Đang xử lý đơn"
          ? new Date().toLocaleDateString("vi-VN")
          : "",
    },
    {
      id: 3,
      title: "Giao cho đơn vị vận chuyển",
      date:
        order.status === "Giao cho đơn vị vận chuyển"
          ? new Date().toLocaleDateString("vi-VN")
          : "",
    },
    {
      id: 4,
      title: "Đang giao hàng",
      date:
        order.status === "Đang giao hàng"
          ? new Date().toLocaleDateString("vi-VN")
          : "",
    },
    {
      id: 5,
      title: "Hoàn thành",
      date:
        order.status === "Hoàn thành"
          ? new Date().toLocaleDateString("vi-VN")
          : "",
    },
  ];
  // Tìm bước hoàn thành cuối cùng dựa trên trạng thái hiện tại
  let lastCompletedIndex = mockSteps.findIndex(
    (step) => step.title === currentStatus
  );
  if (currentStatus === "Hoàn thành") lastCompletedIndex = mockSteps.length - 1;
  // Hoặc nếu bạn có một trường 'created_at' cho mỗi bước tracking, logic sẽ phức tạp hơn.

  return (
    <div>
      <Header currentPage="order-tracking" />

      <div className="page-heading header-text">
        <div className="container">
          <h3>Theo dõi Đơn hàng #{order.id}</h3>
        </div>
      </div>

      {/* Phần hiển thị thông tin đơn hàng giữ nguyên logic cũ, chỉ thay đổi nguồn dữ liệu */}
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
            {order.paymentMethod === "cod" // Supabase có thể lưu 'cod' thay vì 'COD'
              ? "Thanh toán khi nhận hàng"
              : order.paymentMethod === "bank"
              ? "Chuyển khoản ngân hàng" // Ví dụ
              : order.paymentMethod}
          </p>
          <p>
            <strong>Trạng thái hiện tại:</strong> {currentStatus}
          </p>
        </div>

        {/* Phần tracking steps (nếu bạn muốn giữ lại giao diện cũ) */}
        {/* Bạn cần điều chỉnh logic này cho phù hợp với cách bạn lưu trữ tracking */}
        {/* <div className="tracking-steps">
          {mockSteps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${index <= lastCompletedIndex ? "completed" : ""}`}
            >
              <div className="step-icon"></div>
              <div className="step-title">{step.title}</div>
              {index <= lastCompletedIndex && step.date && ( // Chỉ hiển thị ngày nếu bước đã hoàn thành và có ngày
                <div className="step-date">{new Date(step.date).toLocaleDateString('vi-VN')}</div>
              )}
            </div>
          ))}
        </div> */}

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
