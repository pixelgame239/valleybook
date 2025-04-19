// Trong file BookContext.js (ví dụ)
import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  // Thêm state cho cụm từ tìm kiếm
  const [searchTerm, setSearchTerm] = useState("");
  // Có thể thêm state cho danh sách thể loại đang được lọc nếu cần

  const contextValue = {
    bookList,
    setBookList,
    genres,
    setGenres,
    currentPage,
    setCurrentPage,
    pageCount,
    setPageCount,
    // Thêm cụm từ tìm kiếm vào context value
    searchTerm,
    setSearchTerm,
    // Thêm các state và hàm khác nếu cần cho lọc
  };

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};
