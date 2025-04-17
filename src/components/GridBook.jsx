import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../public/assets/css/gridBook.css";
import Preloader from "./Preloader";
import DiscountTag from "./DiscountTag";
import { BookContext } from "../backend/BookContext";

export default function GridBook() {
  const {bookList, currentPage} = useContext(BookContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (bookId) => {
    navigate(`/shop/${bookId}`); 
  };
  const calculateAvgRating=(book)=>{
    const totalRating= book.reviews.reduce((
      prevRate, curRate)=>prevRate+curRate.rating,0);
    const avgRating = (totalRating/(book.reviews.length)).toFixed(1);
    let displayInStar = "";
    for(let i=1;i<=5;i++){
      if(avgRating-i>=0.8){
        displayInStar+="★";
      }
      else if(avgRating-i<=0.5&&avgRating-i>=0){
        displayInStar+="⯪";
      }
      else{
        displayInStar+="☆";
      }
  }
  return { avgRating, displayInStar };
}
  // useEffect(() => {
  //   const fetchRating = async ()=>{
  //     let ratingData =await getRatings()
  //   }
  //   const fetchBooks = async () =>{
  //     let bookData= await getBookData(1);
  //     console.log(bookData);
  //     if(bookData.length>0){
  //       setBooks(bookData);
  //       setLoading(false);
  //     }
  //   };
  //   fetchBooks();
  // }, []);
  return (
    <div className="grid-book">
      {loading?<Preloader></Preloader>:( <>
    <div className="book-list-container">
      {bookList.slice(8*(currentPage-1),currentPage*8).map((book) => (
        <div
          key={book.book_id}
          onClick={() => handleCardClick(book.book_id)}
          className="book-card"
        >
          <img
            loading="lazy"
            src={book.url_image}
            alt={book.book_name}
            className="book-image"
          />
          <div className="book-info">
            <h5 className="book-title">{book.book_name}</h5>
            <p className="book-type">Sách giấy</p>
            {(!(book.reviews)||(book.reviews.length===0))?<p className="book-rating-empty">Chưa có đánh giá</p>:
            <p><span style={{fontSize:"18px", fontWeight:"bold"}}>{calculateAvgRating(book).avgRating}</span><span className="book-rating">{calculateAvgRating(book).displayInStar}</span><span className="book-rating-count">{`(${book.reviews.length})`}</span></p>}
            <div className="book-price">
              {book.discount?<span className="old-price">
                {book.price.toLocaleString()}đ
              </span>:null}
              <span className="new-price">
                {(book.price-Math.ceil((book.price*book.discount/100))).toLocaleString()}đ
              </span>
              {book.discount?<DiscountTag discountAmount={book.discount}></DiscountTag>:null}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>)}
  </div>
  );
}
