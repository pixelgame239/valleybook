import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../backend/initSupabase";
import "./EditVoucher.css";

function EditVoucher() {
  const { id } = useParams(); // id corresponds to voucher_id
  const navigate = useNavigate();
  const [voucher, setVoucher] = useState(null);
  const [formData, setFormData] = useState({
    voucher_id: "",
    quantity: "",
    detail: "",
    discount: "",
    used_user: "",
    created_at: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchVoucher() {
      const { data, error } = await supabase
        .from("voucher")
        .select("*")
        .eq("voucher_id", id)
        .single();
      if (error) {
        console.error("Error fetching voucher:", error);
        setErrorMessage("Không tìm thấy thông tin voucher.");
      } else if (data) {
        setVoucher(data);
        setFormData({
          voucher_id: data.voucher_id || "",
          quantity: data.quantity || "",
          detail: data.detail || "",
          discount: data.discount || "",
          // Assuming used_user is stored as an array
          used_user: data.used_user ? data.used_user.join(",") : "",
          created_at: data.created_at || "",
        });
      }
    }
    fetchVoucher();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Exclude voucher_id and created_at from update
    const { voucher_id, created_at, ...updatedData } = formData;

    // Process used_user: if empty string, set to empty array; otherwise, split by comma.
    if (updatedData.used_user.trim() === "") {
      updatedData.used_user = [];
    } else {
      updatedData.used_user = updatedData.used_user
        .split(",")
        .map((u) => u.trim());
    }

    const { error } = await supabase
      .from("voucher")
      .update(updatedData)
      .eq("voucher_id", id);
    if (error) {
      setErrorMessage("Có lỗi xảy ra khi cập nhật voucher.");
      console.error("Update error:", error);
    } else {
      navigate("/admin/voucher");
    }
  };

  if (errorMessage) {
    return <div className="edit-voucher-container">{errorMessage}</div>;
  }

  if (!voucher) {
    return <div className="edit-voucher-container">Loading...</div>;
  }

  return (
    <div className="edit-voucher-container">
      <h2>Chỉnh sửa Voucher</h2>
      <form onSubmit={handleSubmit} className="edit-voucher-form">
        <div className="form-group">
          <label htmlFor="voucher_id">Voucher ID (không thể chỉnh sửa)</label>
          <input
            type="text"
            id="voucher_id"
            name="voucher_id"
            value={formData.voucher_id}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="detail">Detail</label>
          <input
            type="text"
            id="detail"
            name="detail"
            value={formData.detail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            id="discount"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="used_user">
            Used User (danh sách, cách nhau bởi dấu phẩy)
          </label>
          <input
            type="text"
            id="used_user"
            name="used_user"
            value={formData.used_user}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="created_at">Created At (không thể chỉnh sửa)</label>
          <input
            type="text"
            id="created_at"
            name="created_at"
            value={formData.created_at}
            disabled
          />
        </div>
        <button type="submit" className="submit-btn">
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

export default EditVoucher;
