import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import supabase from "../backend/initSupabase";
import "../../public/assets/css/headerStyle.css";
import { AuthContext } from "./AuthContext";
import bookLogo from "../../public/assets/images/bookLogo.png";
import accountLogo from "../../public/assets/images/account.png";
import { useNavigate } from "react-router-dom";

function Header({ currentPage }) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { loggedIn, userData } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const isAdmin = userData?.email?.startsWith("admin");
  console.log("is admin: ", isAdmin);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = "/";
    } else {
      console.error("Sign out error:", error.message);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => (prev = !prev));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

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
                    to="/forum"
                    className={currentPage === "forum" ? "active" : ""}
                  >
                    Diễn đàn
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
                  <Link to="/cart" className="no-hover-bg">
                    <button
                      className="cart-button"
                      style={{ marginRight: "0px" }}
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                  </Link>
                </li>
                <li
                  className="profile-container"
                  ref={dropdownRef}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {loggedIn ? (
                    <>
                      {isAdmin && <i className="fas fa-bell bell-button"></i>}
                      <button
                        className="profile-button"
                        onClick={toggleDropdown}
                        style={{ marginLeft: "5px" }}
                      >
                        <img
                          src={accountLogo}
                          alt="Profile"
                          className="profile-avatar"
                        />
                      </button>
                      {showDropdown && (
                        <div className="dropdown-menu">
                          <ul>
                            <li onClick={handleSignOut}>Đăng xuất</li>
                            <li onClick={() => navigate("/adminChat")}>
                              Admin Chat
                            </li>
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // gap: "8px",
                      }}
                    >
                      <Link
                        to="/signIn"
                        className={currentPage === "signIn" ? "active" : ""}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Đăng nhập
                      </Link>
                    </div>
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
