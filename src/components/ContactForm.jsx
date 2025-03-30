import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/assets/css/fontawesome.css";
import "/assets/css/templatemo-lugx-gaming.css";
import "/assets/css/owl.css";
import "/assets/css/animate.css";

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

export default ContactForm;
