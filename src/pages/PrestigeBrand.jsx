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
          <Header currentPage="shop" />
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
            <h4 style={{ marginTop: "30px" }}>Thương hiệu uy tín</h4>
            <p>
              Hơn hai thập kỷ xây dựng và phát triển, với sự nỗ lực không ngừng
              của đội ngũ xuất bản, Valley Book đã mang đến cho độc giả trong và
              ngoài nước hàng triệu tựa sách ý nghĩa. Valley Book không chỉ chú
              trọng vào việc phát triển các sách thiếu nhi mà còn tập trung mạnh
              mẽ vào việc cung cấp những tựa sách sáng tạo và hấp dẫn dành riêng
              cho giới trẻ từ 18-22 tuổi. Những cuốn sách này được chọn lọc kỹ
              lưỡng, phù hợp với sở thích, nhu cầu học hỏi và khám phá của các
              bạn trẻ trong thời đại hiện nay. Trong suốt những năm qua, Valley
              Book đã khẳng định được vị thế của mình như một đơn vị xuất bản
              tiên phong, mang đến những dòng sách tương tác, sách văn học, sách
              sáng tạo và bách khoa tri thức, đặc biệt phù hợp với các bạn trẻ
              đang tìm kiếm sự phát triển bản thân và mở rộng tầm nhìn. Các sách
              của Valley Book không chỉ giúp nâng cao kiến thức mà còn là những
              nguồn cảm hứng mạnh mẽ cho những bạn trẻ đam mê khám phá và học
              hỏi. Chúng tôi tự hào khi được đánh giá là một trong những đơn vị
              xuất bản hàng đầu tại Việt Nam, với các ấn phẩm được các chuyên
              gia và độc giả trẻ đón nhận nhiệt tình. Valley Book luôn giữ vững
              chất lượng và uy tín trong công tác chuyên môn, không ngừng sáng
              tạo để mang đến những cuốn sách chất lượng, phù hợp với nhu cầu
              của giới trẻ hiện đại. Với phương châm “Trao tặng sách là trao
              tặng giá trị, trao tặng tri thức,” Valley Book cam kết sẽ luôn bền
              bỉ trên con đường mang lại những tựa sách tốt nhất cho các bạn
              trẻ, ứng dụng công nghệ sáng tạo để phát triển nội dung sách phù
              hợp với xu hướng và nhu cầu của độc giả trẻ. Sự đam mê và tinh
              thần sáng tạo từ đội ngũ xuất bản đã tạo nên niềm tin vững chắc từ
              cộng đồng, giúp Valley Book trở thành thương hiệu sách uy tín dành
              cho giới trẻ tại Việt Nam. Chúng tôi trân trọng cảm ơn tất cả các
              bạn độc giả, đối tác và khách hàng trong và ngoài nước. Valley
              Book sẽ tiếp tục không ngừng phát triển, mang đến những giá trị
              tốt đẹp cho giới trẻ và giúp các bạn khám phá thế giới tri thức vô
              tận.
            </p>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default PrestigeBrand;
