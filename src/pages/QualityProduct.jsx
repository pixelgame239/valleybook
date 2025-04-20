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
              và đóng gói.
            </p>
            <p>
              <strong>1. Sách mới – nguyên seal:</strong> Mọi cuốn sách đều là
              hàng mới, chưa qua sử dụng, được niêm phong (sealing) đảm bảo
              nguyên vẹn.
            </p>
            <p>
              <strong>2.  Cam kết bản quyền, xuất xứ rõ ràng:</strong> Tất cả
              sách đều được nhập chính ngạch, có chứng nhận phân phối từ Nhà
              xuất bản hoặc đơn vị phân phối uỷ quyền. Mọi đầu sách đều tuân thủ
              luật Sở hữu trí tuệ, không sao chép, in lậu.
            </p>

            <p>
              <strong>3. Kiểm soát chất lượng nghiêm ngặt:</strong> Chúng tôi áp
              dụng quy trình kiểm soát chất lượng nghiêm ngặt ở mọi giai đoạn,
              từ khi nhập sách và đóng gói đến tay khách hàng. Mọi sản phẩm đều
              phải trải qua các bước kiểm tra kỹ lưỡng để đảm bảo không có lỗi
              từ nhà sản xuất, đóng gói hay bất kỳ sai sót nào khác.
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
