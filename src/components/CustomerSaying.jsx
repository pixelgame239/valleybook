import React from "react";
import HeadingHomepage from "./HeadingHomepage";
import "./CustomerSaying.css";
function CustomerSaying() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-heading" style={{ marginTop: "50px" }}>
              <HeadingHomepage title={"Khách hàng nói gì về chúng tôi"} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="flexContainer">
            <div className="flexColumn">
              <p style={{ fontSize: "1.2rem" }}>
                "Là một khách hàng lâu năm của Valley Book, tôi luôn ấn tượng
                với sự đa dạng và chất lượng của các đầu sách tại đây, từ sách
                giấy đến sách điện tử và sách nói. Giao diện website thân thiện,
                dễ sử dụng, giúp tôi dễ dàng tìm được cuốn sách mình cần. Dịch
                vụ khách hàng tận tâm và giao hàng nhanh chóng cũng khiến tôi
                rất hài lòng. Valley Book thực sự là nơi lý tưởng cho những ai
                yêu thích đọc sách và muốn khám phá tri thức mỗi ngày."
              </p>
              <img
                src="assets/images/HoangNamTien.png"
                alt=""
                style={{
                  width: "130px",
                  height: "auto",
                  marginLeft: "30px",
                  marginRight: "50px",
                  marginTop: "40px",
                  float: "left",
                }}
              />
              <p style={{ marginTop: "60px", fontSize: "1.3rem" }}>
                Ông Hoàng Nam Tiến
                <br />
                Chủ tịch FPT software
              </p>
            </div>
            <div className="flexColumn">
              <p style={{ fontSize: "1.2rem" }}>
                "Tôi luôn tin tưởng Valley Book vì sự phong phú và chất lượng
                tuyệt vời của các đầu sách. Từ sách giấy, sách điện tử đến sách
                nói, tất cả đều đáp ứng được nhu cầu của tôi. Trang web rất dễ
                sử dụng, giúp tôi tìm kiếm và mua sách nhanh chóng. Dịch vụ
                khách hàng chuyên nghiệp và giao hàng kịp thời là điều tôi rất
                hài lòng. Đặc biệt, chính sách Valley Chill với những món quà
                nhỏ nhưng đầy ý nghĩa như trà thảo mộc và bookmark tạo thêm sự
                ấm áp cho mỗi đơn hàng."
              </p>
              <img
                src="assets/images/tinikun.png"
                alt=""
                style={{
                  width: "130px",
                  height: "auto",
                  marginLeft: "30px",
                  marginRight: "50px",
                  marginTop: "40px",
                  float: "left",
                }}
              />
              <p style={{ marginTop: "60px", fontSize: "1.3rem" }}>
                Anh Dương Nguyễn Duy Thanh "Tikikun" <br />
                Doanh nhân, nhà sáng lập "Thằng Bán Sách" và "Tiệm Cây Có Tâm"​
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSaying;
