import React from "react";

export default function FilterSidebar() {
  return (
    <>
      <div
        className="block-content"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          padding: "16px",
          paddingTop: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <div
          className="currently"
          style={{
            boxSizing: "border-box",
            margin: "0px",
            padding: "5px 10px 5px 0px",
            marginTop: "-30px",
          }}
        >
          <div
            className="block-subtitle"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              padding: "5px 0px",
              borderBottom: "1px solid rgb(242, 242, 242)",
              textTransform: "uppercase",
              fontFamily: "SegoeUISemibold",
              fontWeight: 700,
              display: "none",
            }}
          >
            <div
              className="m-subtitle-actions"
              style={{ boxSizing: "border-box", margin: "0px", padding: "0px" }}
            >
              <div
                className="m-expand-collapse"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                <div
                  className="btn-expand-collapse"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                  }}
                />
              </div>
            </div>
            <span
              style={{ boxSizing: "border-box", margin: "0px", padding: "0px" }}
            >
              Currently Shopping by:
            </span>
          </div>
        </div>
        <div
          className="block-subtitle m-filter-group"
          style={{
            boxSizing: "border-box",
            margin: "0px",
            padding: "5px 0px",
            borderBottom: "1px solid rgb(242, 242, 242)",
            textTransform: "uppercase",
            fontFamily: "SegoeUISemibold",
            fontWeight: 700,
            display: "none",
            position: "relative",
          }}
        />
        <dl
          id="narrow-by-list-0"
          className="narrow-by-list"
          style={{
            boxSizing: "border-box",
            margin: "0px",
            padding: "0px",
            marginTop: "0px",
            marginBottom: "20px",
            position: "relative",
            zoom: 1,
            left: "0px",
            top: "0px",
          }}
        >
          <dt
            className="odd"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              padding: "10px 0px",
              cursor: "pointer",
              textTransform: "uppercase",
              lineHeight: "100%",
              textAlign: "left",
              fontWeight: 600,
              marginBottom: "0px",
              fontSize: "13px",
              position: "relative",
              zoom: 1,
              left: "0px",
              top: "0px",
            }}
          >
            <h3
              style={{
                boxSizing: "border-box",
                padding: "0px",
                color: "inherit",
                lineHeight: 1.35,
                margin: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                fontFamily: "sans-serif",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              Nhóm sản phẩm
            </h3>
          </dt>
          <dd
            className="odd"
            style={{
              boxSizing: "border-box",
              lineHeight: 1.42857,
              margin: "0px",
              padding: "0px",
              borderBottom: "2px solid rgb(246, 246, 246)",
              marginLeft: "0px",
            }}
          >
            <ol
              id="parent-category"
              className="m-parent-category-list"
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                margin: "0px",
                padding: "0px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                  marginLeft: "0px",
                }}
              >
                <a
                  href="https://www.fahasa.com/all-category.html"
                  title="Tất Cả Nhóm Sản Phẩm"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Tất Cả Nhóm Sản Phẩm
                  </h3>
                </a>
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                  marginLeft: "10px",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc.html"
                  title="Sách tiếng Việt"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Sách tiếng Việt
                  </h3>
                </a>
              </li>
            </ol>
            <div
              id="current-category"
              className="m-current-category"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "0px",
                paddingBottom: "8px",
                fontWeight: "bold",
                fontSize: "14px",
                color: "rgb(247, 146, 31)",
                fontFamily: "sans-serif",
                marginLeft: "20px",
              }}
            >
              <a
                href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc.html"
                title="Văn học"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  background: "transparent",
                  textDecoration: "none",
                  transition: "300ms ease-in",
                  fontWeight: "bold",
                  color: "rgb(102, 102, 102)",
                }}
              >
                <h3
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    color: "inherit",
                    lineHeight: 1.35,
                    fontSize: "14px",
                    fontWeight: "normal",
                    margin: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Văn học
                </h3>
              </a>
            </div>
            <ol
              id="children-categories"
              className="m-child-category-list m-expandable-filter"
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                margin: "0px",
                padding: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                overflow: "hidden",
                paddingTop: "1px",
                marginLeft: "20px",
                height: "209px",
              }}
            >
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <span
                  className="m-selected-filter-item"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    color: "rgb(247, 148, 30)",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Tiểu thuyết
                  </h3>
                </span>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/truyen-ngan-tan-van.html"
                  title="Truyện ngắn - Tản Văn"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Truyện ngắn - Tản Văn
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/light-novel.html"
                  title="Light Novel"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Light Novel
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/truyen-trinh-tham-vien-tuong.html"
                  title="Truyện Trinh Thám - Kiếm Hiệp"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Truyện Trinh Thám - Kiếm Hiệp
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/tac-pham-kinh-dien.html"
                  title="Tác Phẩm Kinh Điển"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Tác Phẩm Kinh Điển
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/huyen-bi-gia-tuong-kinh-di.html"
                  title="Huyền Bí - Giả Tưởng - Kinh Dị"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Huyền Bí - Giả Tưởng - Kinh Dị
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/ngon-tinh.html"
                  title="Ngôn Tình"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Ngôn Tình
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/tho-ca-tuc-ngu-ca-dao-thanh-ngu.html"
                  title="Thơ ca, tục ngữ, ca dao, thành ngữ"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Thơ ca, tục ngữ, ca dao, thành ngữ
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/phong-su-ky-su-phe-binh-van-hoc.html"
                  title="Phóng Sự - Ký Sự - Phê Bình Văn Học"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Phóng Sự - Ký Sự - Phê Bình Văn Học
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/sach-to-mau-danh-cho-nguoi-lon.html"
                  title="Sách Tô Màu Dành Cho Người Lớn"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Sách Tô Màu Dành Cho Người Lớn
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/du-ky.html"
                  title="Du Ký"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Du Ký
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/tac-gia-tac-pham.html"
                  title="Tác giả - Tác Phẩm"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Tác giả - Tác Phẩm
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/hai-huoc-truyen-cuoi.html"
                  title="Hài Hước - Truyện Cười"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Hài Hước - Truyện Cười
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/sach-anh.html"
                  title="Sách Ảnh"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Sách Ảnh
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/12-cung-hoang-dao.html"
                  title="12 Cung Hoàng Đạo"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    12 Cung Hoàng Đạo
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/the-loai-khac.html"
                  title="Thể loại khác"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Thể loại khác
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/tuoi-teen.html"
                  title="Tuổi Teen"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Tuổi Teen
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/truyen-tranh.html"
                  title="Truyện Tranh"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Truyện Tranh
                  </h3>
                </a>{" "}
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  href="https://www.fahasa.com/sach-trong-nuoc/van-hoc-trong-nuoc/combo-van-hoc.html"
                  title="Combo Văn Học"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    background: "transparent",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                  }}
                >
                  <h3
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      color: "inherit",
                      lineHeight: 1.35,
                      fontSize: "14px",
                      fontWeight: "normal",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Combo Văn Học
                  </h3>
                </a>{" "}
              </li>
            </ol>
            <div
              id="m-more-less-left_category"
              className="m-more-less"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "0px",
                fontSize: "11px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                className="m-show-less-action"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  textDecoration: "none",
                  transition: "300ms ease-in",
                  color: "rgb(247, 148, 30)",
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  cursor: "pointer",
                  userSelect: "none",
                  paddingRight: "20px",
                  background:
                    'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_rutgon_cam.png") right center no-repeat',
                  display: "none",
                }}
              >
                Rút Gọn
              </a>
              <a
                className="m-show-more-action"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  textDecoration: "none",
                  transition: "300ms ease-in",
                  color: "rgb(247, 148, 30)",
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  cursor: "pointer",
                  userSelect: "none",
                  paddingRight: "20px",
                  background:
                    'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_morong.png") right center no-repeat',
                  display: "inline",
                }}
              >
                Xem Thêm
              </a>
            </div>
          </dd>
          <dt
            className="even"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              padding: "10px 0px",
              cursor: "pointer",
              textTransform: "uppercase",
              lineHeight: "100%",
              textAlign: "left",
              fontWeight: 600,
              marginBottom: "0px",
              fontSize: "13px",
              position: "relative",
              zoom: 1,
              left: "0px",
              top: "0px",
            }}
          >
            Giá
          </dt>
          <dd
            className="even"
            style={{
              boxSizing: "border-box",
              lineHeight: 1.42857,
              margin: "0px",
              padding: "0px",
              borderBottom: "2px solid rgb(246, 246, 246)",
              marginLeft: "0px",
            }}
          >
            <ol
              className="m-filter-css-checkboxes"
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                margin: "0px",
                padding: "0px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  id="price-m-0"
                  className="m-checkbox-unchecked"
                  title="0đ - 150,000đ"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                    textDecoration: "none",
                    paddingLeft: "20px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  0đ - 150,000đ
                </a>
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  id="price-m-1"
                  className="m-checkbox-unchecked"
                  title="150,000đ - 300,000đ"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                    textDecoration: "none",
                    paddingLeft: "20px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  150,000đ - 300,000đ
                </a>
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  id="price-m-2"
                  className="m-checkbox-unchecked"
                  title="300,000đ - 500,000đ"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                    textDecoration: "none",
                    paddingLeft: "20px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  300,000đ - 500,000đ
                </a>
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  id="price-m-3"
                  className="m-checkbox-unchecked"
                  title="500,000đ - 700,000đ"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                    textDecoration: "none",
                    paddingLeft: "20px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  500,000đ - 700,000đ
                </a>
              </li>
              <li
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  listStyle: "none",
                  margin: "0px 0px 7px 10px",
                  color: "rgb(51, 51, 51)",
                  lineHeight: "22px",
                  textAlign: "left",
                  width: "100%",
                  position: "relative",
                }}
              >
                <a
                  id="price-m-4"
                  className="m-checkbox-unchecked"
                  title="700,000đ - trở lên"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    transition: "300ms ease-in",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    padding: "0px",
                    color: "rgb(102, 102, 102)",
                    display: "inline",
                    zoom: 1,
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                    textDecoration: "none",
                    paddingLeft: "20px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  700,000đ - trở lên
                </a>
              </li>
            </ol>
          </dd>
          <div
            id="menu-attributes"
            style={{ boxSizing: "border-box", margin: "0px", padding: "0px" }}
          >
            <dt
              className="odd"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "10px 0px",
                cursor: "pointer",
                textTransform: "uppercase",
                lineHeight: "100%",
                textAlign: "left",
                fontWeight: 600,
                marginBottom: "0px",
                fontSize: "13px",
                position: "relative",
                zoom: 1,
                left: "0px",
                top: "0px",
              }}
            >
              Nhà Cung Cấp
            </dt>
            <dd
              className="odd"
              style={{
                boxSizing: "border-box",
                lineHeight: 1.42857,
                margin: "0px",
                padding: "0px",
                borderBottom: "2px solid rgb(246, 246, 246)",
                marginLeft: "0px",
              }}
            >
              <ol
                className="m-filter-css-checkboxes m-expandable-filter"
                style={{
                  boxSizing: "border-box",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  overflow: "hidden",
                  paddingTop: "1px",
                  height: "233px",
                }}
              >
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list897890"
                    className="m-checkbox-unchecked"
                    title="Nhã Nam"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Nhã Nam
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1229126"
                    className="m-checkbox-unchecked"
                    title="NXB Trẻ"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    NXB Trẻ
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list317859"
                    className="m-checkbox-unchecked"
                    title="Đinh Tị"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Đinh Tị
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228853"
                    className="m-checkbox-unchecked"
                    title="Huy Hoang Bookstore"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Huy Hoang Bookstore
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list448556"
                    className="m-checkbox-unchecked"
                    title="Nhà Xuất Bản Kim Đồng"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Nhà Xuất Bản Kim Đồng
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1229124"
                    className="m-checkbox-unchecked"
                    title="NXB Tổng Hợp TPHCM"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    NXB Tổng Hợp TPHCM
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1229177"
                    className="m-checkbox-unchecked"
                    title="Phụ Nữ"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Phụ Nữ
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1227852"
                    className="m-checkbox-unchecked"
                    title="Bách Việt"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Bách Việt
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1227839"
                    className="m-checkbox-unchecked"
                    title="Alpha Books"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Alpha Books
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1229353"
                    className="m-checkbox-unchecked"
                    title="Đông A"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Đông A
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list452145"
                    className="m-checkbox-unchecked"
                    title="PHANBOOK"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    PHANBOOK
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1229069"
                    className="m-checkbox-unchecked"
                    title="Nhà Sách Minh Thắng"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Nhà Sách Minh Thắng
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228618"
                    className="m-checkbox-unchecked"
                    title="Cty Văn Hóa & Truyền Thông Trí Việt."
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Văn Hóa & Truyền Thông Trí Việt.
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list317856"
                    className="m-checkbox-unchecked"
                    title="Minh Long"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Minh Long
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list647135"
                    className="m-checkbox-unchecked"
                    title="Tân Việt"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Tân Việt
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1227922"
                    className="m-checkbox-unchecked"
                    title="Chibooks"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Chibooks
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1227833"
                    className="m-checkbox-unchecked"
                    title="1980 Books"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    1980 Books
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1227849"
                    className="m-checkbox-unchecked"
                    title="AZ Việt Nam"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    AZ Việt Nam
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228062"
                    className="m-checkbox-unchecked"
                    title="CÔNG TY TNHH PHÁT HÀNH S BOOKS"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    CÔNG TY TNHH PHÁT HÀNH S BOOKS
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228642"
                    className="m-checkbox-unchecked"
                    title="Cty Văn Hóa Văn Lang"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Văn Hóa Văn Lang
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list647138"
                    className="m-checkbox-unchecked"
                    title="First News"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    First News
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228067"
                    className="m-checkbox-unchecked"
                    title="Công ty TNHH Quốc Tế Mai Hà"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Công ty TNHH Quốc Tế Mai Hà
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228070"
                    className="m-checkbox-unchecked"
                    title="CÔNG TY TNHH SÁCH & TRUYỀN THÔNG VIỆT NAM"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    CÔNG TY TNHH SÁCH & TRUYỀN THÔNG VIỆT NAM
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228615"
                    className="m-checkbox-unchecked"
                    title="Cty Văn Hóa & Truyền Thông Liên Việt"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Văn Hóa & Truyền Thông Liên Việt
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228792"
                    className="m-checkbox-unchecked"
                    title="Hải Đăng"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Hải Đăng
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1229213"
                    className="m-checkbox-unchecked"
                    title="Thái Hà"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Thái Hà
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1229327"
                    className="m-checkbox-unchecked"
                    title="ZGROUP"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    ZGROUP
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228628"
                    className="m-checkbox-unchecked"
                    title="Cty Văn Hóa Minh Lâm"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Văn Hóa Minh Lâm
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228630"
                    className="m-checkbox-unchecked"
                    title="Cty Văn Hóa Nhân Văn"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Văn Hóa Nhân Văn
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228442"
                    className="m-checkbox-unchecked"
                    title="Cty Sách Dân Trí"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Sách Dân Trí
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228445"
                    className="m-checkbox-unchecked"
                    title="Cty Sách Giáo Dục Bắc Hà"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Sách Giáo Dục Bắc Hà
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228464"
                    className="m-checkbox-unchecked"
                    title="Cty Sách Tao Đàn"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Sách Tao Đàn
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1229193"
                    className="m-checkbox-unchecked"
                    title="Saigon Books"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Saigon Books
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228195"
                    className="m-checkbox-unchecked"
                    title="Cty Bán Lẻ Phương Nam"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Bán Lẻ Phương Nam
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228273"
                    className="m-checkbox-unchecked"
                    title="Cty Giáo Dục Sputnik"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Giáo Dục Sputnik
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228394"
                    className="m-checkbox-unchecked"
                    title="Cty PHS TP.HCM- Fahasa"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty PHS TP.HCM- Fahasa
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228626"
                    className="m-checkbox-unchecked"
                    title="Cty Văn Hóa Khang Việt"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Văn Hóa Khang Việt
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228651"
                    className="m-checkbox-unchecked"
                    title="Cty Văn Hóa Đông Tây"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Văn Hóa Đông Tây
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228872"
                    className="m-checkbox-unchecked"
                    title="IPM"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    IPM
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1229136"
                    className="m-checkbox-unchecked"
                    title="Panda Books"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Panda Books
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1227948"
                    className="m-checkbox-unchecked"
                    title="CÔNG TY CỔ PHẦN SÁCH TRÍ THỨC VIỆT"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    CÔNG TY CỔ PHẦN SÁCH TRÍ THỨC VIỆT
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1227969"
                    className="m-checkbox-unchecked"
                    title="Công Ty Cổ Phần Time Books"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Công Ty Cổ Phần Time Books
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1230176"
                    className="m-checkbox-unchecked"
                    title="CÔNG TY CP SÁCH VÀ TRUYỀN THÔNG SAN HÔ"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    CÔNG TY CP SÁCH VÀ TRUYỀN THÔNG SAN HÔ
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228088"
                    className="m-checkbox-unchecked"
                    title="Công ty TNHH Tazano"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Công ty TNHH Tazano
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228124"
                    className="m-checkbox-unchecked"
                    title="CÔNG TY TNHH VĂN HÓA & TRUYỀN THÔNG DU BÚT"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    CÔNG TY TNHH VĂN HÓA & TRUYỀN THÔNG DU BÚT
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228178"
                    className="m-checkbox-unchecked"
                    title="Cty 7P"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty 7P
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228216"
                    className="m-checkbox-unchecked"
                    title="Cty Comicola"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Comicola
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228220"
                    className="m-checkbox-unchecked"
                    title="Cty Công Nghệ Chương & Đức"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty Công Nghệ Chương & Đức
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228370"
                    className="m-checkbox-unchecked"
                    title="Cty NXB Thế Giới"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty NXB Thế Giới
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-supplier_list1228375"
                    className="m-checkbox-unchecked"
                    title="Cty NXB Văn Học"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Cty NXB Văn Học
                  </a>
                </li>
              </ol>
              <div
                id="m-more-less-left_supplier_list"
                className="m-more-less"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  fontSize: "11px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  className="m-show-less-action"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    color: "rgb(247, 148, 30)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    cursor: "pointer",
                    userSelect: "none",
                    paddingRight: "20px",
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_rutgon_cam.png") right center no-repeat',
                    display: "none",
                  }}
                >
                  Rút Gọn
                </a>
                <a
                  className="m-show-more-action"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    color: "rgb(247, 148, 30)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    cursor: "pointer",
                    userSelect: "none",
                    paddingRight: "20px",
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_morong.png") right center no-repeat',
                    display: "inline",
                  }}
                >
                  Xem Thêm
                </a>
              </div>
            </dd>
            <dt
              className="odd"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "10px 0px",
                cursor: "pointer",
                textTransform: "uppercase",
                lineHeight: "100%",
                textAlign: "left",
                fontWeight: 600,
                marginBottom: "0px",
                fontSize: "13px",
                position: "relative",
                zoom: 1,
                left: "0px",
                top: "0px",
              }}
            >
              Độ Tuổi
            </dt>
            <dd
              className="odd"
              style={{
                boxSizing: "border-box",
                lineHeight: 1.42857,
                margin: "0px",
                padding: "0px",
                borderBottom: "2px solid rgb(246, 246, 246)",
                marginLeft: "0px",
              }}
            >
              <ol
                className="m-filter-css-checkboxes"
                style={{
                  boxSizing: "border-box",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  height: "58px",
                }}
              >
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-age730971"
                    className="m-checkbox-unchecked"
                    title="11 - 15"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    11 - 15
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-age749509"
                    className="m-checkbox-unchecked"
                    title="15 - 18"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    15 - 18
                  </a>
                </li>
              </ol>
              <div
                id="m-more-less-left_age"
                className="m-more-less"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  fontSize: "11px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "none",
                }}
              >
                <a
                  className="m-show-less-action"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    color: "rgb(247, 148, 30)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    cursor: "pointer",
                    userSelect: "none",
                    paddingRight: "20px",
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_rutgon_cam.png") right center no-repeat',
                    display: "none",
                  }}
                >
                  Rút Gọn
                </a>
                <a
                  className="m-show-more-action"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    color: "rgb(247, 148, 30)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    cursor: "pointer",
                    userSelect: "none",
                    paddingRight: "20px",
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_morong.png") right center no-repeat',
                    display: "inline",
                  }}
                >
                  Xem Thêm
                </a>
              </div>
            </dd>
            <dt
              className="odd"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "10px 0px",
                cursor: "pointer",
                textTransform: "uppercase",
                lineHeight: "100%",
                textAlign: "left",
                fontWeight: 600,
                marginBottom: "0px",
                fontSize: "13px",
                position: "relative",
                zoom: 1,
                left: "0px",
                top: "0px",
              }}
            >
              Ngôn Ngữ
            </dt>
            <dd
              className="odd"
              style={{
                boxSizing: "border-box",
                lineHeight: 1.42857,
                margin: "0px",
                padding: "0px",
                borderBottom: "2px solid rgb(246, 246, 246)",
                marginLeft: "0px",
              }}
            >
              <ol
                className="m-filter-css-checkboxes"
                style={{
                  boxSizing: "border-box",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  height: "58px",
                }}
              >
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-languages449750"
                    className="m-checkbox-unchecked"
                    title="Tiếng Việt"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Tiếng Việt
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-languages449751"
                    className="m-checkbox-unchecked"
                    title="Tiếng Anh"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Tiếng Anh
                  </a>
                </li>
              </ol>
              <div
                id="m-more-less-left_languages"
                className="m-more-less"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  fontSize: "11px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "none",
                }}
              >
                <a
                  className="m-show-less-action"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    color: "rgb(247, 148, 30)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    cursor: "pointer",
                    userSelect: "none",
                    paddingRight: "20px",
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_rutgon_cam.png") right center no-repeat',
                    display: "none",
                  }}
                >
                  Rút Gọn
                </a>
                <a
                  className="m-show-more-action"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    color: "rgb(247, 148, 30)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    cursor: "pointer",
                    userSelect: "none",
                    paddingRight: "20px",
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_morong.png") right center no-repeat',
                    display: "inline",
                  }}
                >
                  Xem Thêm
                </a>
              </div>
            </dd>
            <dt
              className="odd"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                padding: "10px 0px",
                cursor: "pointer",
                textTransform: "uppercase",
                lineHeight: "100%",
                textAlign: "left",
                fontWeight: 600,
                marginBottom: "0px",
                fontSize: "13px",
                position: "relative",
                zoom: 1,
                left: "0px",
                top: "0px",
              }}
            >
              Hình thức
            </dt>
            <dd
              className="odd"
              style={{
                boxSizing: "border-box",
                lineHeight: 1.42857,
                margin: "0px",
                padding: "0px",
                borderBottom: "2px solid rgb(246, 246, 246)",
                marginLeft: "0px",
              }}
            >
              <ol
                className="m-filter-css-checkboxes"
                style={{
                  boxSizing: "border-box",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  height: "58px",
                }}
              >
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-book_layout9"
                    className="m-checkbox-unchecked"
                    title="Bìa Mềm"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Bìa Mềm
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    padding: "0px",
                    listStyle: "none",
                    margin: "0px 0px 7px 10px",
                    color: "rgb(51, 51, 51)",
                    lineHeight: "22px",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <a
                    id="m-left-attr-book_layout126"
                    className="m-checkbox-unchecked"
                    title="Bìa Cứng"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      transition: "300ms ease-in",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      padding: "0px",
                      color: "rgb(102, 102, 102)",
                      display: "inline",
                      zoom: 1,
                      background:
                        'url("https://cdn0.fahasa.com/skin/frontend/base/default/images/manapro_filtercheckboxes/ico_uncheck.png") 0px 50% no-repeat transparent',
                      textDecoration: "none",
                      paddingLeft: "20px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Bìa Cứng
                  </a>
                </li>
              </ol>
              <div
                id="m-more-less-left_book_layout"
                className="m-more-less"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  padding: "0px",
                  fontSize: "11px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "none",
                }}
              >
                <a
                  className="m-show-less-action"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    color: "rgb(247, 148, 30)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    cursor: "pointer",
                    userSelect: "none",
                    paddingRight: "20px",
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_rutgon_cam.png") right center no-repeat',
                    display: "none",
                  }}
                >
                  Rút Gọn
                </a>
                <a
                  className="m-show-more-action"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    textDecoration: "none",
                    transition: "300ms ease-in",
                    color: "rgb(247, 148, 30)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    cursor: "pointer",
                    userSelect: "none",
                    paddingRight: "20px",
                    background:
                      'url("https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_morong.png") right center no-repeat',
                    display: "inline",
                  }}
                >
                  Xem Thêm
                </a>
              </div>
            </dd>
          </div>
        </dl>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  text-size-adjust: 100%;
  font-size: 62.5%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 0px;
  padding: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
}

body {
  box-sizing: border-box;
  line-height: 1.42857;
  text-align: left;
  margin: 0px;
  padding: 0px;
  color: rgb(51, 51, 51);
  font-size: 13px;
  font-weight: 400;
  overflow-x: hidden;
  background: rgb(240, 240, 240);
  background-color: rgb(240, 240, 240);
  font-family: sans-serif;
}
`,
        }}
      />
    </>
  );
}
