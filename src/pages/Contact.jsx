import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/assets/css/fontawesome.css";
import "/assets/css/templatemo-lugx-gaming.css";
import "/assets/css/owl.css";
import "/assets/css/animate.css";
import HeaderContact from "../components/HeaderContact";
import ContactInfo from "../components/ContactInfor";
import ContactForm from "../components/ContactForm";
import FooterContact from "../components/FooterContact";
import MapContact from "../components/MapContact";
import Header from "../components/Header";

const ContactPage = () => {
  return (
    <>
      <Header pageTab="contact" />
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
              <MapContact />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </>
  );
};

export default ContactPage;
