import React from "react";
import { Link } from "react-router-dom";
import HeadingHomepage from "./HeadingHomepage";
const suggestedBooks = [
  {
    id: 1,
    title: "Muôn Kiếp Nhân Sinh",
    description: "Cuốn sách khám phá luân hồi và nghiệp báo trong cuộc sống.",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/545/202/themes/987910/assets/season_coll_2_img.png?1744182537967",
  },
  {
    id: 2,
    title: "Bí Mật Tư Duy Triệu Phú",
    description: "Khám phá tư duy thành công và làm giàu bền vững.",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/545/202/themes/987910/assets/season_coll_4_img.png?1744182537967",
  },
  {
    id: 3,
    title: "Tôi Tài Giỏi, Bạn Cũng Thế!",
    description: "Truyền cảm hứng học tập và phát triển bản thân cho giới trẻ.",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/545/202/themes/987910/assets/season_coll_6_img.png?1744182537967",
  },
];

function CTA() {
  return (
    <div className="section cta" style={{ backgroundColor: "#fef8f3" }}>
      <div className="container">
        <HeadingHomepage title="Gợi ý cho bạn" />

        <div className="row">
          {/* Cột trái */}
          <div
            className="col-lg-5 d-flex align-items-center"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="shop">
              <div className="section-heading mb-3">
                <h2 style={{ fontSize: "2rem" }}>
                  📖 Sách hay nên đọc <em>trong tháng này</em>
                </h2>
              </div>
              <p style={{ fontSize: "1.1rem", color: "#555" }}>
                Khám phá những cuốn sách đang được cộng đồng yêu thích và đánh
                giá cao. Hãy dành thời gian cho bản thân với những trang sách ý
                nghĩa.
              </p>
              <div className="main-button mt-3">
                <Link to="/shop">Khám phá thêm</Link>
              </div>
            </div>
          </div>

          {/* Cột phải: Danh sách sách đề xuất */}
          <div className="col-lg-6 offset-lg-1">
            <div className="row">
              {suggestedBooks.map((book) => (
                <div
                  className="col-lg-12 mb-4"
                  key={book.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    marginTop: "10px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className="book-image"
                    style={{
                      width: "100px",
                      height: "130px",
                      marginRight: "20px",
                      backgroundColor: "#f1f1f1",
                      borderRadius: "10px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="book-info">
                    <h5 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>
                      {book.title}
                    </h5>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#444",
                        marginBottom: "6px",
                      }}
                    >
                      {book.description}
                    </p>
                    <Link
                      to={`/product/${book.id}`}
                      style={{
                        fontSize: "0.95rem",
                        color: "#ff6600",
                        fontWeight: "500",
                      }}
                    >
                      Xem chi tiết →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
