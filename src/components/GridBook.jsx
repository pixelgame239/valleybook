import React from "react";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Đắc Nhân Tâm",
    category: "Tâm lý",
    price: 95000,
    oldPrice: 120000,
    image: "public/assets/images/tam_li_hoc_tinh_yeu.jpg",
  },
  {
    id: 2,
    title: "7 Thói Quen Hiệu Quả",
    category: "Kỹ năng sống",
    price: 110000,
    oldPrice: 135000,
    image: "public/assets/images/mindset.jpg",
  },
  {
    id: 3,
    title: "Nhà Giả Kim",
    category: "Văn học",
    price: 87000,
    oldPrice: 102000,
    image: "public/assets/images/mindset.jpg",
  },
  {
    id: 4,
    title: "Dám Bị Ghét",
    category: "Phát triển bản thân",
    price: 99000,
    oldPrice: 125000,
    image: "public/assets/images/mindset.jpg",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    category: "Kinh doanh",
    price: 105000,
    oldPrice: 130000,
    image: "public/assets/images/mindset.jpg",
  },
  {
    id: 6,
    title: "Cha Giàu Cha Nghèo",
    category: "Tài chính cá nhân",
    price: 98000,
    oldPrice: 120000,
    image: "public/assets/images/mindset.jpg",
  },
  {
    id: 7,
    title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
    category: "Văn học Việt Nam",
    price: 76000,
    oldPrice: 90000,
    image: "public/assets/images/mindset.jpg",
  },
  {
    id: 8,
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    category: "Kỹ năng sống",
    price: 89000,
    oldPrice: 105000,
    image: "public/assets/images/mindset.jpg",
  },
  {
    id: 9,
    title: "Sapiens: Lược Sử Loài Người",
    category: "Lịch sử & Xã hội",
    price: 125000,
    oldPrice: 149000,
    image: "public/assets/images/mindset.jpg",
  },
  {
    id: 10,
    title: "Đi Tìm Lẽ Sống",
    category: "Tâm lý học",
    price: 97000,
    oldPrice: 115000,
    image: "public/assets/images/mindset.jpg",
  },
];

export default function GridBook() {
  return (
    <div className="col-lg-9">
      <div
        className="d-flex flex-wrap justify-content-start"
        style={{ gap: "20px" }}
      >
        {books.map((book) => (
          <Link
            to={`/product/${book.id}`}
            key={book.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "220px",
                backgroundColor: "#e0f0ff",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                padding: "16px",
                transition: "all 0.3s ease",
                flexShrink: 0,
                cursor: "pointer",
              }}
              className="book-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div className="mt-3 text-center">
                <h5 style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                  {book.title}
                </h5>
                <div style={{ fontSize: "1.3rem", color: "#333" }}>
                  {book.category}
                </div>
                <div className="mt-2" style={{ fontSize: "1.3rem" }}>
                  <span
                    className="text-muted"
                    style={{
                      textDecoration: "line-through",
                      marginRight: "6px",
                    }}
                  >
                    {book.oldPrice.toLocaleString()}đ
                  </span>
                  <span className="text-danger fw-bold">
                    {book.price.toLocaleString()}đ
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
