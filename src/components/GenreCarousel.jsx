import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GenreCarousel.css";

const categories = [
  {
    name: "Thiếu nhi",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/doanhonhannew01-809d06bc-95c7-4182-bc63-d011974ebf95.jpg?v=1736827096680",
  },
  {
    name: "Hư cấu",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/dieukydieucuatiemtaphoanamiya0-00977117-0fcd-4293-9222-45a295055d5d.jpg?v=1743155191203",
  },
  {
    name: "Lịch sử",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/maus-chuyen-mot-ke-song-sot-01.jpg?v=1731407359860",
  },
  {
    name: "Kinh dị",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/carrie-vu-hoi-dam-mau-01.jpg?v=1726193131707",
  },
  {
    name: "Kinh điển",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/giet-con-chim-nhai-new3.jpg?v=1716798254130",
  },
  {
    name: "Phi hư cấu",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/homodeusluocsutuonglai01.jpg?v=1705552535243",
  },
  {
    name: "Trinh thám",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/bachdahanh-1c601895-75dd-4036-b20b-401dd76e13f2.jpg?v=1743154598083",
  },
];

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-next-arrow`}
    style={{ ...style, display: "block", right: 0 }}
    onClick={onClick}
  >
    <i className="fa fa-angle-right fa-2x" />
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} custom-prev-arrow`}
    style={{ ...style, display: "block", left: 0, zIndex: 1 }}
    onClick={onClick}
  >
    <i className="fa fa-angle-left fa-2x" />
  </div>
);

function GenreCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="my-5">
      <div className="w-100" style={{ maxWidth: "85%", margin: "0 auto" }}>
        <h3 className="fw-bold text-center mb-4">Thể loại nổi bật</h3>
      </div>

      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="p-2">
            <div className="bg-white rounded shadow-sm transition overflow-hidden">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "350px" }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  style={{
                    objectFit: "cover",
                    width: "200px",
                    height: "300px",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="p-3">
                <h6 className="fw-semibold text-dark mb-0 text-center">
                  {category.name}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GenreCarousel;
