import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../public/assets/css/gridBook.css";
import supabase from "../backend/initSupabase";
import { getBookData } from "../backend/getBookData";
import Preloader from "./Preloader";

export default function GridBook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleCardClick = (bookId) => {
    navigate(`/product/${bookId}`); 
  };
  useEffect(() => {
    const fetchBooks = async () =>{
      let bookData= await getBookData();
      console.log(bookData);
      if(bookData.length>0){
        setBooks(bookData);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="grid-book">
      {loading?<Preloader></Preloader>:( <>
    <div className="book-list-container">
      {books.map((book) => (
        <div
          key={book.id}
          onClick={() => handleCardClick(book.id)}
          className="book-card"
        >
          <img
            src={book.url_image}
            alt={book.book_name}
            className="book-image"
          />
          <div className="book-info">
            <h5 className="book-title">{book.book_name}</h5>
            <div className="book-category">{book.quantity}</div>
            <div className="book-price">
              <span className="old-price">
                {book.price.toLocaleString()}đ
              </span>
              <span className="new-price">
                {(book.price-(book.price*book.discount/100)).toLocaleString()}đ
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>)}
  </div>
  );
}