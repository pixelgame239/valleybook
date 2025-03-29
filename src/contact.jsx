import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/fontawesome.css";
import "../assets/css/templatemo-lugx-gaming.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";

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

const ContactForm = () => (
  <form id="contact-form" action="" method="post">
    <div className="row">
      <div className="col-lg-6">
        <input type="text" name="name" placeholder="Your Name..." required />
      </div>
      <div className="col-lg-6">
        <input
          type="text"
          name="surname"
          placeholder="Your Surname..."
          required
        />
      </div>
      <div className="col-lg-6">
        <input
          type="email"
          name="email"
          placeholder="Your E-mail..."
          required
        />
      </div>
      <div className="col-lg-6">
        <input type="text" name="subject" placeholder="Subject..." />
      </div>
      <div className="col-lg-12">
        <textarea name="message" placeholder="Your Message"></textarea>
      </div>
      <div className="col-lg-12">
        <button type="submit" className="orange-button">
          Send Message Now
        </button>
      </div>
    </div>
  </form>
);

const ContactInfo = () => (
  <div className="col-lg-6 align-self-center">
    <h6>Contact Us</h6>
    <h2>Say Hello!</h2>
    <p>Feel free to contact us for any inquiries.</p>
    <ul>
      <li>
        <span>Address:</span> Sunny Isles Beach, FL 33160
      </li>
      <li>
        <span>Phone:</span> +123 456 7890
      </li>
      <li>
        <span>Email:</span> lugx@contact.com
      </li>
    </ul>
  </div>
);

const Map = () => (
  <div id="map">
    <iframe
      src="https://www.google.com/maps/embed?..."
      width="100%"
      height="325px"
      frameBorder="0"
      style={{ border: "0", borderRadius: "23px" }}
      allowFullScreen
    ></iframe>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>Copyright © 2048 LUGX Gaming Company. All rights reserved.</p>
    </div>
  </footer>
);

const ContactPage = () => {
  return (
    <>
      <HeaderContact />
      <div className="page-heading header-text">
        <div className="container">
          <h3>Contact Us</h3>
          <span className="breadcrumb">
            <a href="/">Home</a> &gt; Contact Us
          </span>
        </div>
      </div>
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <ContactInfo />
            <div className="col-lg-6">
              <Map />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
