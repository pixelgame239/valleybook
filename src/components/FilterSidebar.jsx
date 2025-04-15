import React, { useContext, useEffect, useState } from "react";
import "../../public/assets/css/FilterSidebar.css";
import { getGenres } from "../backend/getGenres";
import Preloader from "./Preloader";
import { BookContext } from "../backend/BookContext";

export default function FilterSidebar() {
  const [loading, setLoading] = useState(false);
  const { genres } = useContext(BookContext);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState({});
  const handleGenreChange = (genre_name) =>{
    if(selectedGenres.includes(genre_name)){
      setSelectedGenres((prev)=>prev.filter(keepGenre => keepGenre!==genre_name));
    }
    else{
      setSelectedGenres((prev)=>[...prev, genre_name]);
    }
    console.log(selectedGenres);
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
                <input type="checkbox" onChange={()=>handleGenreChange(genre.genre_name)}></input>
                {genre.genre_name}
              </label>
          </li>
          )
        ))}
      </ul>
      <p className="sort-title">Giá</p>
      <ol>
        <li className="genre-tile">
          <label className="label-title">
            <input type="checkbox"></input>
            Dưới 100.000đ
          </label>
        </li>
        <li className="genre-tile">
          <label className="label-title">
            <input type="checkbox"></input>
            Từ 100.000đ đến 150.000đ
          </label>
        </li>
        <li className="genre-tile">
          <label className="label-title">
            <input type="checkbox"></input>
            Từ 150.000đ đến 200.000đ
          </label>
        </li>
        <li className="genre-tile">
          <label className="label-title">
            <input type="checkbox"></input>
            Trên 200.000đ
          </label>
        </li>
      </ol>
      {selectedGenres.length>0?      
      <div className="apply-filter-button">
        <p style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>Áp dụng</p>
      </div>: null}
      <div className="clear-filter-button">
          Huỷ áp dụng
      </div>
    </div>}
    </>
  );
}
