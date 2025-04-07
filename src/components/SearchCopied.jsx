import React from "react";

export default function Search() {
  return (
    <>
      <form
        className="input-group search-bar"
        action="/search"
        role="search"
        style={{
          boxSizing: "border-box",
          borderCollapse: "separate",
          margin: "24px 70px 0px -38px",
          padding: "0px",
          borderRadius: "30px",
          overflow: "hidden",
          border: "1px solid rgb(187, 187, 191)",
          height: "40px",
          position: "relative",
          width: "240px",
          cssFloat: "right",
        }}
      >
        <input
          className="search-auto input-group-field auto-search"
          name="query"
          type="text"
          autoComplete="off"
          required
          placeholder="Tìm kiếm..."
          aria-label="Tìm sản phẩm"
          style={{
            boxSizing: "border-box",
            fontFamily: "inherit",
            overflow: "visible",
            maxWidth: "100%",
            borderRadius: "4px",
            borderColor: "rgb(235, 235, 235)",
            lineHeight: "40px",
            cssFloat: "left",
            fontSize: "14px",
            boxShadow: "none",
            margin: "0px 0px 19px",
            color: "rgb(28, 28, 28)",
            minHeight: "40px",
            appearance: "none",
            border: "none",
            background: "rgb(255, 255, 255)",
            padding: "0px 50px 0px 20px",
            height: "40px",
            width: "100%",
            marginBottom: "0px",
          }}
        />
        <input
          name="type"
          type="hidden"
          defaultValue="product"
          style={{
            boxSizing: "border-box",
            margin: "0px",
            fontFamily: "inherit",
            overflow: "visible",
            maxWidth: "100%",
            borderRadius: "4px",
            borderColor: "rgb(235, 235, 235)",
            lineHeight: "40px",
            marginBottom: "10px",
            width: "100%",
            cssFloat: "left",
            fontSize: "14px",
            color: "rgb(158, 158, 158)",
            boxShadow: "none",
            border: "none",
            background: "rgb(255, 255, 255)",
            padding: "0px 50px 0px 20px",
            height: "40px",
          }}
        />
        <button
          className="btn search-button"
          aria-label="Justify"
          style={{
            boxSizing: "border-box",
            margin: "0px",
            fontFamily: "inherit",
            overflow: "visible",
            textTransform: "none",
            appearance: "none",
            background: "transparent",
            whiteSpace: "nowrap",
            border: "1px solid transparent",
            borderRadius: "0.25rem",
            transition:
              "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
            display: "inline-block",
            fontWeight: 400,
            verticalAlign: "middle",
            userSelect: "none",
            fontSize: "1rem",
            padding: "0px",
            width: "45px",
            height: "40px",
            textAlign: "center",
            lineHeight: "40px",
            position: "absolute",
            right: "0px",
            top: "0px",
            cursor: "pointer",
          }}
        >
          <svg
            className="icon"
            style={{
              boxSizing: "border-box",
              overflow: "hidden",
              margin: "5px",
              width: "24px",
              height: "24px",
            }}
          >
            {" "}
            <use
              xlinkHref="#search"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{ boxSizing: "border-box" }}
            />{" "}
          </svg>
        </button>
      </form>
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
