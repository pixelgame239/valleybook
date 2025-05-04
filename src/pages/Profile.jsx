import React, { useState, useEffect, useContext } from "react";
import "../../public/assets/css/profile.css";
import { AuthContext } from "../components/AuthContext";
import supabase from "../backend/initSupabase";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer

const Profile = () => {
  const { userInfo, userData } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    detailAddress: "",
    province: "",
    district: "",
    ward: "",
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    // Load thông tin người dùng ban đầu
    if (userInfo) {
      setFormData({
        username: userInfo.username || "",
        email: userData?.email || "",
        phoneNumber: userInfo.phone_number || "",
        address: userInfo.address || "",
        detailAddress: userInfo.detail_address || "",
        province: userInfo.province || "",
        district: userInfo.district || "",
        ward: userInfo.ward || "",
      });
    }
  }, [userInfo, userData]);

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

    fetchDistricts(formData.province);
  }, [formData.province]);

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

    fetchWards(formData.district);
  }, [formData.district]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditingAddress(false);
    setFormData({
      username: userInfo?.username || "",
      phoneNumber: userInfo?.phone_number || "",
      address: userInfo?.address || "",
      detailAddress: userInfo?.detail_address || "",
      province: userInfo?.province || "",
      district: userInfo?.district || "",
      ward: userInfo?.ward || "",
    });
  };

  const handleSaveClick = async () => {
    try {
      const { data, error } = await supabase
        .from("accounts")
        .update({
          username: formData.username,
          phone_number: formData.phoneNumber,
          // address: formData.address,
          //detail_address: formData.detailAddress,
          //province: formData.province,
          //district: formData.district,
          // ward: formData.ward,
        })
        .eq("email", userData.email);
      if (error) {
        console.error("Lỗi cập nhật thông tin:", error);
        // Xử lý lỗi
      } else {
        console.log("Cập nhật thông tin thành công:", data);
        // Cập nhật context hoặc state để phản ánh thay đổi
        setEditing(false);
        setEditingAddress(false);
      }
    } catch (error) {
      console.error("Lỗi cập nhật thông tin:", error);
      // Xử lý lỗi
    }
  };

  const handleEditAddressClick = () => {
    setEditingAddress(true);
    setEditing(true);
  };

  return (
    <>
      <Header currentPage="pprofile" />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Thông tin cá nhân</h3>
              <span className="breadcrumb">
                <a href="/">Trang chủ</a> &gt; Thông tin cá nhân
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pprofile-container">
        <div className="pprofile-header">
          <img
            src="../public/assets/images/bookLogo.png"
            alt="Ảnh đại diện"
            className="pprofile-avatar"
          />
        </div>
        <div className="pprofile-info">
          {editing ? (
            <div className="pprofile-form">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={userData?.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              {editingAddress ? (
                <>
                  <div className="form-group">
                    <label>Địa chỉ chi tiết</label>
                    <input
                      type="text"
                      name="detailAddress"
                      value={formData.detailAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Tỉnh/Thành phố</label>
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                    >
                      <option value="">Chọn tỉnh/thành phố</option>
                      {provinces.map((province) => (
                        <option key={province.code} value={province.code}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Huyện/Quận</label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                    >
                      <option value="">Chọn huyện/quận</option>
                      {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Xã/Phường</label>
                    <select
                      name="ward"
                      value={formData.ward}
                      onChange={handleChange}
                    >
                      <option value="">Chọn xã/phường</option>
                      {wards.map((ward) => (
                        <option key={ward.code} value={ward.code}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    readOnly
                  />
                  <button type="button" onClick={handleEditAddressClick}>
                    Sửa địa chỉ
                  </button>
                </div>
              )}
              <div className="form-buttons">
                <button type="save" onClick={handleSaveClick}>
                  Lưu
                </button>
                <button type="cancle" onClick={handleCancelClick}>
                  Hủy
                </button>
              </div>
            </div>
          ) : (
            <div className="pprofile-details">
              <p>
                <strong>Username:</strong> {userInfo?.username}
              </p>
              <p>
                <strong>Email:</strong> {userData?.email}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {userInfo?.phone_number}
              </p>
              <p>
                <strong>Địa chỉ:</strong> {userInfo?.address}
              </p>
              <button type="button" onClick={handleEditClick}>
                Sửa thông tin
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer /> {/* Thêm Footer */}
    </>
  );
};

export default Profile;
