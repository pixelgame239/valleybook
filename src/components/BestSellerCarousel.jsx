import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingHomepage from "./HeadingHomepage";
import { getBestSellerBooks } from "../backend/getBookData";
import "./BestSellerCarousel.css";
import hotItem from "../../public/assets/images/hot_item.gif";

function BestSellerCarousel() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const data = await getBestSellerBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  // Custom arrows
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{ ...style, display: "block", right: 0 }}
        onClick={onClick}
      >
        <i className="fa fa-angle-right fa-2x" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        style={{ ...style, display: "block", left: 0, zIndex: 0 }}
        onClick={onClick}
      >
        <i className="fa fa-angle-left fa-2x" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 4,
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
    <div className="my-5 mx-5">
      <div className="w-100" style={{ maxWidth: "85%", margin: "0 auto" }}>
        <HeadingHomepage title={"Bestseller"} />
      </div>

      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.book_id} className="p-2">
            <div key={book.book_id} className="slide-item">
              <Link
                to={`/shop/${book.book_id}`}
                className="text-decoration-none"
              >
                <div className="bg-white rounded shadow-sm hover-shadow-lg transition overflow-hidden">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "350px", position: "relative" }}
                  >
                    <img
                      src={hotItem}
                      style={{
                        position: "absolute",
                        bottom: 12,
                        zIndex: 1,
                        width: "250px",
                      }}
                    ></img>
                    <img
                      loading="lazy"
                      src={book.url_image || "/placeholder.jpg"}
                      alt={book.book_name}
                      style={{
                        objectFit: "cover",
                        width: "200px",
                        height: "300px",
                        borderRadius: "5px",
                        zIndex: 2,
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <h6
                      className="book-title fw-semibold text-dark mb-0"
                      style={{
                        textAlign: "center", // căn giữa văn bản
                      }}
                    >
                      {book.book_name}
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BestSellerCarousel;
