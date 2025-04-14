import React from "react";

export default function HeadingHomepage({ title }) {
  return (
    <>
      <div
        className="title-border"
        style={{
          boxSizing: "border-box",
          borderTop: "solid 2px #0171F9",
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
            color: "#0171F9",
            marginBottom: "0px",
            paddingTop: "10px",
          }}
        >
          <a
            href="https://nhanam.vn/tac-gia"
            title="Các tác giả"
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              backgroundColor: "transparent",
              color: "#0171F9",
            }}
          >
            {title}
          </a>
        </h2>
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
