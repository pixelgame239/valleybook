import React, { useState, useEffect } from "react";
import "../../public/assets/css/signup.css";
import supabase from "../backend/initSupabase";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    name: "",
    password: "",
    confirmPassword: "",
    detailAddress: "",
    province: "",
    district: "",
    ward: "",
  });

  const [errors, setErrors] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false); // Thêm state này
  const navigate = useNavigate(); // Khởi tạo navigate

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

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = "Bạn cần nhập đúng email";
    if (!formData.name) errors.name = "Vui lòng nhập họ và tên của bạn";
    if (!formData.password)
      errors.password = "Mật khẩu không đủ điều kiện bảo mật";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Mật khẩu không trùng khớp";
    if (!formData.detailAddress)
      errors.detailAddress = "Vui lòng nhập địa chỉ chi tiết";
    if (!formData.province) errors.province = "Vui lòng chọn tỉnh/thành phố";
    if (!formData.district) errors.district = "Vui lòng chọn huyện/quận";
    if (!formData.ward) errors.ward = "Vui lòng chọn xã/phường";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      handleSignUp();
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.confirmPassword,
      options: {
        // Thêm options
        emailRedirectTo: window.location.origin, // Đặt URL chuyển hướng sau khi xác nhận
      },
    });
    if (error) {
      console.error("Lỗi đăng ký:", error.message);
      setErrors((prevErrors) => ({
        ...prevErrors,
        signupError: error.message,
      }));
    } else {
      console.log("Đăng ký thành công:", data);
      setShowConfirmation(true); // Hiển thị màn hình chờ xác nhận
    }
  };

  // Hàm này sẽ được gọi khi người dùng xác nhận email thành công (thông qua URL chuyển hướng)
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Lỗi khi lấy user:", error.message);
        return;
      }

      if (user && user.email_confirmed_at) {
        clearInterval(intervalId); // Dừng khi đã xác nhận
        navigate("/"); // Chuyển về trang chủ
      }
    }, 3000); // Kiểm tra mỗi 3 giây

    return () => clearInterval(intervalId); // Cleanup khi component bị unmount
  }, [navigate]);

  if (showConfirmation) {
    return (
      <div className="center-container">
        <div className="signup-container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <MarkEmailReadIcon
              style={{
                fontSize: "100px",
                color: "lightgreen",
              }}
            />
          </div>
          <h2>Xác nhận Email</h2>
          <p style={{ textAlign: "center" }}>
            Vui lòng kiểm tra hộp thư đến của bạn để xác nhận địa chỉ email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="center-container">
      <div className="signup-container">
        <h2 style={{ color: "#0171F9" }}>Đăng ký</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Các input fields như trước */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Vui lòng nhập email của bạn"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Vui lòng nhập số điện thoại"
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="form-group">
            <label>Họ và Tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Vui lòng nhập họ và tên của bạn"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu của bạn"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label>Xác nhận mật khẩu</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Vui lòng xác nhận lại mật khẩu của bạn"
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="form-group">
            <label>Tỉnh/Thành phố</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="select"
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name}
                </option>
              ))}
            </select>
            {errors.province && <p className="error">{errors.province}</p>}
          </div>

          <div className="form-group">
            <label>Huyện/Quận</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="select"
            >
              <option value="">Chọn huyện/quận</option>
              {districts.map((district) => (
                <option key={district.code} value={district.code}>
                  {district.name}
                </option>
              ))}
            </select>
            {errors.district && <p className="error">{errors.district}</p>}
          </div>

          <div className="form-group">
            <label>Xã/Phường</label>
            <select
              name="ward"
              value={formData.ward}
              onChange={handleChange}
              className="select"
            >
              <option value="">Chọn xã/phường</option>
              {wards.map((ward) => (
                <option key={ward.code} value={ward.code}>
                  {ward.name}
                </option>
              ))}
            </select>
            {errors.ward && <p className="error">{errors.ward}</p>}
          </div>

          <div className="form-group">
            <label>Địa chỉ chi tiết</label>
            <input
              type="text"
              name="detailAddress"
              value={formData.detailAddress}
              onChange={handleChange}
              placeholder="Ví dụ: Số nhà, tên đường"
            />
            {errors.detailAddress && (
              <p className="error">{errors.detailAddress}</p>
            )}
          </div>

          <button className="submit-button" type="submit">
            Đăng ký
          </button>
          {errors.signupError && <p className="error">{errors.signupError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
