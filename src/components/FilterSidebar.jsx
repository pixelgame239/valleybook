import React, { useContext, useEffect, useState } from "react";
import "../../public/assets/css/FilterSidebar.css";
import { getGenres } from "../backend/getGenres";
import Preloader from "./Preloader";
import { BookContext } from "../backend/BookContext";
import { filterBook, getBookData, getNumsBook } from "../backend/getBookData";

export default function FilterSidebar() {
  const [loading, setLoading] = useState(false);
  const { genres, setBookList, setCurrentPage, setPageCount, bookList, fullBookList, authors } = useContext(BookContext);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState([]);
  const [showAllAuthors, setShowAllAuthors] =useState(false);
  const initAuthors = showAllAuthors ? authors : authors.slice(0, 6);

  const handleGenreChange = (genre_name, priceRange, author_name) => {
    setLoading(true);
    let filteredBooks = [];
    let newGenres = [...selectedGenres];
    let newAuthors = [...selectedAuthor];
    let newPrices = [...selectedPrice];
    if (genre_name !== null) {
      if (newGenres.includes(genre_name)) {
        newGenres = newGenres.filter(g => g !== genre_name);
      } else {
        newGenres.push(genre_name);
      }
      setSelectedGenres(newGenres);
    }  
    if (author_name !== null) {
      if (newAuthors.includes(author_name)) {
        newAuthors = newAuthors.filter(a => a !== author_name);
      } else {
        newAuthors.push(author_name);
      }
      setSelectedAuthor(newAuthors);
    }
    if(priceRange!==null){
      if (newPrices.includes(priceRange)) {
        newPrices = newPrices.filter(p => p !== priceRange);
      } else {
        newPrices.push(priceRange);
      }
      setSelectedPrice(newPrices);
    }
    setCurrentPage(1);
    if (newGenres.length > 0) {
      const tempBooks = fullBookList.filter(book =>
        book.book_genres.some(genre => newGenres.includes(genre.genre_name))
      );
      tempBooks.forEach(book => addUniqueBook(filteredBooks, book));
    }
  
    if (newAuthors.length > 0) {
      const tempBooks = fullBookList.filter(book =>
        newAuthors.includes(book.authors.author_name)
      );
      tempBooks.forEach(book => addUniqueBook(filteredBooks, book));
    }

    if (newPrices.length > 0) {
      const tempBooks = fullBookList.filter(book => {
        const discount = book.discount || 0;
        const realPrice = book.price - (book.price * discount / 100);
    
        return newPrices.some(range => {
          if (range === 1) return realPrice < 100000;
          if (range === 2) return realPrice >= 100000 && realPrice < 150000;
          if (range === 3) return realPrice >= 150000 && realPrice < 200000;
          if (range === 4) return realPrice >= 200000;
          return false;
        });
      });
      tempBooks.forEach(book => addUniqueBook(filteredBooks, book));
    }
    
    if (newGenres.length + newAuthors.length + newPrices.length !== 0) {
      setBookList(filteredBooks);
      setPageCount(getNumsBook(filteredBooks));
    } else {
      setBookList(fullBookList);
      setPageCount(getNumsBook(fullBookList));
      console.log("Clear filter");
    }

    setLoading(false);

  //   if(updatedGenres.length===0){
  //      let bookData= await getBookData();
  //      if(bookData){
  //       setBookList(bookData);
  //       setPageCount(getNumsBook(bookData));
  //      }
  //      setLoading(false);
  //   }
  //   else{
  //     const bookFilterData = await filterBook(updatedGenres);
  //     if (bookFilterData) {
  //       setBookList(bookFilterData);
  //       setPageCount(getNumsBook(bookFilterData));
  //     }  
  //     setLoading(false);
  //   }
  };
  const addUniqueBook= (filteredBooks, addedBook) =>{
    if (!filteredBooks.some(b => b.book_id === addedBook.book_id)) {
      filteredBooks.push(addedBook);
    }
  }
  const handleClearFilter=async ()=>{
    setLoading(true);
    setSelectedGenres([]);
    setSelectedPrice([]);
    setSelectedAuthor([]);
    setBookList(fullBookList);
    setPageCount(getNumsBook(fullBookList));
    // let bookData = await getBookData();
    // if(bookData){
    //   setBookList(bookData);
    //   let numPages = getNumsBook(bookData);
    //   setPageCount(numPages); 
    // }
    setLoading(false);
  }
  
  //  useEffect(() => {
  //     const fetchGenres = async () =>{
  //       let genreData= await getGenres();
  //       if(genreData){
  //         setGenres(genreData);
  //         setLoading(false);
  //       }
  //     };
  //     fetchGenres();
  //   }, []);
  return (
    <>
    {loading?<Preloader></Preloader>:
      <div className="filter-sidebar">
      <p className="sort-title">Thể loại</p>
      <ul>
        {genres.map((genre=>(
            <li className="genre-tile">
              <label className="label-title">
                <input type="checkbox"  checked={selectedGenres.includes(genre.genre_name)} onChange={()=>handleGenreChange(genre.genre_name,null, null)}></input>
                {genre.genre_name}
              </label>
          </li>
          )
        ))}
      </ul>
      <p className="sort-title">Tác giả</p>
        <ul>
          {initAuthors.map((author=>(
              <li className="genre-tile">
                <label className="label-title">
                <input type="checkbox" checked={selectedAuthor.includes(author.author_name)} onChange={()=>handleGenreChange(null, null, author.author_name)}></input>
                    {author.author_name}
                </label>
              </li>
          )))}
        </ul>
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"aliceblue"}}>
        <button style={{cursor:"pointer", border:"none" ,color: "royalblue", textAlign:"center", backgroundColor:"inherit"}} onClick={()=>setShowAllAuthors(!showAllAuthors)}>{showAllAuthors?"Ẩn bớt":"Xem thêm"}</button>
        </div>
      <p className="sort-title">Giá</p>
      <ol>
        <li className="genre-tile">
          <label className="label-title">
            <input type="checkbox" checked={selectedPrice.includes(1)} onChange={()=>handleGenreChange(null, 1, null)}></input>
            Dưới 100.000đ
          </label>
        </li>
        <li className="genre-tile">
          <label className="label-title">
            <input type="checkbox" checked={selectedPrice.includes(2)} onChange={()=>handleGenreChange(null, 2, null)}></input>
            Từ 100.000đ đến 150.000đ
          </label>
        </li>
        <li className="genre-tile">
          <label className="label-title">
            <input type="checkbox" checked={selectedPrice.includes(3)} onChange={()=>handleGenreChange(null, 3, null)}></input>
            Từ 150.000đ đến 200.000đ
          </label>
        </li>
        <li className="genre-tile">
          <label className="label-title">
            <input type="checkbox" checked={selectedPrice.includes(4)} onChange={()=>handleGenreChange(null, 4, null)}></input>
            Trên 200.000đ
          </label>
        </li>
      </ol>
      {(selectedGenres.length+selectedPrice.length+selectedAuthor.length)>0? 
      <div className="clear-filter-button" onClick={async()=>{handleClearFilter()}}>
          Huỷ áp dụng
      </div>:null}
    </div>}
    </>
  );
}
