import React, { useContext, useEffect, useState } from "react";
import "../../public/assets/css/FilterSidebar.css";
import { getGenres } from "../backend/getGenres";
import Preloader from "./Preloader";
import { BookContext } from "../backend/BookContext";
import { filterBook, getBookData, getNumsBook } from "../backend/getBookData";

export default function FilterSidebar() {
  const [loading, setLoading] = useState(false);
  const { genres, setBookList, setCurrentPage, setPageCount, bookList, authors } = useContext(BookContext);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [showAllAuthors, setShowAllAuthors] =useState(false);
  const initAuthors = showAllAuthors ? authors : authors.slice(0, 6);
  const handleGenreChange = async (genre_name) => {
    setLoading(true);
    let updatedGenres;
    if (selectedGenres.includes(genre_name)) {
      updatedGenres = selectedGenres.filter((g) => g !== genre_name);
    } else {
      updatedGenres = [...selectedGenres, genre_name];
    }
  
    setSelectedGenres(updatedGenres);
    setCurrentPage(1);
    if(updatedGenres.length===0){
       let bookData= await getBookData();
       if(bookData){
        setBookList(bookData);
        setPageCount(getNumsBook(bookData));
       }
       setLoading(false);
    }
    else{
      const bookFilterData = await filterBook(updatedGenres);
      if (bookFilterData) {
        setBookList(bookFilterData);
        setPageCount(getNumsBook(bookFilterData));
      }  
      setLoading(false);
    }
  };
  const handleFilterPrice= async(price_range) =>{
    setLoading(true);

  }
  const handleClearFilter=async ()=>{
    setLoading(true);
    setSelectedGenres([]);
    setSelectedPrice([]);
    let bookData = await getBookData();
    if(bookData){
      setBookList(bookData);
      let numPages = getNumsBook(bookData);
      setPageCount(numPages); 
    }
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
                <input type="checkbox"  checked={selectedGenres.includes(genre.genre_name)} onChange={async()=>handleGenreChange(genre.genre_name)}></input>
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
                <input type="checkbox"></input>
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
            <input type="checkbox" checked={selectedPrice.includes(1)}></input>
            Dưới 100.000đ
          </label>
        </li>
        <li className="genre-tile">
          <label className="label-title">
            <input type="checkbox" checked={selectedPrice.includes(2)}></input>
            Từ 100.000đ đến 150.000đ
          </label>
        </li>
        <li className="genre-tile" checked={selectedPrice.includes(3)}>
          <label className="label-title">
            <input type="checkbox"></input>
            Từ 150.000đ đến 200.000đ
          </label>
        </li>
        <li className="genre-tile" checked={selectedPrice.includes(4)}>
          <label className="label-title">
            <input type="checkbox"></input>
            Trên 200.000đ
          </label>
        </li>
      </ol>
      {(selectedGenres.length+selectedPrice.length)>0? 
      <div className="clear-filter-button" onClick={async()=>{handleClearFilter()}}>
          Huỷ áp dụng
      </div>:null}
    </div>}
    </>
  );
}
