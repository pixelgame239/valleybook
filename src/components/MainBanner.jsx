import React from "react";

function MainBanner() {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="caption header-text">
              <h6>Chào mừng đến với Valley Book</h6>
              <h2>Nơi bạn có thể tìm kiếm và mua những quyển sách hay chứa đầy tri thức nhân loại!</h2>
              <p>
                Valley Book là công ty chuyên bán các quyển sách từ các nhà sách, tác giả trên toàn thế giới. Nơi đây bán sách vật lý, sách dưới dạng điện tử và sách nói vô cùng tiện lợi cho người thích đọc sách
              </p>
              <div className="search-input">
                <form id="search" action="#">
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    id="searchText"
                    name="searchKeyword"
                    onKeyPress={() => {}}
                  />
                  <button role="button">Tìm kiếm</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="right-image">
              <img src="assets/images/banner-image.jpg" alt="Banner" />
              <span className="price">$22</span>
              <span className="offer">-40%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
