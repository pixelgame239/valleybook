import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import "./Policy.css";
import Footer from "../components/Footer";
function Policy() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header currentPage="shop" />
          <div className="page-heading header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h3>Chính sách</h3>
                  <span className="breadcrumb">
                    <a href="/">Trang chủ</a> &gt; Chính sách
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="policy-content">
              <h4>Chính Sách Bảo Mật</h4>
              <div className="mb-4">
                <h5>1. Mục đích và phạm vi thu thập</h5>
                <p>
                  Việc thu thập dữ liệu chủ yếu trên website của Valley Book bao
                  gồm: email, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa
                  chỉ Khách hàng. Đây là các thông tin cần thiết để liên hệ xác
                  nhận khi Khách hàng đăng ký sử dụng dịch vụ.
                </p>
                <p>
                  Khách hàng tự chịu trách nhiệm bảo mật tài khoản, đồng thời có
                  trách nhiệm thông báo kịp thời nếu có hành vi vi phạm bảo mật.
                </p>
              </div>

              <div className="mb-4">
                <h5>2. Phạm vi sử dụng thông tin</h5>
                <ul>
                  <li>Cung cấp dịch vụ đến Khách hàng.</li>
                  <li>Ngăn ngừa các hành vi giả mạo, phá hoại tài khoản.</li>
                  <li>Liên lạc và xử lý các tình huống đặc biệt.</li>
                  <li>Không sử dụng thông tin ngoài mục đích giao dịch.</li>
                  <li>Hợp tác khi có yêu cầu từ cơ quan chức năng.</li>
                </ul>
              </div>

              <div className="mb-4">
                <h5>3. Thời gian lưu trữ thông tin</h5>
                <p>
                  Dữ liệu cá nhân được lưu trữ đến khi có yêu cầu hủy bỏ. Trừ
                  trường hợp pháp luật yêu cầu khác, thông tin vẫn được bảo mật
                  trên máy chủ của chúng tôi.
                </p>
              </div>

              <div className="mb-4">
                <h5>4. Địa chỉ đơn vị thu thập và quản lý thông tin</h5>
                <p>
                  <strong>Công ty TNHH Valley Book</strong>
                  <br />
                  Địa chỉ: Nam Từ Liêm - Hà Nội
                  <br />
                  Hotline: 0869003199
                  <br />
                  Email: valleybook@contact.com
                </p>
              </div>

              <div className="mb-4">
                <h5>5. Phương tiện chỉnh sửa thông tin</h5>
                <p>
                  Khách hàng có thể tự chỉnh sửa thông tin cá nhân trong tài
                  khoản hoặc yêu cầu hỗ trợ từ Valley Book. Khi phát hiện thông
                  tin bị rò rỉ, Khách hàng có thể gửi khiếu nại để được hỗ trợ
                  xử lý.
                </p>
              </div>

              <div className="mb-4">
                <h5>6. Cam kết bảo mật thông tin cá nhân</h5>
                <ul>
                  <li>Thông tin cá nhân được bảo mật tuyệt đối.</li>
                  <li>
                    Không chia sẻ thông tin nếu không có sự đồng ý từ Khách
                    hàng, trừ khi có yêu cầu từ pháp luật.
                  </li>
                  <li>
                    Thông báo và xử lý kịp thời nếu xảy ra rò rỉ thông tin do bị
                    tấn công.
                  </li>
                  <li>
                    Bảo mật mọi thông tin giao dịch tại trung tâm dữ liệu cấp 1.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4>Chính sách đổi trả</h4>
                <div className="mb-3">
                  <h5>1. Các trường hợp chấp nhận đổi trả</h5>
                  <ul>
                    <li>1.1. Sản phẩm bị lỗi in ấn, nội dung.</li>
                    <li>
                      1.2. Sản phẩm bị giao nhầm lẫn do lỗi từ Valley Book.
                    </li>
                    <li>1.3. Sản phẩm nhầm do khách hàng đặt nhầm.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h5>2. Thời gian hoàn trả</h5>
                  <p>
                    Thời gian vận chuyển dao động từ 3 - 7 ngày làm việc tuỳ
                    theo vùng miền.
                  </p>
                </div>

                <div className="mb-3">
                  <h5>3. Phí hoàn trả</h5>
                  <ul>
                    <li>
                      3.1. Phí vận chuyển sản phẩm hoàn trả sẽ do Valley Book hỗ
                      trợ trong các trường hợp 1.1 và 1.2.
                    </li>
                    <li>
                      3.2. Trong trường hợp 1.3, khách hàng sẽ chịu phí vận
                      chuyển.
                    </li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h5>4. Phương thức hoàn tiền</h5>
                  <p>
                    Với những trường hợp do sai sót của Valley Book, khách hàng
                    sẽ được chuyển khoản ngay sau khi được sự thống nhất giữa
                    hai bên.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Policy;
