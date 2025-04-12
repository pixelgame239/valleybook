import React from "react";

function MainBanner() {
  return (
    <div className="main-banner py-5" style={{ backgroundColor: "#fff9f2" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="caption header-text">
              <h6 style={{ color: "#ff6b6b", fontWeight: "bold" }}>
                <br />
                <br />
                <br />
                <br />
              </h6>
              <h2 style={{ fontWeight: "700", fontSize: "2.2rem" }}>
                Mở rộng tri thức cùng những quyển sách tuyệt vời
              </h2>
              <p style={{ fontSize: "1rem", marginTop: "15px" }}>
                Khám phá kho tàng sách đa dạng từ khắp nơi trên thế giới – sách
                in, sách điện tử và cả sách nói.
              </p>
              <a
                href="/shop"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  padding: "10px 24px",
                  backgroundColor: "#ff6b6b",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Xem chi tiết
              </a>
              <p></p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div
              className="right-image position-relative"
              style={{ textAlign: "center" }}
            >
              <img
                src="https://bizweb.dktcdn.net/100/545/202/themes/987910/assets/bento_grid_item_4_img.jpg?1744182537967"
                alt="Banner"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
              />
              <span
                className="offer"
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  backgroundColor: "#ff6b6b",
                  color: "#fff",
                  padding: "3px 8px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
              >
                -40%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
