import React from "react";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import GridBook from "../components/GridBook";

function Shop() {
  return (
    <div>
      {/* <Preloader /> */}

      {/* <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}

      <Header currentPage="shop" />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Sách</h3>
              <span className="breadcrumb">
                <a href="">Trang chủ</a> &gt; Cửa hàng
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section trending">
        <div style={{margin:"25px"}}>
          <div className="row">
            {/* Sidebar Filter: 1/3 width */}
            <div className="col-lg-3">
              <FilterSidebar />
            </div>

            {/* Shop Items: 2/3 width */}
            <div className="col-lg-9">
              <div className="row trending-box">
                <GridBook></GridBook>
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-lg-12">
                  <ul className="pagination">
                    <li>
                      <a href="#">&lt;</a>
                    </li>
                    <li>
                      <a className="is_active" href="#">1</a>
                    </li>
                    <li>
                      <a href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">&gt;</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Shop;
