import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import supabase from "../backend/initSupabase";
import "../../public/assets/css/headerStyle.css";
import { AuthContext } from "./AuthContext";
import bookLogo from "../../public/assets/images/bookLogo.png";
import accountLogo from "../../public/assets/images/account.png";
import { useNavigate } from "react-router-dom";
import NotificationSign from "./NotificationSign";

function Header({ currentPage }) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { loggedIn, userData } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const isAdmin = userData?.email?.startsWith("admin");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log("is admin: ", isAdmin);
  const [showBellDropdown, setShowBellDropdown] = useState(false);
  const bellDropdownRef = useRef(null);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = "/";
    } else {
      console.error("Sign out error:", error.message);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => (!prev));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (
        bellDropdownRef.current &&
        !bellDropdownRef.current.contains(event.target)
      ) {
        setShowBellDropdown(false);
      }
    };

    if (showDropdown || showBellDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown, showBellDropdown]);

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
              <div id="search-input">
                {" "}
                <SearchInput />
              </div>
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
                      <i
                        className="fa fa-shopping-cart"
                        style={{ fontSize: 23 }}
                      ></i>
                      <div
                        style={{
                          position: "absolute",
                          top: "-5px",
                          left: "75%",
                        }}
                      >
                      {userInfo ? (
                              (() => {
                                const cartItems = JSON.parse(localStorage.getItem("cart_items"));
                                return <NotificationSign items={cartItems} />;
                              })()
                            ) : (
                              (() => {
                                const cartItems = JSON.parse(sessionStorage.getItem("cart_items"));
                                return <NotificationSign items={cartItems} />;
                              })()
                            )}
                      </div>
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
                      {isAdmin && (
                        <div
                          ref={bellDropdownRef}
                          style={{ position: "relative", marginRight: "10px" }}
                        >
                          <i
                            className="fas fa-bell bell-button"
                            style={{ cursor: "pointer", fontSize: "25px" }}
                            onClick={() => {
                              setShowBellDropdown((prev) => {
                                const newState = !prev;
                                if (newState) setShowDropdown(false); // close profile if opening bell
                                return newState;
                              });
                            }}
                          ></i>
                          {showBellDropdown && (
                            <div
                              className="dropdown-menu-notification"
                              style={{ right: 0 }}
                            >
                              <ul>
                                <li>Thông báo 1</li>
                                <li>Thông báo 2</li>
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                      <button
                        className="profile-button"
                        onClick={() => {
                          setShowDropdown((prev) => {
                            const newState = !prev;
                            if (newState) setShowBellDropdown(false); // close bell if opening profile
                            return newState;
                          });
                        }}
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
                            <li
                              onClick={handleSignOut}
                              style={{ textAlign: "center" }}
                            >
                              Đăng xuất
                            </li>
                            <li>
                              <Link
                                to="/profile"
                                style={{
                                  color: "black",
                                  textTransform: "none",
                                  textAlign: "center",
                                }}
                              >
                                Hồ sơ
                              </Link>
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
