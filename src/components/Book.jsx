import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="container"
        style={{
          boxSizing: "border-box",
          width: "100%",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: "1290px",
          padding: "0px 10px",
          paddingRight: "10px",
          paddingLeft: "10px",
        }}
      >
        <div
          className="title-border"
          style={{
            boxSizing: "border-box",
            borderTop: "solid 2px #228b22",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <h2
            className="title-module"
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              fontWeight: 500,
              lineHeight: 1.2,
              fontFamily: "'civil-bold', sans-serif",
              fontSize: "28px",
              color: "#228b22",
              marginBottom: "0px",
              paddingTop: "10px",
            }}
          >
            <a
              href="https://nhanam.vn/sach-moi-xuat-ban"
              title="Sách mới"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                backgroundColor: "transparent",
                color: "#228b22",
              }}
            >
              Sách mới
            </a>
          </h2>
          <a
            className="link-more"
            href="https://nhanam.vn/sach-moi-xuat-ban"
            title="xem thêm"
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              backgroundColor: "transparent",
              fontFamily: "'civil-medium', sans-serif",
              fontSize: "15px",
              color: "#228b22",
              display: "flex",
              alignItems: "center",
              height: "40px",
            }}
          >
            Xem thêm{" "}
            <svg
              className="icon"
              style={{
                boxSizing: "border-box",
                overflow: "hidden",
                width: "23px",
                height: "23px",
                marginLeft: "10px",
              }}
            >
              {" "}
              <use
                xlinkHref="#arrow-circle"
                style={{ boxSizing: "border-box" }}
              />{" "}
            </svg>
          </a>
        </div>
        <div
          className="slide-book-new-wrap relative swiper-button-main"
          style={{
            boxSizing: "border-box",
            padding: "0px",
            position: "relative",
          }}
        >
          <div
            className="swiper-container slide-book-new swiper-container-initialized swiper-container-horizontal"
            style={{
              boxSizing: "border-box",
              overflow: "hidden",
              listStyle: "none",
              padding: "0px",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
              zIndex: 1,
              cursor: "grab",
            }}
          >
            <div
              id="swiper-wrapper-4a4664848a121e7e"
              className="swiper-wrapper"
              aria-live="polite"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                zIndex: 1,
                display: "flex",
                transitionProperty: "transform",
                boxSizing: "content-box",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                className="swiper-slide swiper-slide-active"
                aria-label="1 / 8"
                role="group"
                style={{
                  boxSizing: "border-box",
                  flexShrink: 0,
                  height: "100%",
                  position: "relative",
                  transitionProperty: "transform",
                  width: "230px",
                  marginRight: "30px",
                }}
              >
                <div
                  className="item_product_main"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    background: "rgb(255, 255, 255)",
                    transition: "400ms",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <form
                    className="variants product-action wishItem"
                    action="/cart/add"
                    encType="multipart/form-data"
                    method="post"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <div
                      className="thumb"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <a
                        className="image_thumb"
                        href="https://nhanam.vn/nam-thang-dang-dang-chang-co-ngay-nao-thich-hop-di-lam-2"
                        title="NĂM THÁNG ĐẰNG ĐẴNG CHẲNG CÓ NGÀY NÀO THÍCH HỢP ĐI LÀM 2"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          color: "#333333",
                          overflow: "hidden",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 0,
                          height: "245px",
                        }}
                      >
                        <img
                          className="lazyload img-responsive center-block loaded"
                          height={245}
                          width={162}
                          alt="NĂM THÁNG ĐẰNG ĐẴNG CHẲNG CÓ NGÀY NÀO THÍCH HỢP ĐI LÀM 2"
                          src="https://bizweb.dktcdn.net/100/363/455/products/nam-thang-dang-dang-chang-co-ngay-nao-thich-hop-di-lam-tap2-convert-01.jpg?v=1742791265337"
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            background: "transparent",
                            inset: "0px",
                            margin: "auto",
                            transition: "0.5s",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            position: "absolute",
                            minHeight: "unset",
                            width: "auto",
                            height: "unset",
                          }}
                        />
                      </a>
                      <div
                        className="action-cart"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 10px",
                          transition: "400ms",
                          position: "absolute",
                          bottom: "-60px",
                          left: "0px",
                          right: "0px",
                          visibility: "hidden",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          className="btn btn-lg btn-gray add_to_cart btn_buy buy-normal"
                          type="button"
                          title="Thêm vào giỏ"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            whiteSpace: "nowrap",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            fontWeight: 400,
                            verticalAlign: "middle",
                            userSelect: "none",
                            fontSize: "1rem",
                            appearance: "button",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            padding: "0px",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                            cursor: "pointer",
                            background: "rgb(245, 245, 245)",
                            width: "48px",
                          }}
                        >
                          <svg
                            className="icon"
                            style={{
                              boxSizing: "border-box",
                              overflow: "hidden",
                              width: "18px",
                              height: "22px",
                              marginTop: "3px",
                              fill: "#228b22",
                            }}
                          >
                            {" "}
                            <use
                              xlinkHref="#addcarticon"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ boxSizing: "border-box" }}
                            />{" "}
                          </svg>
                        </button>
                        <input
                          name="variantId"
                          type="hidden"
                          defaultValue="140614933"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            overflow: "visible",
                            maxWidth: "100%",
                            borderRadius: "4px",
                            padding: "0px 20px",
                            background: "rgb(255, 255, 255)",
                            borderColor: "rgb(235, 235, 235)",
                            height: "40px",
                            lineHeight: "40px",
                            marginBottom: "10px",
                            width: "100%",
                            cssFloat: "left",
                            fontSize: "14px",
                            color: "rgb(158, 158, 158)",
                            boxShadow: "none",
                          }}
                        />
                        <button
                          className="btn-buy btn-left btn-views btn-buy-now-grid"
                          title="Mua ngay"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            cursor: "pointer",
                            fontSize: "1em",
                            appearance: "none",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            background: "#228b22",
                            padding: "0px",
                            width: "calc(100% - 50px)",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                          }}
                        >
                          {"Mua ngay"}
                        </button>
                      </div>
                    </div>
                    <div
                      className="info-product"
                      style={{ boxSizing: "border-box", padding: "0px 10px" }}
                    >
                      <h3
                        className="product-name"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          textDecoration: "none",
                          padding: "10px 0px 5px",
                          margin: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          color: "#333333",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          textAlign: "center",
                          maxHeight: "50px",
                        }}
                      >
                        <a
                          href="https://nhanam.vn/nam-thang-dang-dang-chang-co-ngay-nao-thich-hop-di-lam-2"
                          title="NĂM THÁNG ĐẰNG ĐẴNG CHẲNG CÓ NGÀY NÀO THÍCH HỢP ĐI LÀM 2"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            color: "#333333",
                          }}
                        >
                          NĂM THÁNG ĐẰNG ĐẴNG CHẲNG CÓ NGÀY NÀO THÍCH HỢP ĐI LÀM
                          2
                        </a>
                      </h3>
                      <div
                        className="price-box"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          color: "#228b22",
                          lineHeight: "24px",
                          display: "block",
                          fontSize: "18px",
                          marginRight: "0px",
                          marginBottom: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="price"
                          style={{
                            boxSizing: "border-box",
                            marginRight: "15px",
                          }}
                        >
                          118.150₫
                        </span>
                        <span
                          className="compare-price"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "line-through",
                            fontSize: "14px",
                            color: "rgb(119, 119, 119)",
                            lineHeight: "24px",
                            fontFamily: "'civil-regular', sans-serif",
                          }}
                        >
                          139.000₫
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                aria-label="2 / 8"
                role="group"
                style={{
                  boxSizing: "border-box",
                  flexShrink: 0,
                  height: "100%",
                  position: "relative",
                  transitionProperty: "transform",
                  width: "230px",
                  marginRight: "30px",
                }}
              >
                <div
                  className="item_product_main"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    background: "rgb(255, 255, 255)",
                    transition: "400ms",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <form
                    className="variants product-action wishItem"
                    action="/cart/add"
                    encType="multipart/form-data"
                    method="post"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <div
                      className="thumb"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <a
                        className="image_thumb"
                        href="https://nhanam.vn/doi-mat-cua-mona"
                        title="ĐÔI MẮT CỦA MONA"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          color: "#333333",
                          overflow: "hidden",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 0,
                          height: "245px",
                        }}
                      >
                        <img
                          className="lazyload img-responsive center-block loaded"
                          height={245}
                          width={150}
                          alt="ĐÔI MẮT CỦA MONA"
                          src="https://bizweb.dktcdn.net/100/363/455/products/doi-mat-cua-mona-02.jpg?v=1741265722060"
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            background: "transparent",
                            inset: "0px",
                            margin: "auto",
                            transition: "0.5s",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            position: "absolute",
                            minHeight: "unset",
                            width: "auto",
                            height: "unset",
                          }}
                        />
                      </a>
                      <div
                        className="action-cart"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 10px",
                          transition: "400ms",
                          position: "absolute",
                          bottom: "-60px",
                          left: "0px",
                          right: "0px",
                          visibility: "hidden",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          className="btn btn-lg btn-gray add_to_cart btn_buy buy-normal"
                          type="button"
                          title="Thêm vào giỏ"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            whiteSpace: "nowrap",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            fontWeight: 400,
                            verticalAlign: "middle",
                            userSelect: "none",
                            fontSize: "1rem",
                            appearance: "button",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            padding: "0px",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                            cursor: "pointer",
                            background: "rgb(245, 245, 245)",
                            width: "48px",
                          }}
                        >
                          <svg
                            className="icon"
                            style={{
                              boxSizing: "border-box",
                              overflow: "hidden",
                              width: "18px",
                              height: "22px",
                              marginTop: "3px",
                              fill: "#228b22",
                            }}
                          >
                            {" "}
                            <use
                              xlinkHref="#addcarticon"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ boxSizing: "border-box" }}
                            />{" "}
                          </svg>
                        </button>
                        <input
                          name="variantId"
                          type="hidden"
                          defaultValue="138360742"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            overflow: "visible",
                            maxWidth: "100%",
                            borderRadius: "4px",
                            padding: "0px 20px",
                            background: "rgb(255, 255, 255)",
                            borderColor: "rgb(235, 235, 235)",
                            height: "40px",
                            lineHeight: "40px",
                            marginBottom: "10px",
                            width: "100%",
                            cssFloat: "left",
                            fontSize: "14px",
                            color: "rgb(158, 158, 158)",
                            boxShadow: "none",
                          }}
                        />
                        <button
                          className="btn-buy btn-left btn-views btn-buy-now-grid"
                          title="Mua ngay"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            cursor: "pointer",
                            fontSize: "1em",
                            appearance: "none",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            background: "#228b22",
                            padding: "0px",
                            width: "calc(100% - 50px)",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                          }}
                        >
                          {"Mua ngay"}
                        </button>
                      </div>
                    </div>
                    <div
                      className="info-product"
                      style={{ boxSizing: "border-box", padding: "0px 10px" }}
                    >
                      <h3
                        className="product-name"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          textDecoration: "none",
                          padding: "10px 0px 5px",
                          margin: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          color: "#333333",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          textAlign: "center",
                          maxHeight: "50px",
                        }}
                      >
                        <a
                          href="https://nhanam.vn/doi-mat-cua-mona"
                          title="ĐÔI MẮT CỦA MONA"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            color: "#333333",
                          }}
                        >
                          ĐÔI MẮT CỦA MONA
                        </a>
                      </h3>
                      <div
                        className="price-box"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          color: "#228b22",
                          lineHeight: "24px",
                          display: "block",
                          fontSize: "18px",
                          marginRight: "0px",
                          marginBottom: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="price"
                          style={{
                            boxSizing: "border-box",
                            marginRight: "15px",
                          }}
                        >
                          287.300₫
                        </span>
                        <span
                          className="compare-price"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "line-through",
                            fontSize: "14px",
                            color: "rgb(119, 119, 119)",
                            lineHeight: "24px",
                            fontFamily: "'civil-regular', sans-serif",
                          }}
                        >
                          338.000₫
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="swiper-slide"
                aria-label="3 / 8"
                role="group"
                style={{
                  boxSizing: "border-box",
                  flexShrink: 0,
                  height: "100%",
                  position: "relative",
                  transitionProperty: "transform",
                  width: "230px",
                  marginRight: "30px",
                }}
              >
                <div
                  className="item_product_main"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    background: "rgb(255, 255, 255)",
                    transition: "400ms",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <form
                    className="variants product-action wishItem"
                    action="/cart/add"
                    encType="multipart/form-data"
                    method="post"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <div
                      className="thumb"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <a
                        className="image_thumb"
                        href="https://nhanam.vn/rut-ngan-tuan-lam-viec"
                        title="RÚT NGẮN TUẦN LÀM VIỆC"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          color: "#333333",
                          overflow: "hidden",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 0,
                          height: "245px",
                        }}
                      >
                        <img
                          className="lazyload img-responsive center-block loaded"
                          height={245}
                          width={155}
                          alt="RÚT NGẮN TUẦN LÀM VIỆC"
                          src="https://bizweb.dktcdn.net/100/363/455/products/rut-ngan-tuan-lam-viec-01.jpg?v=1741265571533"
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            background: "transparent",
                            inset: "0px",
                            margin: "auto",
                            transition: "0.5s",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            position: "absolute",
                            minHeight: "unset",
                            width: "auto",
                            height: "unset",
                          }}
                        />
                      </a>
                      <div
                        className="action-cart"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 10px",
                          transition: "400ms",
                          position: "absolute",
                          bottom: "-60px",
                          left: "0px",
                          right: "0px",
                          visibility: "hidden",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          className="btn btn-lg btn-gray add_to_cart btn_buy buy-normal"
                          type="button"
                          title="Thêm vào giỏ"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            whiteSpace: "nowrap",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            fontWeight: 400,
                            verticalAlign: "middle",
                            userSelect: "none",
                            fontSize: "1rem",
                            appearance: "button",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            padding: "0px",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                            cursor: "pointer",
                            background: "rgb(245, 245, 245)",
                            width: "48px",
                          }}
                        >
                          <svg
                            className="icon"
                            style={{
                              boxSizing: "border-box",
                              overflow: "hidden",
                              width: "18px",
                              height: "22px",
                              marginTop: "3px",
                              fill: "#228b22",
                            }}
                          >
                            {" "}
                            <use
                              xlinkHref="#addcarticon"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ boxSizing: "border-box" }}
                            />{" "}
                          </svg>
                        </button>
                        <input
                          name="variantId"
                          type="hidden"
                          defaultValue="138360741"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            overflow: "visible",
                            maxWidth: "100%",
                            borderRadius: "4px",
                            padding: "0px 20px",
                            background: "rgb(255, 255, 255)",
                            borderColor: "rgb(235, 235, 235)",
                            height: "40px",
                            lineHeight: "40px",
                            marginBottom: "10px",
                            width: "100%",
                            cssFloat: "left",
                            fontSize: "14px",
                            color: "rgb(158, 158, 158)",
                            boxShadow: "none",
                          }}
                        />
                        <button
                          className="btn-buy btn-left btn-views btn-buy-now-grid"
                          title="Mua ngay"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            cursor: "pointer",
                            fontSize: "1em",
                            appearance: "none",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            background: "#228b22",
                            padding: "0px",
                            width: "calc(100% - 50px)",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                          }}
                        >
                          {"Mua ngay"}
                        </button>
                      </div>
                    </div>
                    <div
                      className="info-product"
                      style={{ boxSizing: "border-box", padding: "0px 10px" }}
                    >
                      <h3
                        className="product-name"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          textDecoration: "none",
                          padding: "10px 0px 5px",
                          margin: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          color: "#333333",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          textAlign: "center",
                          maxHeight: "50px",
                        }}
                      >
                        <a
                          href="https://nhanam.vn/rut-ngan-tuan-lam-viec"
                          title="RÚT NGẮN TUẦN LÀM VIỆC"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            color: "#333333",
                          }}
                        >
                          RÚT NGẮN TUẦN LÀM VIỆC
                        </a>
                      </h3>
                      <div
                        className="price-box"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          color: "#228b22",
                          lineHeight: "24px",
                          display: "block",
                          fontSize: "18px",
                          marginRight: "0px",
                          marginBottom: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="price"
                          style={{
                            boxSizing: "border-box",
                            marginRight: "15px",
                          }}
                        >
                          158.100₫
                        </span>
                        <span
                          className="compare-price"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "line-through",
                            fontSize: "14px",
                            color: "rgb(119, 119, 119)",
                            lineHeight: "24px",
                            fontFamily: "'civil-regular', sans-serif",
                          }}
                        >
                          186.000₫
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="swiper-slide"
                aria-label="4 / 8"
                role="group"
                style={{
                  boxSizing: "border-box",
                  flexShrink: 0,
                  height: "100%",
                  position: "relative",
                  transitionProperty: "transform",
                  width: "230px",
                  marginRight: "30px",
                }}
              >
                <div
                  className="item_product_main"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    background: "rgb(255, 255, 255)",
                    transition: "400ms",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <form
                    className="variants product-action wishItem"
                    action="/cart/add"
                    encType="multipart/form-data"
                    method="post"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <div
                      className="thumb"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <a
                        className="image_thumb"
                        href="https://nhanam.vn/hieu-sach-tren-dao"
                        title="HIỆU SÁCH TRÊN ĐẢO"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          color: "#333333",
                          overflow: "hidden",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 0,
                          height: "245px",
                        }}
                      >
                        <img
                          className="lazyload img-responsive center-block loaded"
                          height={245}
                          width={147}
                          alt="HIỆU SÁCH TRÊN ĐẢO"
                          src="https://bizweb.dktcdn.net/100/363/455/products/hieu-sach-tren-dao-01.jpg?v=1741265498417"
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            background: "transparent",
                            inset: "0px",
                            margin: "auto",
                            transition: "0.5s",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            position: "absolute",
                            minHeight: "unset",
                            width: "auto",
                            height: "unset",
                          }}
                        />
                      </a>
                      <div
                        className="action-cart"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 10px",
                          transition: "400ms",
                          position: "absolute",
                          bottom: "-60px",
                          left: "0px",
                          right: "0px",
                          visibility: "hidden",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          className="btn btn-lg btn-gray add_to_cart btn_buy buy-normal"
                          type="button"
                          title="Thêm vào giỏ"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            whiteSpace: "nowrap",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            fontWeight: 400,
                            verticalAlign: "middle",
                            userSelect: "none",
                            fontSize: "1rem",
                            appearance: "button",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            padding: "0px",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                            cursor: "pointer",
                            background: "rgb(245, 245, 245)",
                            width: "48px",
                          }}
                        >
                          <svg
                            className="icon"
                            style={{
                              boxSizing: "border-box",
                              overflow: "hidden",
                              width: "18px",
                              height: "22px",
                              marginTop: "3px",
                              fill: "#228b22",
                            }}
                          >
                            {" "}
                            <use
                              xlinkHref="#addcarticon"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ boxSizing: "border-box" }}
                            />{" "}
                          </svg>
                        </button>
                        <input
                          name="variantId"
                          type="hidden"
                          defaultValue="138360740"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            overflow: "visible",
                            maxWidth: "100%",
                            borderRadius: "4px",
                            padding: "0px 20px",
                            background: "rgb(255, 255, 255)",
                            borderColor: "rgb(235, 235, 235)",
                            height: "40px",
                            lineHeight: "40px",
                            marginBottom: "10px",
                            width: "100%",
                            cssFloat: "left",
                            fontSize: "14px",
                            color: "rgb(158, 158, 158)",
                            boxShadow: "none",
                          }}
                        />
                        <button
                          className="btn-buy btn-left btn-views btn-buy-now-grid"
                          title="Mua ngay"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            cursor: "pointer",
                            fontSize: "1em",
                            appearance: "none",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            background: "#228b22",
                            padding: "0px",
                            width: "calc(100% - 50px)",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                          }}
                        >
                          {"Mua ngay"}
                        </button>
                      </div>
                    </div>
                    <div
                      className="info-product"
                      style={{ boxSizing: "border-box", padding: "0px 10px" }}
                    >
                      <h3
                        className="product-name"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          textDecoration: "none",
                          padding: "10px 0px 5px",
                          margin: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          color: "#333333",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          textAlign: "center",
                          maxHeight: "50px",
                        }}
                      >
                        <a
                          href="https://nhanam.vn/hieu-sach-tren-dao"
                          title="HIỆU SÁCH TRÊN ĐẢO"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            color: "#333333",
                          }}
                        >
                          HIỆU SÁCH TRÊN ĐẢO
                        </a>
                      </h3>
                      <div
                        className="price-box"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          color: "#228b22",
                          lineHeight: "24px",
                          display: "block",
                          fontSize: "18px",
                          marginRight: "0px",
                          marginBottom: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="price"
                          style={{
                            boxSizing: "border-box",
                            marginRight: "15px",
                          }}
                        >
                          123.250₫
                        </span>
                        <span
                          className="compare-price"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "line-through",
                            fontSize: "14px",
                            color: "rgb(119, 119, 119)",
                            lineHeight: "24px",
                            fontFamily: "'civil-regular', sans-serif",
                          }}
                        >
                          145.000₫
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="swiper-slide"
                aria-label="5 / 8"
                role="group"
                style={{
                  boxSizing: "border-box",
                  flexShrink: 0,
                  height: "100%",
                  position: "relative",
                  transitionProperty: "transform",
                  width: "230px",
                  marginRight: "30px",
                }}
              >
                <div
                  className="item_product_main"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    background: "rgb(255, 255, 255)",
                    transition: "400ms",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <form
                    className="variants product-action wishItem"
                    action="/cart/add"
                    encType="multipart/form-data"
                    method="post"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <div
                      className="thumb"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <a
                        className="image_thumb"
                        href="https://nhanam.vn/homo-numericus-con-nguoi-trong-ky-nguyen-so"
                        title="HOMO NUMERICUS - CON NGƯỜI TRONG KỶ NGUYÊN SỐ"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          color: "#333333",
                          overflow: "hidden",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 0,
                          height: "245px",
                        }}
                      >
                        <img
                          className="lazyload img-responsive center-block loaded"
                          height={245}
                          width={149}
                          alt="HOMO NUMERICUS - CON NGƯỜI TRONG KỶ NGUYÊN SỐ"
                          src="https://bizweb.dktcdn.net/100/363/455/products/homo-numericus-con-nguoi-trong-ky-nguyen-so-01.jpg?v=1741265311430"
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            background: "transparent",
                            inset: "0px",
                            margin: "auto",
                            transition: "0.5s",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            position: "absolute",
                            minHeight: "unset",
                            width: "auto",
                            height: "unset",
                          }}
                        />
                      </a>
                      <div
                        className="action-cart"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 10px",
                          transition: "400ms",
                          position: "absolute",
                          bottom: "-60px",
                          left: "0px",
                          right: "0px",
                          visibility: "hidden",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          className="btn btn-lg btn-gray add_to_cart btn_buy buy-normal"
                          type="button"
                          title="Thêm vào giỏ"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            whiteSpace: "nowrap",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            fontWeight: 400,
                            verticalAlign: "middle",
                            userSelect: "none",
                            fontSize: "1rem",
                            appearance: "button",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            padding: "0px",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                            cursor: "pointer",
                            background: "rgb(245, 245, 245)",
                            width: "48px",
                          }}
                        >
                          <svg
                            className="icon"
                            style={{
                              boxSizing: "border-box",
                              overflow: "hidden",
                              width: "18px",
                              height: "22px",
                              marginTop: "3px",
                              fill: "#228b22",
                            }}
                          >
                            {" "}
                            <use
                              xlinkHref="#addcarticon"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ boxSizing: "border-box" }}
                            />{" "}
                          </svg>
                        </button>
                        <input
                          name="variantId"
                          type="hidden"
                          defaultValue="138360739"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            overflow: "visible",
                            maxWidth: "100%",
                            borderRadius: "4px",
                            padding: "0px 20px",
                            background: "rgb(255, 255, 255)",
                            borderColor: "rgb(235, 235, 235)",
                            height: "40px",
                            lineHeight: "40px",
                            marginBottom: "10px",
                            width: "100%",
                            cssFloat: "left",
                            fontSize: "14px",
                            color: "rgb(158, 158, 158)",
                            boxShadow: "none",
                          }}
                        />
                        <button
                          className="btn-buy btn-left btn-views btn-buy-now-grid"
                          title="Mua ngay"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            cursor: "pointer",
                            fontSize: "1em",
                            appearance: "none",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            background: "#228b22",
                            padding: "0px",
                            width: "calc(100% - 50px)",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                          }}
                        >
                          {"Mua ngay"}
                        </button>
                      </div>
                    </div>
                    <div
                      className="info-product"
                      style={{ boxSizing: "border-box", padding: "0px 10px" }}
                    >
                      <h3
                        className="product-name"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          textDecoration: "none",
                          padding: "10px 0px 5px",
                          margin: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          color: "#333333",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          textAlign: "center",
                          maxHeight: "50px",
                        }}
                      >
                        <a
                          href="https://nhanam.vn/homo-numericus-con-nguoi-trong-ky-nguyen-so"
                          title="HOMO NUMERICUS - CON NGƯỜI TRONG KỶ NGUYÊN SỐ"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            color: "#333333",
                          }}
                        >
                          HOMO NUMERICUS - CON NGƯỜI TRONG KỶ NGUYÊN SỐ
                        </a>
                      </h3>
                      <div
                        className="price-box"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          color: "#228b22",
                          lineHeight: "24px",
                          display: "block",
                          fontSize: "18px",
                          marginRight: "0px",
                          marginBottom: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="price"
                          style={{
                            boxSizing: "border-box",
                            marginRight: "15px",
                          }}
                        >
                          114.750₫
                        </span>
                        <span
                          className="compare-price"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "line-through",
                            fontSize: "14px",
                            color: "rgb(119, 119, 119)",
                            lineHeight: "24px",
                            fontFamily: "'civil-regular', sans-serif",
                          }}
                        >
                          135.000₫
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="swiper-slide"
                aria-label="6 / 8"
                role="group"
                style={{
                  boxSizing: "border-box",
                  flexShrink: 0,
                  height: "100%",
                  position: "relative",
                  transitionProperty: "transform",
                  width: "230px",
                  marginRight: "30px",
                }}
              >
                <div
                  className="item_product_main"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    background: "rgb(255, 255, 255)",
                    transition: "400ms",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <form
                    className="variants product-action wishItem"
                    action="/cart/add"
                    encType="multipart/form-data"
                    method="post"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <div
                      className="thumb"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <a
                        className="image_thumb"
                        href="https://nhanam.vn/sat-thu-bao-thu"
                        title="GRASSHOPPER - SÁT THỦ BÁO THÙ"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          color: "#333333",
                          overflow: "hidden",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 0,
                          height: "245px",
                        }}
                      >
                        <img
                          className="lazyload img-responsive center-block"
                          height={1}
                          width={1}
                          alt="GRASSHOPPER - SÁT THỦ BÁO THÙ"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            inset: "0px",
                            margin: "auto",
                            transition: "0.5s",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            position: "absolute",
                            height: "unset",
                            width: "auto",
                          }}
                        />
                      </a>
                      <div
                        className="action-cart"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 10px",
                          transition: "400ms",
                          position: "absolute",
                          bottom: "-60px",
                          left: "0px",
                          right: "0px",
                          visibility: "hidden",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          className="btn btn-lg btn-gray add_to_cart btn_buy buy-normal"
                          type="button"
                          title="Thêm vào giỏ"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            whiteSpace: "nowrap",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            fontWeight: 400,
                            verticalAlign: "middle",
                            userSelect: "none",
                            fontSize: "1rem",
                            appearance: "button",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            padding: "0px",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                            cursor: "pointer",
                            background: "rgb(245, 245, 245)",
                            width: "48px",
                          }}
                        >
                          <svg
                            className="icon"
                            style={{
                              boxSizing: "border-box",
                              overflow: "hidden",
                              width: "18px",
                              height: "22px",
                              marginTop: "3px",
                              fill: "#228b22",
                            }}
                          >
                            {" "}
                            <use
                              xlinkHref="#addcarticon"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ boxSizing: "border-box" }}
                            />{" "}
                          </svg>
                        </button>
                        <input
                          name="variantId"
                          type="hidden"
                          defaultValue="137356996"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            overflow: "visible",
                            maxWidth: "100%",
                            borderRadius: "4px",
                            padding: "0px 20px",
                            background: "rgb(255, 255, 255)",
                            borderColor: "rgb(235, 235, 235)",
                            height: "40px",
                            lineHeight: "40px",
                            marginBottom: "10px",
                            width: "100%",
                            cssFloat: "left",
                            fontSize: "14px",
                            color: "rgb(158, 158, 158)",
                            boxShadow: "none",
                          }}
                        />
                        <button
                          className="btn-buy btn-left btn-views btn-buy-now-grid"
                          title="Mua ngay"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            cursor: "pointer",
                            fontSize: "1em",
                            appearance: "none",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            background: "#228b22",
                            padding: "0px",
                            width: "calc(100% - 50px)",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                          }}
                        >
                          {"Mua ngay"}
                        </button>
                      </div>
                    </div>
                    <div
                      className="info-product"
                      style={{ boxSizing: "border-box", padding: "0px 10px" }}
                    >
                      <h3
                        className="product-name"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          textDecoration: "none",
                          padding: "10px 0px 5px",
                          margin: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          color: "#333333",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          textAlign: "center",
                          maxHeight: "50px",
                        }}
                      >
                        <a
                          href="https://nhanam.vn/sat-thu-bao-thu"
                          title="GRASSHOPPER - SÁT THỦ BÁO THÙ"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            color: "#333333",
                          }}
                        >
                          GRASSHOPPER - SÁT THỦ BÁO THÙ
                        </a>
                      </h3>
                      <div
                        className="price-box"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          color: "#228b22",
                          lineHeight: "24px",
                          display: "block",
                          fontSize: "18px",
                          marginRight: "0px",
                          marginBottom: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="price"
                          style={{
                            boxSizing: "border-box",
                            marginRight: "15px",
                          }}
                        >
                          136.000₫
                        </span>
                        <span
                          className="compare-price"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "line-through",
                            fontSize: "14px",
                            color: "rgb(119, 119, 119)",
                            lineHeight: "24px",
                            fontFamily: "'civil-regular', sans-serif",
                          }}
                        >
                          160.000₫
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="swiper-slide"
                aria-label="7 / 8"
                role="group"
                style={{
                  boxSizing: "border-box",
                  flexShrink: 0,
                  height: "100%",
                  position: "relative",
                  transitionProperty: "transform",
                  width: "230px",
                  marginRight: "30px",
                }}
              >
                <div
                  className="item_product_main"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    background: "rgb(255, 255, 255)",
                    transition: "400ms",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <form
                    className="variants product-action wishItem"
                    action="/cart/add"
                    encType="multipart/form-data"
                    method="post"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <div
                      className="thumb"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <a
                        className="image_thumb"
                        href="https://nhanam.vn/pickleball-cho-nguoi-moi-bat-dau"
                        title="PICKLEBALL CHO NGƯỜI MỚI BẮT ĐẦU"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          color: "#333333",
                          overflow: "hidden",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 0,
                          height: "245px",
                        }}
                      >
                        <img
                          className="lazyload img-responsive center-block"
                          height={1}
                          width={1}
                          alt="PICKLEBALL CHO NGƯỜI MỚI BẮT ĐẦU"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            inset: "0px",
                            margin: "auto",
                            transition: "0.5s",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            position: "absolute",
                            height: "unset",
                            width: "auto",
                          }}
                        />
                      </a>
                      <div
                        className="action-cart"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 10px",
                          transition: "400ms",
                          position: "absolute",
                          bottom: "-60px",
                          left: "0px",
                          right: "0px",
                          visibility: "hidden",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          className="btn btn-lg btn-gray add_to_cart btn_buy buy-normal"
                          type="button"
                          title="Thêm vào giỏ"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            whiteSpace: "nowrap",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            fontWeight: 400,
                            verticalAlign: "middle",
                            userSelect: "none",
                            fontSize: "1rem",
                            appearance: "button",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            padding: "0px",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                            cursor: "pointer",
                            background: "rgb(245, 245, 245)",
                            width: "48px",
                          }}
                        >
                          <svg
                            className="icon"
                            style={{
                              boxSizing: "border-box",
                              overflow: "hidden",
                              width: "18px",
                              height: "22px",
                              marginTop: "3px",
                              fill: "#228b22",
                            }}
                          >
                            {" "}
                            <use
                              xlinkHref="#addcarticon"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ boxSizing: "border-box" }}
                            />{" "}
                          </svg>
                        </button>
                        <input
                          name="variantId"
                          type="hidden"
                          defaultValue="137356994"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            overflow: "visible",
                            maxWidth: "100%",
                            borderRadius: "4px",
                            padding: "0px 20px",
                            background: "rgb(255, 255, 255)",
                            borderColor: "rgb(235, 235, 235)",
                            height: "40px",
                            lineHeight: "40px",
                            marginBottom: "10px",
                            width: "100%",
                            cssFloat: "left",
                            fontSize: "14px",
                            color: "rgb(158, 158, 158)",
                            boxShadow: "none",
                          }}
                        />
                        <button
                          className="btn-buy btn-left btn-views btn-buy-now-grid"
                          title="Mua ngay"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            cursor: "pointer",
                            fontSize: "1em",
                            appearance: "none",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            background: "#228b22",
                            padding: "0px",
                            width: "calc(100% - 50px)",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                          }}
                        >
                          {"Mua ngay"}
                        </button>
                      </div>
                    </div>
                    <div
                      className="info-product"
                      style={{ boxSizing: "border-box", padding: "0px 10px" }}
                    >
                      <h3
                        className="product-name"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          textDecoration: "none",
                          padding: "10px 0px 5px",
                          margin: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          color: "#333333",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          textAlign: "center",
                          maxHeight: "50px",
                        }}
                      >
                        <a
                          href="https://nhanam.vn/pickleball-cho-nguoi-moi-bat-dau"
                          title="PICKLEBALL CHO NGƯỜI MỚI BẮT ĐẦU"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            color: "#333333",
                          }}
                        >
                          PICKLEBALL CHO NGƯỜI MỚI BẮT ĐẦU
                        </a>
                      </h3>
                      <div
                        className="price-box"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          color: "#228b22",
                          lineHeight: "24px",
                          display: "block",
                          fontSize: "18px",
                          marginRight: "0px",
                          marginBottom: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="price"
                          style={{
                            boxSizing: "border-box",
                            marginRight: "15px",
                          }}
                        >
                          170.000₫
                        </span>
                        <span
                          className="compare-price"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "line-through",
                            fontSize: "14px",
                            color: "rgb(119, 119, 119)",
                            lineHeight: "24px",
                            fontFamily: "'civil-regular', sans-serif",
                          }}
                        >
                          200.000₫
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="swiper-slide"
                aria-label="8 / 8"
                role="group"
                style={{
                  boxSizing: "border-box",
                  flexShrink: 0,
                  height: "100%",
                  position: "relative",
                  transitionProperty: "transform",
                  width: "230px",
                  marginRight: "30px",
                }}
              >
                <div
                  className="item_product_main"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    background: "rgb(255, 255, 255)",
                    transition: "400ms",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <form
                    className="variants product-action wishItem"
                    action="/cart/add"
                    encType="multipart/form-data"
                    method="post"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <div
                      className="thumb"
                      style={{
                        boxSizing: "border-box",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <a
                        className="image_thumb"
                        href="https://nhanam.vn/nhat-ky-thang-chuc-cua-tieu-cuong"
                        title="NHẬT KÝ THĂNG CHỨC CỦA TIỂU CƯỜNG"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          color: "#333333",
                          overflow: "hidden",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 0,
                          height: "245px",
                        }}
                      >
                        <img
                          className="lazyload img-responsive center-block"
                          height={1}
                          width={1}
                          alt="NHẬT KÝ THĂNG CHỨC CỦA TIỂU CƯỜNG"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                          style={{
                            boxSizing: "border-box",
                            borderStyle: "none",
                            verticalAlign: "middle",
                            inset: "0px",
                            margin: "auto",
                            transition: "0.5s",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            position: "absolute",
                            height: "unset",
                            width: "auto",
                          }}
                        />
                      </a>
                      <div
                        className="action-cart"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 10px",
                          transition: "400ms",
                          position: "absolute",
                          bottom: "-60px",
                          left: "0px",
                          right: "0px",
                          visibility: "hidden",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          className="btn btn-lg btn-gray add_to_cart btn_buy buy-normal"
                          type="button"
                          title="Thêm vào giỏ"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            whiteSpace: "nowrap",
                            transition:
                              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                            display: "inline-block",
                            fontWeight: 400,
                            verticalAlign: "middle",
                            userSelect: "none",
                            fontSize: "1rem",
                            appearance: "button",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            padding: "0px",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                            cursor: "pointer",
                            background: "rgb(245, 245, 245)",
                            width: "48px",
                          }}
                        >
                          <svg
                            className="icon"
                            style={{
                              boxSizing: "border-box",
                              overflow: "hidden",
                              width: "18px",
                              height: "22px",
                              marginTop: "3px",
                              fill: "#228b22",
                            }}
                          >
                            {" "}
                            <use
                              xlinkHref="#addcarticon"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ boxSizing: "border-box" }}
                            />{" "}
                          </svg>
                        </button>
                        <input
                          name="variantId"
                          type="hidden"
                          defaultValue="137356993"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            overflow: "visible",
                            maxWidth: "100%",
                            borderRadius: "4px",
                            padding: "0px 20px",
                            background: "rgb(255, 255, 255)",
                            borderColor: "rgb(235, 235, 235)",
                            height: "40px",
                            lineHeight: "40px",
                            marginBottom: "10px",
                            width: "100%",
                            cssFloat: "left",
                            fontSize: "14px",
                            color: "rgb(158, 158, 158)",
                            boxShadow: "none",
                          }}
                        />
                        <button
                          className="btn-buy btn-left btn-views btn-buy-now-grid"
                          title="Mua ngay"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            overflow: "visible",
                            textTransform: "none",
                            cursor: "pointer",
                            fontSize: "1em",
                            appearance: "none",
                            border: "1px solid #228b22",
                            borderRadius: "3px",
                            background: "#228b22",
                            padding: "0px",
                            width: "calc(100% - 50px)",
                            textAlign: "center",
                            color: "rgb(255, 255, 255)",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "48px",
                            lineHeight: 1.5,
                            fontFamily: "'civil-bold', sans-serif",
                            boxShadow: "none",
                          }}
                        >
                          {"Mua ngay"}
                        </button>
                      </div>
                    </div>
                    <div
                      className="info-product"
                      style={{ boxSizing: "border-box", padding: "0px 10px" }}
                    >
                      <h3
                        className="product-name"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                          textDecoration: "none",
                          padding: "10px 0px 5px",
                          margin: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          color: "#333333",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          textAlign: "center",
                          maxHeight: "50px",
                        }}
                      >
                        <a
                          href="https://nhanam.vn/nhat-ky-thang-chuc-cua-tieu-cuong"
                          title="NHẬT KÝ THĂNG CHỨC CỦA TIỂU CƯỜNG"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            color: "#333333",
                          }}
                        >
                          NHẬT KÝ THĂNG CHỨC CỦA TIỂU CƯỜNG
                        </a>
                      </h3>
                      <div
                        className="price-box"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          color: "#228b22",
                          lineHeight: "24px",
                          display: "block",
                          fontSize: "18px",
                          marginRight: "0px",
                          marginBottom: "0px",
                          fontFamily: "'civil-bold', sans-serif",
                          textAlign: "center",
                        }}
                      >
                        <span
                          className="price"
                          style={{
                            boxSizing: "border-box",
                            marginRight: "15px",
                          }}
                        >
                          117.300₫
                        </span>
                        <span
                          className="compare-price"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "line-through",
                            fontSize: "14px",
                            color: "rgb(119, 119, 119)",
                            lineHeight: "24px",
                            fontFamily: "'civil-regular', sans-serif",
                          }}
                        >
                          138.000₫
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-atomic="true"
              aria-live="assertive"
              style={{
                boxSizing: "border-box",
                position: "absolute",
                left: "0px",
                top: "0px",
                pointerEvents: "none",
                opacity: 0,
                zIndex: -1000,
              }}
            />
          </div>
          <div
            className="swiper-button-prev swiper-button-disabled"
            aria-controls="swiper-wrapper-4a4664848a121e7e"
            aria-disabled="true"
            aria-label="Previous slide"
            role="button"
            tabIndex="-1"
            style={{
              boxSizing: "border-box",
              position: "absolute",
              marginTop: "calc(-1 * 44px/ 2)",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--swiper-navigation-color, #007aff)",
              right: "auto",
              opacity: 0.35,
              cursor: "auto",
              pointerEvents: "none",
              background: "rgb(245, 245, 245)",
              height: "35px",
              width: "35px",
              top: "33%",
              left: "-20px",
            }}
          >
            <svg
              className="icon"
              style={{
                boxSizing: "border-box",
                overflow: "hidden",
                width: "12px",
                height: "21px",
                fill: "rgb(187, 187, 191)",
              }}
            >
              {" "}
              <use
                xlinkHref="#arrow-left"
                style={{ boxSizing: "border-box" }}
              />{" "}
            </svg>
          </div>
          <div
            className="swiper-button-next"
            aria-controls="swiper-wrapper-4a4664848a121e7e"
            aria-disabled="false"
            aria-label="Next slide"
            role="button"
            tabIndex="0"
            style={{
              boxSizing: "border-box",
              position: "absolute",
              marginTop: "calc(-1 * 44px/ 2)",
              zIndex: 10,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--swiper-navigation-color, #007aff)",
              left: "auto",
              background: "rgb(245, 245, 245)",
              height: "35px",
              width: "35px",
              top: "33%",
              right: "-20px",
            }}
          >
            <svg
              className="icon"
              style={{
                boxSizing: "border-box",
                overflow: "hidden",
                width: "12px",
                height: "21px",
                fill: "rgb(187, 187, 191)",
                transform: "rotate(-180deg)",
              }}
            >
              {" "}
              <use
                xlinkHref="#arrow-left"
                style={{ boxSizing: "border-box" }}
              />{" "}
            </svg>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
}

body {
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(33, 37, 41);
  text-align: left;
  background-color: rgb(255, 255, 255);
  margin: 0px;
  overflow: hidden;
  font-family: 'civil-regular', sans-serif;
  padding: 0px;
}
`,
        }}
      />
    </>
  );
}
