import React from "react";
import HeadingHomepage from "./HeadingHomepage";
const categories = [
  {
    name: "Tâm lý học",
    image:
      "https://hiu.vn/wp-content/uploads/2022/02/review-nganh-tam-ly-hoc-1024x768.jpg",
  },
  {
    name: "Văn học",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbjFNcOpUywHJurcal5YjUZYRvdCvVIlReA&s",
  },
  {
    name: "Kinh doanh",
    image:
      "https://thquangtien.pgdbadon.edu.vn/wp-content/uploads/sites/478/2020/04/93302071_818218348665553_6785495032813060096_n.jpg",
  },
  {
    name: "Phát triển bản thân",
    image:
      "https://truongdiwriter.com/wp-content/uploads/2021/09/book3-1024x1024.png.webp",
  },
  {
    name: "Kỹ năng sống",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjs_kYlR5ysgE5iAiNQ9s76mw_sWJ3OM0Izw&s",
  },
];

function Categories() {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <div className="section-heading">
            <br />
            <br />
            <HeadingHomepage title="Thể loại" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {categories.map((cat, index) => (
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={index}>
            <div
              className="item text-center"
              style={{
                height: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                transition: "0.3s",
                padding: "10px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="thumb mb-2">
                <a href="/shop">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      width: "100%",
                      height: "140px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </a>
              </div>
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
