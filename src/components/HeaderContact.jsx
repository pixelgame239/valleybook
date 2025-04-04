import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/assets/css/fontawesome.css";
import "/assets/css/templatemo-lugx-gaming.css";
import "/assets/css/owl.css";
import "/assets/css/animate.css";

const HeaderContact = () => (
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <a href="/" className="logo">
              <img
                src="../assets/images/logo.png"
                alt="Logo"
                style={{ width: "158px" }}
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
                <a href="/product-details">Product Details</a>
              </li>
              <li>
                <a href="/contact" className="active">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
            </ul>
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default HeaderContact;
