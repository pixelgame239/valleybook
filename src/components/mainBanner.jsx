const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="caption header-text">
              <h6>Welcome to Lugx</h6>
              <h2>BEST GAMING SITE EVER!</h2>
              <p>
                LUGX Gaming is a free Bootstrap 5 HTML CSS website template for
                your gaming websites.
              </p>
              <div className="search-input">
                <form id="search" action="#">
                  <input
                    type="text"
                    placeholder="Type Something"
                    id="searchText"
                    name="searchKeyword"
                  />
                  <button role="button">Search Now</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="right-image">
              <img src="/assets/images/banner-image.jpg" alt="Banner" />
              <span className="price">$22</span>
              <span className="offer">-40%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
