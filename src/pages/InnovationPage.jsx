import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import "./QualityProduct.css"; // Reuse the same CSS for consistency

function InnovationPage() {
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
                  <h3>Sự sáng tạo và đổi mới</h3>
                  <span className="breadcrumb">
                    <a href="/">Trang chủ</a> &gt; Sự sáng tạo và đổi mới
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container quality-product-content my-5">
            <h4 style={{ marginTop: "30px" }}>Thúc đẩy sáng tạo và đổi mới</h4>
            <p>
              Tại Valley Book, sự sáng tạo và đổi mới là yếu tố then chốt giúp
              chúng tôi không ngừng phát triển và tạo nên giá trị khác biệt.
              Chúng tôi tin rằng mỗi ý tưởng mới đều có thể mang lại trải nghiệm
              tốt hơn cho khách hàng.
            </p>
            <p>
              <strong>1. Khuyến khích tư duy sáng tạo:</strong> Mọi thành viên
              trong đội ngũ Valley Book đều được khuyến khích đề xuất ý tưởng,
              suy nghĩ vượt ra khỏi khuôn mẫu thông thường để tạo ra những giải
              pháp đột phá.
            </p>
            <p>
              <strong>2. Cải tiến quy trình liên tục:</strong> Chúng tôi luôn
              xem xét và tối ưu hóa các quy trình vận hành, từ biên tập nội
              dung, thiết kế, in ấn đến phân phối sản phẩm, nhằm nâng cao hiệu
              quả và chất lượng.
            </p>
            <p>
              <strong>3. Ứng dụng công nghệ mới:</strong> Valley Book tích cực
              áp dụng các công nghệ hiện đại như trí tuệ nhân tạo, dữ liệu lớn
              và các nền tảng số để nâng cao trải nghiệm người dùng và mở rộng
              khả năng tiếp cận tri thức.
            </p>
            <p>
              <strong>4. Hợp tác với các đối tác sáng tạo:</strong> Chúng tôi
              không ngừng tìm kiếm cơ hội hợp tác với những cá nhân và tổ chức
              sáng tạo trong và ngoài nước để cùng nhau tạo ra những sản phẩm
              đột phá.
            </p>
            <p>
              <strong>5. Tôn vinh sự đổi mới:</strong> Những đóng góp đổi mới,
              sáng tạo luôn được ghi nhận và lan tỏa trong văn hóa doanh nghiệp,
              tạo động lực để toàn thể nhân viên cùng nhau phát triển.
            </p>
            <p>
              Với tinh thần đổi mới không ngừng, Valley Book cam kết mang đến
              cho khách hàng những trải nghiệm ngày càng phong phú, sáng tạo và
              đầy cảm hứng trong thế giới sách.
            </p>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default InnovationPage;
