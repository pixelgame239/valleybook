import React from "react";
import HeadingHomepage from "./HeadingHomepage";

const categories = [
  // {
  //   name: "Lịch sử",
  //   image:
  //     "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/maus-chuyen-mot-ke-song-sot-01.jpg?v=1731407359860",
  // },
  {
    name: "Kinh dị",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/carrie-vu-hoi-dam-mau-01.jpg?v=1726193131707",
  },
  {
    name: "Kinh điển",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/giet-con-chim-nhai-new3.jpg?v=1716798254130",
  },
  {
    name: "Phi hư cấu",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/homodeusluocsutuonglai01.jpg?v=1705552535243",
  },
  {
    name: "Trinh thám",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/363/455/products/bachdahanh-1c601895-75dd-4036-b20b-401dd76e13f2.jpg?v=1743154598083",
  },
];

function Categories() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="section-heading" style={{ marginTop: "50px" }}>
            <HeadingHomepage title="Thể loại" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {categories.map((cat, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div
              className="item text-center"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                transition: "0.3s",
                padding: "20px", // Tăng padding để item lớn hơn
                height: "440px", // Tăng chiều cao container của mỗi item
                width: "90%", // Giữ cho chiều rộng là 100% của cột
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <a href="/shop">
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "360px", // Có thể điều chỉnh lại cho ảnh lớn hơn
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginBottom: "10px",
                  }}
                />
              </a>
              <h4 style={{ fontSize: "1rem", fontWeight: "600" }}>
                {cat.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
