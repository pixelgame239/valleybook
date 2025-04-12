import React, { useEffect, useState } from "react";
import "../../public/assets/css/FilterSidebar.css";
import { getGenres } from "../backend/getGenres";
import Preloader from "./Preloader";

export default function FilterSidebar() {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
   useEffect(() => {
      const fetchGenres = async () =>{
        let genreData= await getGenres();
        if(genreData){
          setGenres(genreData);
          setLoading(false);
        }
      };
      fetchGenres();
    }, []);
  return (
    <>
    {loading?<Preloader></Preloader>:
      <div className="filter-sidebar">
      <p className="sort-title">Thể loại</p>
      <ul>
        {genres.map((genre=>(
            <li className="genre-tile">
              <label className="label-title">
                <input type="checkbox"></input>
                {genre.genre_name}
              </label>
          </li>
          )
        ))}
      </ul>
      <p className="sort-title">Giá</p>
    </div>}
    </>
  );
}
