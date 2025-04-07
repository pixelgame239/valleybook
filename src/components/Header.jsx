import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
function Header({ currentPage }) {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <Link to="/" className="logo">
                <img
                  src="assets/images/bookLogo.png"
                  alt="LUGX Gaming Logo"
                  style={{ width: "128px", marginTop: "-30px" }} // Added marginTop to move it up
                />
              </Link>
              {/* ***** Logo End ***** */}
              <SearchInput />
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li>
                  <Link
                    to="/"
                    className={currentPage === "home" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className={currentPage === "shop" ? "active" : ""}
                  >
                    Our Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/productDetail"
                    className={currentPage === "productDetail" ? "active" : ""}
                  >
                    Product Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={currentPage === "contact" ? "active" : ""}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signIn"
                    className={currentPage === "signIn" ? "active" : ""}
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
