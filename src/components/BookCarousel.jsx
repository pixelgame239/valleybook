import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BookCarousel.css";

const books = [
  {
    title: "Book 1",
    author: "Author 1",

    imageUrl:
      "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/doi-mat-cua-mona-02.jpg?v=1741265722060",
  },
  {
    title: "Book 2",
    author: "Author 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Book 3",
    author: "Author 3",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Book 4",
    author: "Author 4",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Book 5",
    author: "Author 5",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const BookCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="book-carousel">
      <h2>Book Carousel</h2>
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.imageUrl} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookCarousel;
