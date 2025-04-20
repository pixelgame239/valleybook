import React from "react";
import { Link } from "react-router-dom";

import "./Feature.css";
function Features() {
  return (
    <div className="features">
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Link to="/prestigeBrand" className="item-link">
              <div className="item">
                <div className="image">
                  <img
                    src="assets/images/prestige-brand-logo.png"
                    alt="Thương hiệu uy tín"
                    style={{ maxWidth: "44px" }}
                  />
                </div>
                <h4>Thương hiệu uy tín</h4>
              </div>
            </Link>
          </div>
          <Link to="/qualityProduct" className="col-lg-4 col-md-6">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-02.png"
                  alt="User More"
                  style={{ maxWidth: "44px" }}
                />
              </div>
              <h4>Sản phẩm chất lượng</h4>
            </div>
          </Link>
          <Link to="/innovationPage" className="col-lg-4 col-md-6">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-03.png"
                  alt="Reply Ready"
                  style={{ maxWidth: "44px" }}
                />
              </div>
              <h4>VALLEY CHILL</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Features;
