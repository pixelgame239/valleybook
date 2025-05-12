import React, { useState, useEffect, useContext } from "react";
import "../../public/assets/css/profile.css";
import { AuthContext } from "../components/AuthContext";
import supabase from "../backend/initSupabase";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer
import AvtImg from "../../public/assets/images/bookLogo.png";

const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [editing, setEditing] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);
  const [formData, setFormData] = useState({
    username: userInfo.username,
    email: userInfo.email,
    phoneNumber: userInfo.phone_number?userInfo.phone_number:"",
    address: userInfo.address?userInfo.address:"",
    detailAddress: userInfo.address?userInfo.address.split(", ")[0]:"",
    wardCode: "",
    wardName: userInfo.address?userInfo.address.split(", ")[1] || "":"",
    districtCode: "",
    districtName: userInfo.address?userInfo.address.split(", ")[2] || "":"",
    provinceCode: "",
    provinceName: userInfo.address?userInfo.address.split(", ")[3] || "":"",
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
    useEffect(() => {
    // Load thông tin người dùng ban đầu
    if (userInfo) {
      setFormData({
           username: userInfo.username,
          email: userInfo.email,
          phoneNumber: userInfo.phone_number?userInfo.phone_number:"",
          address: userInfo.address?userInfo.address:"",
          detailAddress: userInfo.address?userInfo.address.split(", ")[0]:"",
          wardCode: "",
          wardName: userInfo.address?userInfo.address.split(", ")[1] || "":"",
          districtCode: "",
          districtName: userInfo.address?userInfo.address.split(", ")[2] || "":"",
          provinceCode: "",
          provinceName: userInfo.address?userInfo.address.split(", ")[3] || "":"",
      });
    }
  }, []);
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
    if (formData.provinceName && provinces.length > 0) {
      const matchedProvince = provinces.find(
        (prov) => prov.name.toLowerCase() === formData.provinceName.toLowerCase()
      );
      if (matchedProvince && matchedProvince.code !== formData.provinceCode) {
        setFormData((prev) => ({
          ...prev,
          provinceCode: matchedProvince.code,
        }));
      }
    }
  }, [formData.provinceName, provinces, formData.provinceCode]);

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

    fetchDistricts(formData.provinceCode);
  }, [formData.provinceCode]);
    useEffect(() => {
    if (formData.districtName && districts.length > 0) {
      const matchedDistrict = districts.find(
        (dist) => dist.name.toLowerCase() === formData.districtName.toLowerCase()
      );
      if (matchedDistrict && matchedDistrict.code !== formData.districtCode) {
        setFormData((prev) => ({
          ...prev,
          districtCode: matchedDistrict.code,
        }));
      }
    }
  }, [formData.districtName, districts, formData.districtCode]);

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

    fetchWards(formData.districtCode);
  }, [formData.districtCode]);
  useEffect(() => {
    if (formData.wardName && wards.length > 0) {
      const matchedWard = wards.find(
        (ward) => ward.name.toLowerCase() === formData.wardName.toLowerCase()
      );
      if (matchedWard && matchedWard.code !== formData.wardCode) {
        setFormData((prev) => ({
          ...prev,
          wardCode: matchedWard.code,
        }));
      }
    }
  }, [formData.wardName, wards, formData.wardCode]);
  useEffect(() => {
      if (provinces.length && formData.provinceName) {
        const selectedProvince = provinces.find(
          (prov) =>
            prov.name.trim().toLowerCase() === formData.provinceName.trim().toLowerCase()
        );
        if (selectedProvince) {
          setFormData((prev) => ({
            ...prev,
            provinceCode: selectedProvince.code,
          }));
        }
      }
    }, [provinces, formData.provinceName]);
  
    // --- Lookup District Code by Name when districts data is loaded ---
    useEffect(() => {
      if (districts.length && formData.districtName) {
        const selectedDistrict = districts.find(
          (dist) =>
            dist.name.trim().toLowerCase() === formData.districtName.trim().toLowerCase()
        );
        if (selectedDistrict) {
          setFormData((prev) => ({
            ...prev,
            districtCode: selectedDistrict.code,
          }));
        }
      }
    }, [districts, formData.districtName]);
  
    // --- Lookup Ward Code by Name when wards data is loaded ---
    useEffect(() => {
      if (wards.length && formData.wardName) {
        const selectedWard = wards.find(
          (ward) =>
            ward.name.trim().toLowerCase() === formData.wardName.trim().toLowerCase()
        );
        if (selectedWard) {
          setFormData((prev) => ({
            ...prev,
            wardCode: selectedWard.code,
          }));
        }
      }
    }, [wards, formData.wardName]);

