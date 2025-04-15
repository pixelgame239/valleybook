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
                src="https://dinhtibooks.com.vn/images/customer/2022/06/17/resized/logo-tiki_1655455443.webp"
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
                Tiki <br />
                Đại lí miền Bắc của Tiki chia sẻ
              </p>
            </div>
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
                src="https://dinhtibooks.com.vn/images/customer/2022/06/17/resized/logo-tiki_1655455443.webp"
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
                Tiki <br />
                Đại lí miền Bắc của Tiki chia sẻ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSaying;
