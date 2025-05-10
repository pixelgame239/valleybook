import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../backend/initSupabase";
import "./EditOrder.css";

function EditOrder() {
  const { id } = useParams(); // id corresponds to order_id
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [formData, setFormData] = useState({
    order_id: "", // read-only
    created_at: "", // read-only
    total_price: "",
    status: "",
    payment_method: "",
    order_details: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchOrder() {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("order_id", id)
        .single();
      if (error) {
        console.error("Error fetching order:", error);
        setErrorMessage("Không tìm thấy thông tin đơn hàng.");
      } else if (data) {
        setOrder(data);
        setFormData({
          order_id: data.order_id,
          created_at: data.created_at,
          total_price: data.total_price || "",
          status: data.status || "",
          payment_method: data.payment_method || "",
          order_details: data.order_details
            ? JSON.stringify(data.order_details)
            : "",
          email: data.email || "",
        });
      }
    }
    fetchOrder();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare the data to update. order_id and created_at are not changed.
    const { order_id, created_at, order_details, ...updatedData } = formData;
    // Parse order_details if provided as JSON string
    if (order_details) {
      try {
        updatedData.order_details = JSON.parse(order_details);
      } catch (parseError) {
        console.error("Error parsing order_details JSON:", parseError);
      }
    }
    const { error } = await supabase
      .from("orders")
      .update(updatedData)
      .eq("order_id", id);
    if (error) {
      setErrorMessage("Có lỗi xảy ra khi cập nhật đơn hàng.");
      console.error("Update error:", error);
    } else {
      navigate("/admin/orders");
    }
  };

  if (errorMessage) {
    return <div className="edit-order-container">{errorMessage}</div>;
  }

  if (!order) {
    return <div className="edit-order-container">Loading...</div>;
  }

  return (
    <div className="edit-order-container">
      <h2>Chỉnh sửa đơn hàng</h2>
      <form onSubmit={handleSubmit} className="edit-order-form">
        <div className="form-group">
          <label htmlFor="order_id">Order ID (không thể chỉnh sửa)</label>
          <input
            type="text"
            id="order_id"
            name="order_id"
            value={formData.order_id}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="created_at">Ngày tạo (không thể chỉnh sửa)</label>
          <input
            type="text"
            id="created_at"
            name="created_at"
            value={formData.created_at}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="total_price">Tổng tiền</label>
          <input
            type="number"
            id="total_price"
            name="total_price"
            value={formData.total_price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Trạng thái</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="Đang chờ xác nhận">Đang chờ xác nhận</option>
            <option value="Đang xử lý">Đang xử lý</option>
            <option value="Hoàn thành">Hoàn thành</option>
            <option value="Đã hủy">Đã hủy</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="payment_method">Phương thức thanh toán</label>
          <select
            id="payment_method"
            name="payment_method"
            value={formData.payment_method}
            onChange={handleChange}
            required
          >
            <option value="cod">cod</option>
            <option value="bank">bank</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="order_details">Chi tiết đơn hàng (JSON)</label>
          <textarea
            id="order_details"
            name="order_details"
            value={formData.order_details}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email khách hàng</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

export default EditOrder;
