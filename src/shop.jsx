import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/fontawesome.css";
import "../assets/css/templatemo-lugx-gaming.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";
import HeaderHome from "./HeaderHome";

const TrendingItems = ({ items }) => (
  <div className="row trending-box">
    {items.map((item, index) => (
      <div
        key={index}
        className={`col-lg-3 col-md-6 trending-items ${item.category}`}
      >
        <div className="item">
          <div className="thumb">
            <a href="product-details.html">
              <img src={item.image} alt="" />
            </a>
            <span className="price">
              <em>${item.originalPrice}</em>${item.discountedPrice}
            </span>
          </div>
          <div className="down-content">
            <span className="category">{item.category}</span>
            <h4>{item.name}</h4>
            <a href="product-details.html">
              <i className="fa fa-shopping-bag"></i>
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Pagination = () => (
  <ul className="pagination">
    <li>
      <a href="#"> &lt; </a>
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
      <a href="#"> &gt; </a>
    </li>
  </ul>
);

const Footer = () => (
  <footer>
    <div className="container">
      <p>Copyright &copy; Valley Book. All rights reserved.</p>
    </div>
  </footer>
);

const ShopPage = () => {
  const trendingItems = [
    {
      image: "../assets/images/trending-01.jpg",
      originalPrice: 36,
      discountedPrice: 24,
      category: "Action",
      name: "Assassin Creed",
    },
    {
      image: "../assets/images/trending-02.jpg",
      originalPrice: 32,
      discountedPrice: 22,
      category: "Strategy",
      name: "Assassin Creed",
    },
    {
      image: "../assets/images/trending-03.jpg",
      originalPrice: 45,
      discountedPrice: 30,
      category: "Racing",
      name: "Assassin Creed",
    },
  ];

  return (
    <div>
      <HeaderHome />
      <div className="page-heading header-text">
        <div className="container">
          <h3>Our Shop</h3>
          <span className="breadcrumb">
            <a href="#">Home</a> &gt; Our Shop
          </span>
        </div>
      </div>
      <div className="section trending">
        <div className="container">
          <TrendingItems items={trendingItems} />
          <Pagination />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
