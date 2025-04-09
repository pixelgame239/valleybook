import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="col-lg-12">
          <p>Copyright © Valley Book. All rights reserved. &nbsp;&nbsp;</p>
          <Link
            to="/policy"
          >
            Our Shop
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
