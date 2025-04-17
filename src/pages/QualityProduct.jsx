import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import "./QualityProduct.css"; // You might need to create this CSS file

function QualityProduct() {
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
                  <h3>Sản phẩm chất lượng</h3>
                  <span className="breadcrumb">
                    <a href="/">Trang chủ</a> &gt; Sản phẩm chất lượng
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container quality-product-content my-5">
            <h4 style={{ marginTop: "30px" }}>Cam kết chất lượng sản phẩm</h4>
            <p>
              Tại Valley Book, chất lượng sản phẩm luôn là ưu tiên hàng đầu.
              Chúng tôi hiểu rằng, để mang đến những trải nghiệm đọc sách tốt
              nhất cho quý khách hàng, mỗi cuốn sách phải được chăm chút tỉ mỉ
              từ khâu chọn lọc nội dung, thiết kế hình thức đến quá trình in ấn
              và đóng gói.
            </p>
            <p>
              <strong>1. Nội dung được tuyển chọn kỹ lưỡng:</strong> Đội ngũ
              biên tập viên giàu kinh nghiệm của chúng tôi luôn nỗ lực tìm kiếm
              và lựa chọn những tác phẩm có giá trị nội dung cao, mang tính giáo
              dục, giải trí và truyền cảm hứng. Chúng tôi hợp tác chặt chẽ với
              các tác giả uy tín để đảm bảo mỗi trang sách đều chứa đựng thông
              tin hữu ích và hấp dẫn.
            </p>
            <p>
              <strong>2. Thiết kế sáng tạo và thẩm mỹ:</strong> Hình thức của
              cuốn sách cũng quan trọng không kém nội dung. Chúng tôi chú trọng
              đến việc thiết kế bìa sách độc đáo, bắt mắt, cùng với bố cục trang
              sách khoa học, dễ đọc, mang lại cảm giác thoải mái cho người đọc
              trong suốt quá trình thưởng thức.
            </p>
            <p>
              <strong>3. In ấn và đóng gói tiêu chuẩn cao:</strong> Valley Book
              lựa chọn các nhà in uy tín với công nghệ in ấn hiện đại để đảm bảo
              chất lượng hình ảnh sắc nét, màu sắc trung thực và độ bền cao của
              từng trang sách. Quy trình đóng gói cẩn thận giúp bảo vệ sách khỏi
              những tác động bên ngoài trong quá trình vận chuyển.
            </p>
            <p>
              <strong>4. Kiểm soát chất lượng nghiêm ngặt:</strong> Chúng tôi áp
              dụng quy trình kiểm soát chất lượng nghiêm ngặt ở mọi giai đoạn,
              từ khi bản thảo được duyệt đến khi sản phẩm hoàn thiện đến tay
              khách hàng. Mọi sản phẩm đều phải trải qua các bước kiểm tra kỹ
              lưỡng để đảm bảo không có lỗi về in ấn, đóng gói hay bất kỳ sai
              sót nào khác.
            </p>
            <p>
              <strong>5. Phản hồi và cải tiến liên tục:</strong> Chúng tôi luôn
              lắng nghe ý kiến phản hồi từ quý khách hàng để không ngừng cải
              thiện và nâng cao chất lượng sản phẩm. Sự hài lòng của quý khách
              là động lực to lớn để Valley Book ngày càng phát triển và mang đến
              những cuốn sách chất lượng hơn nữa.
            </p>
            <p>
              Với cam kết về chất lượng sản phẩm, Valley Book mong muốn trở
              thành người bạn đồng hành tin cậy trên hành trình khám phá tri
              thức và văn hóa đọc của bạn. Hãy yên tâm lựa chọn những cuốn sách
              từ Valley Book, nơi chất lượng luôn được đặt lên hàng đầu.
            </p>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default QualityProduct;
