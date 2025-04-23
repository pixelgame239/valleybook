import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import "./Policy.css";
import { useLocation } from "react-router-dom";

function Policy() {
  const [loading, setLoading] = useState(true);
  const { hash } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  setTimeout(() => {
    const element = document.getElementById(hash.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 100); // thêm delay nhẹ

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

          <div className="container policy-content my-5">
            <div
              style={{ padding: "1rem", textAlign: "left", fontSize: "18px" }}
            >
              <h4 id="bao-mat"></h4>
              <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
                🔒 Chính Sách Bảo Mật Thông Tin Khách Hàng
              </h2>
              <p>
                Tại <strong>Valley Book</strong>, chúng tôi cam kết bảo vệ tuyệt
                đối thông tin cá nhân của khách hàng khi mua sắm, đăng ký tài
                khoản hoặc sử dụng các dịch vụ trên hệ thống. Chính sách này nêu
                rõ cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu khách
                hàng.
              </p>

              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                1. Thông Tin Chúng Tôi Thu Thập
              </h3>
              <ul>
                <li>Họ tên, email, số điện thoại</li>
                <li>Địa chỉ giao hàng, thông tin hoá đơn</li>
                <li>
                  Thông tin tài khoản khi thanh toán (không lưu trữ dữ liệu thẻ)
                </li>
                <li>Lịch sử mua hàng và tương tác với website</li>
              </ul>

              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                2. Mục Đích Sử Dụng Thông Tin
              </h3>
              <ul>
                <li>Xử lý đơn hàng và giao hàng</li>
                <li>Gửi thông báo về trạng thái đơn hàng</li>
                <li>Hỗ trợ chăm sóc khách hàng, bảo hành và hậu mãi</li>
                <li>Gửi thông tin khuyến mãi (nếu bạn đăng ký nhận)</li>
                <li>Cải thiện dịch vụ và trải nghiệm người dùng</li>
              </ul>

              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                3. Cam Kết Bảo Mật Thông Tin
              </h3>
              <ul>
                <li>
                  Thông tin khách hàng được bảo mật tuyệt đối, không chia sẻ cho
                  bên thứ ba ngoại trừ khi có yêu cầu từ cơ quan pháp luật có
                  thẩm quyền.
                </li>
                <li>
                  Sử dụng các biện pháp kỹ thuật như mã hóa, tường lửa, chứng
                  chỉ SSL để bảo vệ dữ liệu người dùng.
                </li>
                <li>
                  Nhân sự được đào tạo về bảo mật và ký cam kết bảo mật thông
                  tin.
                </li>
              </ul>

              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                4. Quyền Lợi Của Khách Hàng
              </h3>
              <ul>
                <li>
                  Kiểm tra, cập nhật hoặc yêu cầu xóa thông tin cá nhân bất kỳ
                  lúc nào.
                </li>
                <li>Rút lại sự đồng ý nhận email marketing.</li>
                <li>
                  Mọi yêu cầu về thông tin cá nhân được xử lý trong vòng 48 giờ.
                </li>
              </ul>

              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Mọi thắc mắc vui lòng liên hệ CSKH
              </h3>
            </div>

            <h4 id="doi-tra"></h4>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "2rem",
              }}
            >
              🔄 Chính Sách Hoàn Trả & Đổi Sản Phẩm
            </h2>
            <h5>1. Các trường hợp chấp nhận đổi trả</h5>
            <p>1.1. Sản phẩm bị lỗi in ấn, nội dung.</p>
            <strong
              style={{
                fontSize: "20px",
              }}
            >
              Đối với sách in:
            </strong>
            <ul>
              <li>
                Chấp nhận đổi/trả trong vòng 7 ngày kể từ khi nhận hàng nếu sản
                phẩm:
              </li>
              <ul>
                <li>Bị lỗi in ấn (thiếu trang, mờ chữ…)</li>
                <li>Bị hỏng hóc trong quá trình vận chuyển</li>
              </ul>
            </ul>

            <strong
              style={{
                fontSize: "20px",
              }}
            >
              Đối với ebook & sách nói:
            </strong>
            <ul>
              <li>
                Không hoàn trả khi đã tải file thành công, trừ trường hợp lỗi kỹ
                thuật không thể khắc phục.
              </li>
              <li>
                Valley Book cam kết hỗ trợ đổi file hoặc hoàn tiền 100% nếu:
              </li>
              <ul>
                <li>File bị lỗi, không mở được dù đã thử hỗ trợ</li>
                <li>Khách hàng không thể truy cập nội dung hợp lệ</li>
              </ul>
            </ul>
            <p>1.2. Sản phẩm bị giao nhầm lẫn do lỗi từ Valley Book.</p>
            <p>1.3. Sản phẩm nhầm do khách hàng đặt nhầm</p>

            <h5>2. Điều kiện đổi trả</h5>
            <ul>
              <li>Sách còn nguyên tem, seal (đối với sản phẩm có seal)</li>
              <li>Gửi kèm ảnh chụp tình trạng sản phẩm khi yêu cầu đổi/trả</li>
            </ul>

            <h5>3. Thời gian hoàn trả</h5>
            <p>
              - Thời gian vận chuyển dao động từ 3 - 7 ngày làm việc tuỳ theo
              vùng miền.
            </p>

            <h5>4. Phí hoàn trả</h5>
            <p>
              4.1. Phí vận chuyển sản phẩm hoàn trả sẽ do Valley Book hỗ trợ
              trong các trường hợp 1.1 và 1.2.
            </p>
            <p>4.2. Trong trường hợp 1.3, khách hàng sẽ chịu phí vận chuyển.</p>
            <h5>5. Phương thức hoàn tiền</h5>
            <p>
              Với những trường hợp do sai sót của Valley Book, khách hàng sẽ
              được chuyển khoản ngay sau khi được sự thống nhất giữa hai bên.
            </p>

            {/* giao hàng */}
            <h4 id="van-chuyen"></h4>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "2rem",
              }}
            >
              🔄 Chính Sách Giao Hàng
            </h2>
            <h5>1. Cước phí đóng gói và giao hàng</h5>
            <p>Đơn hàng sẽ được miễn phí vận chuyển khi:</p>
            <ul>
              <li>Có giá trị từ 300.000 trở lên ở khu vực nội thành Hà Nội.</li>
              <li>
                Có giá trị từ 400.000 trở lên ở các tỉnh thành khác trên toàn
                quốc.
              </li>
            </ul>
            <p>
              Trong trường hợp trị giá đơn hàng chưa đủ mức miễn phí đóng gói và
              giao hàng, thì phí sẽ được áp dụng như sau: - trong nội thành Hà
              Nội phí vận chuyển là: 20.000 - ngoại thành và các tỉnh khác phí
              vận chuyển là: 30.0000
            </p>

            <h5>2. Thời gian giao hàng</h5>
            <ul>
              <li>
                Đối với đơn hàng tại khu vực nội thành Hà Nội: Sau 1-2 ngày làm
                việc.
              </li>

              <li>
                Đối với các tỉnh thành khác trên toàn quốc: Sau 3-5 ngày làm
                việc.
              </li>
            </ul>
            <h4 id="CSKH"></h4>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "2rem",
              }}
            >
              ☎️ Chăm Sóc Khách Hàng Valley Book
            </h2>
            <p>
              <strong>Thời gian làm việc:</strong>
              <br />
              Từ Thứ 2 đến Thứ 7 (08:30 – 17:30)
              <br />
              Nghỉ Chủ nhật & các ngày lễ theo quy định.
            </p>

            <p>
              <strong>Kênh liên hệ hỗ trợ:</strong>
            </p>
            <ul>
              <li>
                <strong>Email:</strong> cskh@valleybook.vn
              </li>
              <li>
                <strong>Zalo CSKH:</strong> 0869003199
              </li>
              <li>
                <strong>Fanpage Facebook:</strong> Valley Book – thung lũng của
                tri thức
              </li>
            </ul>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default Policy;
{
  /* ☎️ Chăm Sóc Khách Hàng Valley Book
Thời gian làm việc:
Từ Thứ 2 đến Thứ 7 (08:30 – 17:30)
Nghỉ Chủ nhật & các ngày lễ theo quy định.

Kênh liên hệ hỗ trợ:

Email: cskh@valleybook.vn

Zalo CSKH: 0869003199

Fanpage Facebook: Valley Book – Mở Cửa Tri Thức

🔄 Chính Sách Hoàn Trả & Đổi Sản Phẩm
Đối với sách in:
Chấp nhận đổi/trả trong vòng 7 ngày kể từ khi nhận hàng nếu sản phẩm:

Bị lỗi in ấn (thiếu trang, mờ chữ…)

Bị hỏng hóc trong quá trình vận chuyển

Không đúng với đơn đặt hàng

Điều kiện đổi trả:

Sách còn nguyên tem, seal (đối với sản phẩm có seal)

Gửi kèm ảnh chụp tình trạng sản phẩm khi yêu cầu đổi/trả

Đối với ebook & sách nói:
Không hoàn trả khi đã tải file thành công, trừ trường hợp lỗi kỹ thuật không thể khắc phục.

Valley Book cam kết hỗ trợ đổi file hoặc hoàn tiền 100% nếu:

File bị lỗi, không mở được dù đã thử hỗ trợ

Khách hàng không thể truy cập nội dung hợp lệ */
}
