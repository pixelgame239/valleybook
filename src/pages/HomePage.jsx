import React from "react";
import HeaderHome from "../components/HeaderHome";
import MainBanner from "../components/MainBanner";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header pageTab="home" />
      <MainBanner />
    </>
  );
};

export default HomePage;