const handleProvinceChange = (e) => {
    const provinceCode = e.target.value;
    const selectedProvince = provinces.find(
      (prov) => String(prov.code) === provinceCode
    );
    setFormData((prev) => ({
      ...prev,
      provinceCode,
      provinceName: selectedProvince ? selectedProvince.name : "",
      // Reset district & ward when province changes:
      districtCode: "",
      districtName: "",
      wardCode: "",
      wardName: "",
    }));
  };

const handleDistrictChange = (e) => {
  const districtCode = e.target.value;
  const selectedDistrict = districts.find(
    (dist) => String(dist.code) === districtCode
  );
  setFormData((prev) => ({
    ...prev,
    districtCode,
    districtName: selectedDistrict ? selectedDistrict.name : "",
    // Reset ward when district changes:
    wardCode: "",
    wardName: "",
  }));
};

  const handleWardChange = (e) => {
    const wardCode = e.target.value;
    const selectedWard = wards.find(
      (ward) => String(ward.code) === wardCode
    );
    setFormData((prev) => ({
      ...prev,
      wardCode,
      wardName: selectedWard ? selectedWard.name : "",
    }));
  };
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditingAddress(false);
    setFormData({
          username: userInfo.username,
          email: userInfo.email,
          phoneNumber: userInfo.phone_number?userInfo.phone_number:"",
          address: userInfo.address?userInfo.address:"",
          detailAddress: userInfo.address?userInfo.address.split(", ")[0]:"",
          wardCode: "",
          wardName: userInfo.address?userInfo.address.split(", ")[1] || "":"",
          districtCode: "",
          districtName: userInfo.address?userInfo.address.split(", ")[2] || "":"",
          provinceCode: "",
          provinceName: userInfo.address?userInfo.address.split(", ")[3] || "":"",
    });
  };

  const handleSaveClick = async () => {
    try {
      const { data, error } = await supabase
        .from("accounts")
        .update({
          username: formData.username,
          phone_number: formData.phoneNumber,
          address: `${formData.detailAddress}, ${formData.wardName}, ${formData.districtName}, ${formData.provinceName}`
          // address: formData.address,
          //detail_address: formData.detailAddress,
          //province: formData.province,
          //district: formData.district,
          // ward: formData.ward,
        })
        .eq("email", userInfo.email);
      if (error) {
        console.error("Lỗi cập nhật thông tin:", error);
        // Xử lý lỗi
      } else {
        console.log("Cập nhật thông tin thành công:", data);
        // Cập nhật context hoặc state để phản ánh thay đổi
        setEditing(false);
        setFormData((prev) => ({
          ...prev,           // Spread the previous state
          address: `${formData.detailAddress}, ${formData.wardName}, ${formData.districtName}, ${formData.provinceName}`, // Update only the address
        }));

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
            src={AvtImg}
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
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
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
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Tỉnh/Thành phố</label>
                    <select
                      name="provinceCode"
                      value={formData.provinceCode}
                      onChange={handleProvinceChange}
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
                      name="districtCode"
                      value={formData.districtCode}
                      onChange={handleDistrictChange}
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
                      name="wardCode"
                      value={formData.wardCode}
                      onChange={handleWardChange}
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
                <strong>Username:</strong> {formData.username}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {formData.phoneNumber}
              </p>
              <p>
                <strong>Địa chỉ:</strong> {formData.address}
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
