import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import "./PrestigeBrand.css";

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
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div className="page-heading header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h3>Thương hiệu uy tín</h3>
                  <span className="breadcrumb">
                    <a href="/">Trang chủ</a> &gt; Thương hiệu uy tín
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="prestige-content">
              {" "}
              {/* Thêm wrapper div với lớp mới */}
              <p>
                Với hơn hai thập kỷ kinh nghiệm và tâm huyết sâu sắc với ngành
                sách, Valley Book là nhà sách trực tuyến đáng tin cậy, mang đến
                hàng triệu lựa chọn sách ý nghĩa. Kế thừa nền tảng vững chắc,
                chúng tôi đặc biệt chú trọng tuyển chọn sách phù hợp cho giới
                trẻ 18-22 tuổi, đa dạng thể loại từ văn học, sáng tạo đến kỹ
                năng, đồng hành cùng các bạn trên hành trình mở rộng tầm nhìn và
                làm giàu kiến thức. Valley Book cam kết mang đến trải nghiệm mua
                sắm online thuận tiện, chất lượng dịch vụ chu đáo và liên tục
                cập nhật kho sách. Với phương châm “Trao tặng sách là trao tặng
                giá trị, trao tặng tri thức,” Valley Book nỗ lực ứng dụng công
                nghệ để giúp độc giả trẻ tiếp cận tri thức dễ dàng. Nhờ sự
                chuyên nghiệp và tâm huyết, Valley Book đã khẳng định uy tín là
                nhà sách trực tuyến hàng đầu cho giới trẻ tại Việt Nam. Chúng
                tôi trân trọng cảm ơn sự tin tưởng và đồng hành của độc giả, đối
                tác, cam kết tiếp tục phát triển để mang giá trị tri thức tốt
                đẹp đến cộng đồng.
              </p>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default PrestigeBrand;
