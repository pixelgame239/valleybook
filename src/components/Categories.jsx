import React from "react";

function Categories() {
  return (
    <div className="section categories">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h6>Categories</h6>
              <h2>Top Categories</h2>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="product-details.html">
                  <img src="assets/images/categories-01.jpg" alt="Category 1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="product-details.html">
                  <img src="assets/images/categories-05.jpg" alt="Category 2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="product-details.html">
                  <img src="assets/images/categories-03.jpg" alt="Category 3" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="product-details.html">
                  <img src="assets/images/categories-04.jpg" alt="Category 4" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="product-details.html">
                  <img src="assets/images/categories-05.jpg" alt="Category 5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
