import React from "react";

function Preloader() {
  return (
    <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
