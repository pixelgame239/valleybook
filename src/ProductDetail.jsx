import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/templatemo-lugx-gaming.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";
// import "swiper/swiper-bundle.min.css";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <nav className="main-nav">
            <a href="/" className="logo">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                style={{ width: 158 }}
              />
            </a>
            <ul className="nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Our Shop</a>
              </li>
              <li>
                <a href="/product-details" className="active">
                  Product Details
                </a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/signin">Sign In</a>
              </li>
            </ul>
            <button className="menu-trigger">Menu</button>
          </nav>
        </div>
      </header>

      <div className="page-heading header-text">
        <div className="container">
          <h3>Modern Warfare® II</h3>
          <span className="breadcrumb">
            <a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt; Assassin's
            Creed
          </span>
        </div>
      </div>

      <div className="single-product section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src="/assets/images/single-game.jpg" alt="Game" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <h4>Call of Duty®: Modern Warfare® II</h4>
              <span className="price">
                <em>$28</em> $22
              </span>
              <p>Great game with immersive graphics and engaging gameplay.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="number"
                  className="form-control"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                />
                <button type="submit">
                  <i className="fa fa-shopping-bag"></i> ADD TO CART
                </button>
              </form>
              <ul>
                <li>
                  <span>Game ID:</span> COD MMII
                </li>
                <li>
                  <span>Genre:</span> <a href="/">Action</a>,{" "}
                  <a href="/">Team</a>, <a href="/">Single</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="section categories related-games">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h6>Action</h6>
            <h2>Related Games</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-button">
            <a href="shop.html">View All</a>
          </div>
        </div>
        <div class="col-lg col-sm-6 col-xs-12">
          <div class="item">
            <h4>Action</h4>
            <div class="thumb">
              <a href="/product-details"><img src="assets/images/categories-01.jpg" alt=""></img></a>
            </div>
          </div>
        </div>
        <div class="col-lg col-sm-6 col-xs-12">
          <div class="item">
            <h4>Action</h4>
            <div class="thumb">
              <a href="/product-details"><img src="assets/images/categories-05.jpg" alt=""></img></a>
            </div>
          </div>
        </div>
        <div class="col-lg col-sm-6 col-xs-12">
          <div class="item">
            <h4>Action</h4>
            <div class="thumb">
              <a href="/product-details"><img src="assets/images/categories-03.jpg" alt=""></img></a>
            </div>
          </div>
        </div>
        <div class="col-lg col-sm-6 col-xs-12">
          <div class="item">
            <h4>Action</h4>
            <div class="thumb">
              <a href="/product-details"><img src="assets/images/categories-04.jpg" alt=""></img></a>
            </div>
          </div>
        </div>
        <div class="col-lg col-sm-6 col-xs-12">
          <div class="item">
            <h4>Action</h4>
            <div class="thumb">
              <a href="/product-details"><img src="assets/images/categories-05.jpg" alt=""></img></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <footer>
        <div className="container">
          <p>Copyright © Valley Book. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ProductDetail;
