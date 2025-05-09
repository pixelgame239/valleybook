import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import GachaStrip from "../components/GachaStrip";
import ChatBubble from "../components/ChatBubble";
import styles from "../components/GachaStrip.module.css";

function Gacha() {
  const [loading, setLoading] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // State to control overlay visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header currentPage="shop" />
          <div className="page-heading header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h3>Gacha</h3>
                  <span className="breadcrumb">
                    <a href="/">Trang chủ</a> &gt; Gacha
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Button to open the Gacha overlay */}
          <div style={{ textAlign: "center", margin: "40px 0" }}>
            <button onClick={openOverlay} className={styles.openOverlayBtn}>
              Open Gacha
            </button>
          </div>

          {/* Gacha Overlay */}
          {isOverlayOpen && (
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                {/* Remove the close button here, we'll use the main button in GachaStrip */}
                {/* <button onClick={closeOverlay} className={styles.closeOverlayBtn}>
                  &times;
                </button> */}
                {/* Pass the closeOverlay function as a prop */}
                <GachaStrip onCloseOverlay={closeOverlay} />
              </div>
            </div>
          )}

          <ChatBubble></ChatBubble>
          <Footer />
        </>
      )}
    </>
  );
}

export default Gacha;
