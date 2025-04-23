import React, { createContext, useState, useContext } from 'react';

// Create a Context
export const BookContext = createContext();

// Create a Provider component
export const BookProvider = ({ children }) => {
  const [fullBookList, setFullBookList] = useState();
  const [bookList, setBookList] = useState();
  const [genres, setGenres] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [authors, setAuthors] = useState()

  return (
    <BookContext.Provider value={{ bookList, genres, pageCount, currentPage, authors, fullBookList, setFullBookList, setAuthors, setCurrentPage, setPageCount, setBookList, setGenres }}>
      {children}
    </BookContext.Provider>
  );
};
