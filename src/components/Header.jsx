import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import supabase from "../backend/initSupabase";
import "../../public/assets/css/headerStyle.css";
import { AuthContext } from "./AuthContext";
import bookLogo from "../../public/assets/images/bookLogo.png";
import accountLogo from "../../public/assets/images/account.png";

function Header({ currentPage }) {
  const { loggedIn } = useContext(AuthContext);
<<<<<<< HEAD
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = "/";
    } else {
      console.error("Sign out error:", error.message);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
=======
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
>>>>>>> 932512b527ccfa1517283fd95b0fd04f6f555983
  };
  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
  //     if (event === 'SIGNED_IN') {
  //       setLoggedIn(true);
  //     }
  //     if (event === "SIGNED_OUT") {
  //       setLoggedIn(false);
  //     }
  //   }
  //   );
  //   return ()=> authListener.subscription.unsubscribe();
  // }, [])
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <Link to="/" className="logo">
                <img
                  src={bookLogo}
                  alt="Valley Book logo"
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
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className={currentPage === "shop" ? "active" : ""}
                  >
                    Cửa hàng
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className={currentPage === "cart" ? "active" : ""}
                  >
                    Sự kiện
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={currentPage === "contact" ? "active" : ""}
                  >
                    Liên hệ
                  </Link>
                </li>
                <li>
                  {loggedIn ? (
                    <div className="logged-in-buttons">
                      {/* Cart Button (Logo) */}
                      <button className={"cart-button"}>
                        <i className="fa fa-shopping-cart"></i>
                      </button>
<<<<<<< HEAD

=======
>>>>>>> 932512b527ccfa1517283fd95b0fd04f6f555983
                      <button
                        className={"profile-button"}
                        onClick={handleSignOut}
                      >
                        <img
<<<<<<< HEAD
                          src={accountLogo}
=======
                          src={bookLogo}
>>>>>>> 932512b527ccfa1517283fd95b0fd04f6f555983
                          alt="Profile"
                          className="profile-avatar"
                        />
                      </button>
                    </div>
                  ) : (
<<<<<<< HEAD
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button
                        className="cart-button"
                        style={{ marginRight: "10px" }}
                      >
                        <i className="fa fa-shopping-cart"></i>
                      </button>
                      <Link
                        to="/signIn"
                        className={currentPage === "signIn" ? "active" : ""}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Đăng nhập
                      </Link>
                    </div>
=======
                    <Link
                      to="/signIn"
                      className={currentPage === "signIn" ? "active" : ""}
                    >
                      Đăng nhập
                    </Link>
>>>>>>> 932512b527ccfa1517283fd95b0fd04f6f555983
                  )}
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
