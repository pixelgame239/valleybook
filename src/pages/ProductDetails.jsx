import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const sampleBooks = [
  {
    id: 1,
    title: "Đắc Nhân Tâm",
    category: "Tâm lý",
    price: 95000,
    oldPrice: 120000,
    image: "public/assets/images/tam_li_hoc_tinh_yeu.jpg",
    description:
      "Một cuốn sách kinh điển giúp cải thiện kỹ năng giao tiếp, quản lý cảm xúc và tạo ảnh hưởng tích cực trong cuộc sống.",
  },
  {
    id: 2,
    title: "7 Thói Quen Hiệu Quả",
    category: "Kỹ năng sống",
    price: 110000,
    oldPrice: 135000,
    image: "public/assets/images/mindset.jpg",
    description:
      "Cuốn sách hướng dẫn phát triển bản thân bền vững dựa trên 7 nguyên tắc cốt lõi được đúc kết từ thực tiễn.",
  },
];

function ProductDetails() {
  const { id } = useParams();
  const book = sampleBooks.find((b) => b.id === parseInt(id));

  if (!book)
    return <div className="container mt-5">Không tìm thấy sách.</div>;

  return (
    <div>
      <Header currentPage="productDetail" />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{book.title}</h3>
              <span className="breadcrumb">
                <a href="/">Trang chủ</a> &gt; <a href="/shop">Cửa hàng</a> &gt; {book.title}
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
                <img src={book.image} alt={book.title} />
              </div>
            </div>

            {/* Thông tin */}
            <div className="col-lg-6 align-self-center">
              <h4>{book.title}</h4>
              <span className="price">
                <em>{book.oldPrice.toLocaleString()}đ</em> {book.price.toLocaleString()}đ
              </span>
              <p>{book.description}</p>

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
                          id="description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#description"
                          type="button"
                          role="tab"
                          aria-controls="description"
                          aria-selected="true"
                        >
                          Mô tả
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
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
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <p>{book.description}</p>
                    </div>
                    <div
                      className="tab-pane fade"
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
    </div>
  );
}

export default ProductDetails;
