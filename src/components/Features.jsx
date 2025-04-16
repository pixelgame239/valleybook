import React from "react";
import "./Feature.css";
function Features() {
  return (
    <div className="features">
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-01.png"
                  alt="Free Storage"
                  style={{ maxWidth: "44px" }}
                />
              </div>
              <h4>Cam kết sách chính hãng</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-02.png"
                  alt="User More"
                  style={{ maxWidth: "44px" }}
                />
              </div>
              <h4>Hỗ trợ đa dạng loại hình sách</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-03.png"
                  alt="Reply Ready"
                  style={{ maxWidth: "44px" }}
                />
              </div>
              <h4>Chính sách 1 đổi 1 với những lỗi từ nhà sản xuất</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-04.png"
                  alt="Easy Layout"
                  style={{ maxWidth: "44px" }}
                />
              </div>
              <h4>Chính sách hỗ trợ rõ ràng, minh bạch</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
