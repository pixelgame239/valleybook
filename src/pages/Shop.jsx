import React, { useContext, useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import GridBook from "../components/GridBook";
import { BookContext } from "../backend/BookContext";
import { getBookData, getNumsBook } from "../backend/getBookData";
import { getAuthors, getGenres } from "../backend/getGenres";

function Shop() {
  const { currentPage, setCurrentPage, bookList, genres, setBookList, setGenres, pageCount, setPageCount, setAuthors } = useContext(BookContext);
  const [loading, setLoading] = useState(true);
  const handleChangingPage=async (pageNumber)=>{
    setLoading(true);
    setCurrentPage(pageNumber);
      setLoading(false);
  }
    useEffect(() => {
      const fetchShop = async () =>{
          let bookData= await getBookData();
          let genreData= await getGenres();
          let authorData = await getAuthors();
          if(bookData.length>0){
            setBookList(bookData);
            setPageCount(getNumsBook(bookData));
            setLoading(false);
          }
            if(genreData){
                setGenres(genreData);
                console.log(genres);
                setLoading(false);
            }
            setCurrentPage(1);
          if(authorData){
            setAuthors(authorData);
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
                      <a style={{cursor: currentPage===1?"not-allowed":"pointer", backgroundColor: currentPage===1?"gray":null, color:currentPage===1?"black":null}} onClick={()=>{
                        if(currentPage===1)
                          return;
                        else{
                          handleChangingPage(currentPage-1)
                        }
                      }}>&lt;</a>
                    </li>
                    {pages.map(page=>(
                    <li>
                      <a style={{cursor:"pointer"}} className={currentPage===page?"is_active":""} onClick={()=>{handleChangingPage(page)}}>{page}</a>
                    </li>
                    ))}
                    <li>
                      <a style={{cursor: currentPage===pageCount?"not-allowed":"pointer", backgroundColor: currentPage===pageCount?"gray":null, color:currentPage===pageCount?"black":null}} onClick={()=>{
                        if(currentPage===pageCount)
                          return;
                        else{
                          handleChangingPage(currentPage+1)
                        }
                      }}>&gt;</a>
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
