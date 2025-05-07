import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import GachaStrip from "../components/GachaStrip";
import ChatBubble from "../components/ChatBubble";

function Gacha() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
          

          <GachaStrip />
          <ChatBubble></ChatBubble>
          <Footer />
        </>
      )}
    </>
  );
}

export default Gacha;
