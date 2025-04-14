import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../public/assets/css/gridBook.css";
import supabase from "../backend/initSupabase";
import { getBookData } from "../backend/getBookData";
import Preloader from "./Preloader";
import DiscountTag from "./DiscountTag";
import { BookContext } from "../backend/BookContext";

export default function GridBook() {
  const {bookList} = useContext(BookContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (bookId) => {
    navigate(`/shop/${bookId}`); 
  };
  // useEffect(() => {
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
      {bookList.map((book) => (
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
            <div className="book-category">{book.quantity}</div>
            <div className="book-price">
              {book.discount?<span className="old-price">
                {book.price.toLocaleString()}đ
              </span>:null}
              <span className="new-price">
                {(book.price-(book.price*book.discount/100)).toLocaleString()}đ
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
