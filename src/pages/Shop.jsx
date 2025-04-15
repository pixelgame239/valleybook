import React, { useContext, useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import GridBook from "../components/GridBook";
import { BookContext } from "../backend/BookContext";
import { getBookData, getNumsBook } from "../backend/getBookData";
import { getGenres } from "../backend/getGenres";

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const { bookList, genres, setBookList, setGenres, pageCount, setPageCount } = useContext(BookContext);
  const [loading, setLoading] = useState(true);
  const handleChangingPage=async (pageNumber)=>{
    setLoading(true);
    let newPageData = await getBookData(pageNumber);
    if(newPageData.length>0){
      setBookList(newPageData);
      setCurrentPage(pageNumber);
      setLoading(false);
    }
  }
    useEffect(() => {
      const fetchShop = async () =>{
          let bookData= await getBookData(1);
          let genreData= await getGenres();
          let numPages = await getNumsBook();
          if(bookData.length>0){
            setBookList(bookData);
            setPageCount(numPages);
            console.log(bookList);
            setLoading(false);
          }
            if(genreData){
                setGenres(genreData);
                console.log(genres);
                setLoading(false);
            }
      };
      fetchShop();
    }, []);
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  return (
    <div>
      {loading?<Preloader></Preloader> :<>
      <Header currentPage="shop" />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Sách</h3>
              <span className="breadcrumb">
                <a href="/">Trang chủ</a> &gt; Cửa hàng
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section trending">
        <div style={{margin:"25px"}}>
          <div className="row">
            {/* Sidebar Filter: 1/3 width */}
            <div className="col-lg-3">
              <FilterSidebar />
            </div>

            {/* Shop Items: 2/3 width */}
            <div className="col-lg-9">
              <div className="row trending-box">
                <GridBook></GridBook>
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-lg-12">
                  <ul className="pagination">
                    <li>
                      <a href="#">&lt;</a>
                    </li>
                    {pages.map(page=>(
                    <li>
                      <a className={currentPage===page?"is_active":""} onClick={()=>{handleChangingPage(page)}}>{page}</a>
                    </li>
                    ))}
                    <li>
                      <a href="#">&gt;</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
}
      {/* <Preloader /> */}

      {/* <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Shop;
