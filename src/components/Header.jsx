import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import supabase from "../backend/initSupabase";
import "../../public/assets/css/headerStyle.css";
import { AuthContext } from "./AuthContext";
import bookLogo from "../../public/assets/images/bookLogo.png";
import accountLogo from "../../public/assets/images/account.png";
import NotificationSign from "./NotificationSign";

function Header({ currentPage }) {
  const dropdownRef = useRef(null);
  const bellDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { loggedIn, userData } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBellDropdown, setShowBellDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const isAdmin = userData?.email?.startsWith("admin");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

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
  };

  // Fetch notifications (orders with payment_method "bank" and status "đang chờ xác nhận")
  const fetchNotifications = async () => {
    try {
      let { data, error } = await supabase
        .from("orders")
        .select("order_id, created_at, payment_method, status")
        .eq("payment_method", "bank")
        .eq("status", "Đang chờ xác nhận");
      if (error) {
        throw error;
      }
      setNotifications(data);
    } catch (err) {
      console.error("Error fetching notifications:", err);
    }
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

  // Initial fetch notifications on mount
  useEffect(() => {
    if (loggedIn && isAdmin) {
      fetchNotifications();
    }
  }, [loggedIn, isAdmin]);

  // Realtime subscription for orders matching the criteria.
  useEffect(() => {
    if (!(loggedIn && isAdmin)) return;
    const realtimeChannel = supabase
      .channel("order_notifications")
      .on(
        "postgres_changes",
        {
          event: "*", // INSERT, UPDATE, DELETE
          schema: "public",
          table: "orders",
          filter: `payment_method=eq.bank,status=eq.Đang chờ xác nhận`,
        },
        (payload) => {
          console.log("Realtime notification payload:", payload);
          // For simplicity, refetch notifications list on any order change.
          fetchNotifications();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(realtimeChannel);
    };
  }, [loggedIn, isAdmin]);

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
                  style={{ width: "128px", marginTop: "-30px" }}
                />
              </Link>
              {/* ***** Logo End ***** */}
              <div id="search-input">
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
                        {location.pathname !== "/order-success" &&
                          (userInfo
                            ? (() => {
                                const cartItems = JSON.parse(
                                  localStorage.getItem("cart_items")
                                );
                                return <NotificationSign items={cartItems} />;
                              })()
                            : (() => {
                                const cartItems = JSON.parse(
                                  sessionStorage.getItem("cart_items")
                                );
                                return <NotificationSign items={cartItems} />;
                              })())}
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
                            style={{
                              cursor: "pointer",
                              fontSize: "25px",
                              position: "relative",
                            }}
                            onClick={() => {
                              setShowBellDropdown((prev) => {
                                const newState = !prev;
                                if (newState) setShowDropdown(false);
                                return newState;
                              });
                            }}
                          >
                            {notifications.length > 0 && (
                              <span
                                style={{
                                  position: "absolute",
                                  top: "-4px",
                                  right: "7px",
                                  width: "10px",
                                  height: "10px",
                                  backgroundColor: "red",
                                  borderRadius: "50%",
                                  display: "block",
                                }}
                              ></span>
                            )}
                          </i>
                          {showBellDropdown && (
                            <div
                              className="dropdown-menu-notification"
                              style={{ right: 0 }}
                            >
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: "0",
                                  margin: "0",
                                }}
                              >
                                {notifications.length === 0 ? (
                                  <li style={{ padding: "8px 12px" }}>
                                    Không có thông báo mới.
                                  </li>
                                ) : (
                                  notifications.map((order) => (
                                    <li
                                      key={order.order_id}
                                      style={{
                                        padding: "8px 12px",
                                        borderBottom: "1px solid #eee",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => navigate("/admin/orders")}
                                    >
                                      Đơn hàng #{order.order_id} mới
                                    </li>
                                  ))
                                )}
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
                            if (newState) setShowBellDropdown(false);
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
                            {userInfo.email === "admin1@valleybook.com" ? (
                              <li>
                                <Link
                                  to="/admin"
                                  style={{
                                    color: "black",
                                    textTransform: "none",
                                    textAlign: "center",
                                  }}
                                >
                                  Quản lý
                                </Link>
                              </li>
                            ) : null}
                            <li>
                              <Link
                                to="/orders"
                                style={{
                                  color: "black",
                                  textTransform: "none",
                                  textAlign: "center",
                                }}
                              >
                                Đơn mua
                              </Link>
                            </li>
                            <li
                              onClick={handleSignOut}
                              style={{ textAlign: "center" }}
                            >
                              Đăng xuất
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
