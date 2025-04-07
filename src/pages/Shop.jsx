import React from "react";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Features from "../components/Features";
import Trending from "../components/Trending";
import MostPlayed from "../components/MostPlayed";
import Categories from "../components/Categories";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Shop() {
  return (
    <div>
      {/* ***** Preloader Start ***** */}
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
      {/* ***** Preloader End ***** */}

      {/* ***** Header Area Start ***** */}
      <Header currentPage="shop" />
      {/* ***** Header Area End ***** */}

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Our Shop</h3>
              <span className="breadcrumb">
                <a href="#">Home</a> &gt; Our Shop
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section trending">
        <div className="container">
          <ul className="trending-filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">
                Show All
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".adv">
                Adventure
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".str">
                Strategy
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".rac">
                Racing
              </a>
            </li>
          </ul>
          <div className="row trending-box">
            {/* Example Item */}
            <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="assets/images/trending-01.jpg" alt="Trending 1" />
                  </a>
                  <span className="price">
                    <em>$36</em>$24
                  </span>
                </div>
                <div className="down-content">
                  <span className="category">Action</span>
                  <h4>Assasin Creed</h4>
                  <a href="product-details.html">
                    <i className="fa fa-shopping-bag"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Repeat similar items */}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination">
                <li>
                  <a href="#">&lt;</a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a className="is_active" href="#">
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

      <Footer />
    </div>
  );
}

export default Shop;
