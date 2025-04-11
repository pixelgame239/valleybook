import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getSingleBookData } from "../backend/getBookData";
import Preloader from "../components/Preloader";

function ProductDetails() {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const fetchBookDetail = async () =>{
        let bookData= await getSingleBookData(id);
        console.log(bookData);
        if(bookData){
          setBook(bookData);
          setLoading(false);
        }
      };
      fetchBookDetail();
    }, []);

  if (!book)
    return <div className="container mt-5">Không tìm thấy sách.</div>;
  return (
    <div>
      {loading?<Preloader></Preloader>:<>
        <Header></Header>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{book.book_name}</h3>
              <span className="breadcrumb">
                <a href="/">Trang chủ</a> &gt; <a href="/shop">Cửa hàng</a> &gt; {book.book_name}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product section">
        <div className="container">
          <div className="row">
            {/* Ảnh */}
            <div className="col-lg-6">
              <div className="left-image">
                <img src={book.url_image} alt={book.book_name} />
              </div>
            </div>

            {/* Thông tin */}
            <div className="col-lg-6 align-self-center">
              <h4>{book.book_name}</h4>
              <span className="price">
                Giá: 
                {(book.price - (book.price*(book.discount/100))).toLocaleString()}đ
                {book.discount?<em>{book.price.toLocaleString()}đ</em>:null}
              </span>
              <p style={{textAlign:"justify"}}>{book.description}</p>

              <form id="qty" action="#">
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  aria-describedby="quantity"
                  placeholder="1"
                  min="1"
                  defaultValue="1"
                />
                <button type="submit">
                  <i className="fa fa-shopping-bag"></i> Thêm vào giỏ hàng
                </button>
              </form>

              <ul>
                <li>
                  <span>Thể loại:</span> {book.category}
                </li>
              </ul>
            </div>

            <div className="col-lg-12">
              <div className="sep"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mô tả & đánh giá */}
      <div className="more-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="reviews-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#reviews"
                          type="button"
                          role="tab"
                          aria-controls="reviews"
                          aria-selected="false"
                        >
                          Đánh giá (3)
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="reviews"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                    >
                      <p>Chưa có đánh giá nào. Hãy là người đầu tiên!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>}
    </div>
  );
}

export default ProductDetails;
