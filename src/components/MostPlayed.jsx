import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bestSellingBooks = [
  {
    id: 1,
    title: "Đắc Nhân Tâm",
    category: "Tâm lý",
    image: "assets/images/tam_li_hoc_tinh_yeu.jpg",
  },
  {
    id: 2,
    title: "7 Thói Quen Hiệu Quả",
    category: "Kỹ năng sống",
    image: "assets/images/mindset.jpg",
  },
  {
    id: 3,
    title: "Nhà Giả Kim",
    category: "Văn học",
    image: "assets/images/mindset.jpg",
  },
  {
    id: 4,
    title: "Dám Bị Ghét",
    category: "Phát triển bản thân",
    image: "assets/images/mindset.jpg",
  },
];

function MostPlayed() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="section most-played py-5"
      style={{ backgroundColor: "#fff9f2" }}
    >
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-lg-6">
            <h2 style={{ fontWeight: "700", fontSize: "2rem" }}>
              📚 Sách Bán Chạy
            </h2>
          </div>
          <div className="col-lg-6 text-end">
            <div className="main-button">
              <Link to="/shop">Xem tất cả</Link>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          {bestSellingBooks.map((book) => (
            <div
              key={book.id}
              style={{ padding: "0 2.5px", boxSizing: "border-box" }}
            >
              <div
                className="item"
                style={{
                  textAlign: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "12px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="thumb mb-3">
                  <Link to={`/product/${book.id}`}>
                    <img
                      src={book.image}
                      alt={book.title}
                      style={{
                        height: "350px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Link>
                </div>
                <div className="down-content">
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "#777",
                      display: "block",
                      marginBottom: "1px",
                    }}
                  >
                    {book.category}
                  </span>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      minHeight: "48px",
                    }}
                  >
                    {book.title}
                  </h4>
                  <Link
                    to={`/product/${book.id}`}
                    style={{
                      fontSize: "0.9rem",
                      color: "white",
                      textDecoration: "underline",
                    }}
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MostPlayed;
