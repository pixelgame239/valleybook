import React from "react";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Features from "../components/Features";
import Trending from "../components/Trending";
import MostPlayed from "../components/MostPlayed";
import Categories from "../components/Categories";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      {/* ***** Preloader Start ***** */}

      {/* thêm vào thì cứ quay quay, xóa đi thì ok */}

      {/* <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}
      {/* ***** Preloader End ***** */}

      {/* ***** Header Area Start ***** */}
      <Header currentPage="contact" />

      {/* ***** Header Area End ***** */}

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Liên hệ với chúng tôi</h3>
              <span className="breadcrumb">
                <a href="#">Trang chủ liên hệ</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text">
                <div className="section-heading">
                  <h6>Liên hệ với chúng tôi qua</h6>
                  <h2>Xin chào!</h2>
                </div>
                <p>
                Về ValleyBook:
                ValleyBook là trang web bán sách trực tuyến, nơi bạn có thể dễ dàng tìm thấy những cuốn sách hay,
                 phù hợp với mọi độ tuổi và sở thích. Chúng tôi mang đến cho bạn trải nghiệm mua sắm tiện lợi,
                  giá cả hợp lý và dịch vụ tận tâm. Dù bạn là người yêu tiểu thuyết, đam mê khám phá tri thức hay đang
                   tìm kiếm tài liệu học tập, ValleyBook luôn đồng hành cùng bạn trên hành trình tri thức.
                </p>
                <ul>
                  <li>
                    <span>Địa chỉ</span> Nam Từ Liêm, Hà Nội
                  </li>
                  <li>
                    <span>Số điện thoại</span> +84 667 253 649
                  </li>
                  <li>
                    <span>Email</span> valleybook@contact.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14894.877254424797!2d105.7438101!3d21.0439141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135096b31fa7abb%3A0xff645782804911af!2zVHLGsOG7nW5nIMSR4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgxJDDtG5nIMOB!5e0!3m2!1svi!2s!4v1744031958504!5m2!1svi!2s"
                        width="100%"
                        height="325px"
                        frameBorder="0"
                        style={{ border: 0, borderRadius: "23px" }}
                        allowFullScreen=""
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <form id="contact-form" action="" method="post">
                      <div className="row">
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Tên của bạn..."
                              autoComplete="on"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="surname"
                              id="surname"
                              placeholder="Họ của bạn..."
                              autoComplete="on"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              pattern="[^ @]*@[^ @]*"
                              placeholder="E-mail của bạn..."
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              placeholder="Chủ đề..."
                              autoComplete="on"
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Nhập tin nhắn..."
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="orange-button"
                            >
                              Gửi tin nhắn ngay
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
