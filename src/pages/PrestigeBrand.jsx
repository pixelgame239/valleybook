import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import "./QualityProduct.css"; // Reuse the same CSS for consistency

function PrestigeBrand() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header currentPage="shop" />{" "}
          <div className="page-heading header-text">
            {" "}
            <div className="container">
              {" "}
              <div className="row">
                {" "}
                <div className="col-lg-12">
                  <h3>Thương hiệu uy tín</h3> {/* Updated heading */}{" "}
                  <span className="breadcrumb">
                    <a href="/">Trang chủ</a> &gt; Thương hiệu uy tín{" "}
                  </span>{" "}
                  {/* Updated breadcrumb */}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="container quality-product-content my-5">
            {" "}
            <div className="container my-5">
              {" "}
              <div>
                {" "}
                <h2
                  className="fw-bold display-6 mb-3"
                  style={{ color: "#0171F9" }}
                >
                  {" "}
                  {/* Màu mới, bỏ class text-success */}
                  20 Năm Xây Dựng Niềm Tin{" "}
                </h2>{" "}
                <p className="fs-5">
                  Với hơn <strong>20 năm kinh nghiệm</strong> hoạt động trong
                  lĩnh vực kinh doanh sách, chúng tôi tự hào là một trong những
                  thương hiệu uy tín và quen thuộc với độc giả Việt Nam. Khởi
                  đầu từ một cửa hàng nhỏ, giờ đây chúng tôi đã trở thành điểm
                  đến tin cậy cho hàng triệu người yêu sách trên khắp cả nước.{" "}
                </p>{" "}
                <h4 className="mt-4" style={{ color: "#0171F9" }}>
                  {" "}
                  {/* Màu mới, bỏ class text-success */}
                  Cam Kết Từ Một Thương Hiệu 20 Năm
                </h4>{" "}
                <ul className="fs-5">
                  {" "}
                  <li>
                    {" "}
                    <strong>Sách Chính Hãng, Chất Lượng Cao:</strong> Chúng tôi
                    chỉ cung cấp sách có bản quyền, đảm bảo chất lượng in ấn tốt
                    nhất và nội dung nguyên vẹn.{" "}
                  </li>{" "}
                  <li>
                    <strong>Đa Dạng Thể Loại:</strong> Từ văn học, kinh tế, khoa
                    học, thiếu nhi đến kỹ năng sống, chúng tôi luôn cập nhật
                    những tựa sách mới nhất và chọn lọc nhất.{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <strong>Dịch Vụ Khách Hàng Tận Tâm:</strong> Đội ngũ của
                    chúng tôi luôn sẵn sàng hỗ trợ và tư vấn để bạn tìm được
                    những cuốn sách ưng ý nhất.{" "}
                  </li>{" "}
                  <li>
                    <strong>Giá Cả Hợp Lý:</strong> Chúng tôi luôn nỗ lực mang
                    đến sách chất lượng với mức giá tốt nhất cho độc giả.{" "}
                  </li>{" "}
                </ul>{" "}
                <h4 className="mt-4" style={{ color: "#0171F9" }}>
                  {" "}
                  {/* Màu mới, bỏ class text-success */}
                  Cùng Chúng Tôi Kiến Tạo Thói Quen Đọc Sách
                </h4>{" "}
                <p className="fs-5 mt-2">
                  20 năm là một chặng đường dài, và chúng tôi vô cùng biết ơn sự
                  đồng hành và tin tưởng của quý độc giả. Chúng tôi cam kết sẽ
                  tiếp tục mang đến những cuốn sách hay, giá trị và đóng góp vào
                  việc lan tỏa văn hóa đọc tại Việt Nam. Hãy để chúng tôi là
                  người bạn đồng hành trên hành trình khám phá tri thức của bạn!{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <Footer />{" "}
        </>
      )}{" "}
    </>
  );
}

export default PrestigeBrand;
