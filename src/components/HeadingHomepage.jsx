import React from "react";
import fireLeft from "../../public/assets/images/bestseller-left.gif";
import fireRight from "../../public/assets/images/bestseller-right.gif";

export default function HeadingHomepage({ title }) {
  return (
    <>
      <div
        className="title-border"
        style={{
          position:"relative",
          boxSizing: "border-box",
          borderTop: "solid 2px #0171F9",
          display: "flex", // Loại bỏ display: flex
          justifyContent: "center", // Loại bỏ justifyContent: space-between
          alignItems: "baseline",
          textAlign: "center", // Thêm text-align: center để căn giữa nội dung
          marginBottom: "28px",
          // Nếu bạn vẫn muốn flexbox cho mục đích khác, có thể cân nhắc giữ lại display: flex
          // và thay đổi justifyContent: "center", nhưng text-align: center đơn giản hơn cho việc căn giữa text.
        }}
      >
        {title==="Bestseller"?<img src={fireLeft} style={{
             position: "absolute",
             bottom: "0",
             left: "39%", // Adjust left/right as needed
             height: "100px",
             aspectRatio: "1 / 1",
             objectFit: "contain",
             transform: "translateX(-50%)",
          }}></img>:null}
        <h2
          className="title-module"
          style={{
            boxSizing: "border-box",
            marginTop: "0px",
            // FontWeight: 500, // Có thể điều chỉnh hoặc xóa fontWeight nếu font Montserrat đã bao gồm độ đậm mong muốn
            lineHeight: 1.2,
            fontFamily: "'Montserrat', sans-serif", // Thay đổi fontFamily sang Montserrat
            fontSize: "40px", // Thay đổi fontSize sang 48px
            color: "#0171F9",
            marginBottom: "0px",
            paddingTop: "30px",
            display: "inline-block", // Đảm bảo h2 không chiếm hết chiều rộng nếu text-align center không hoạt động như mong đợi do flex/block context
            // Nếu text-align: center trên div cha hoạt động, display: inline-block trên h2 là không cần thiết
          }}
        >
          {/* Đảm bảo thẻ a này không ảnh hưởng đến việc căn giữa text nếu nó có display khác block/inline-block */}
          <a
            title={`${title}`}
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              backgroundColor: "transparent",
              color: "#0171F9", // Đảm bảo màu chữ của link vẫn là màu chủ đạo
            }}
          >
            {title}
          </a>
        </h2>
        {title==="Bestseller"?<img src={fireRight} style={{
           position: "absolute",
           bottom: "0",
           right: "39%", // Adjust left/right as needed
           height: "100px",
           aspectRatio: "1 / 1",
           objectFit: "contain",
           transform: "translateX(50%)",
          }}></img>:null}
        {/* Nếu có các phần tử khác trong div.title-border mà bạn muốn đẩy ra hai bên, bạn cần cấu trúc lại HTML/CSS */}
      </div>
      {/* Giữ nguyên hoặc xóa phần style nhúng nếu bạn đã có style toàn cục */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
 html {
   box-sizing: border-box;
   font-family: sans-serif; /* Fallback font */
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
   font-family: 'civil-regular', sans-serif; /* Font mặc định cho body */
   padding: 0px;
 }

 /* Đảm bảo font Montserrat đã được nhúng vào website của bạn */
 /* Ví dụ nhúng từ Google Fonts trong thẻ <head> của file index.html: */
 /* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"> */
 `,
        }}
      />
    </>
  );
}
