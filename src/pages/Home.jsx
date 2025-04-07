import React from "react";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Features from "../components/Features";
import Trending from "../components/Trending";
import MostPlayed from "../components/MostPlayed";
import Categories from "../components/Categories";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Component from "../components/Book";
function Home() {
  return (
    <div>
      {/* ***** Preloader Start ***** */}
      {/* <Preloader /> */}
      {/* ***** Preloader End ***** */}

      {/* ***** Header Area Start ***** */}
      <Header currentPage="home" />
      {/* ***** Header Area End ***** */}
      <MainBanner />
      {/* something */}
      {/* something */}

      {/* ***** Features Section Start ***** */}
      <Features />
      {/* ***** Features Section End ***** */}

      {/* ***** Trending Section Start ***** */}
      <Trending />
      {/* ***** Trending Section End ***** */}
      {/* ***** Most Played Section Start ***** */}
      <MostPlayed />
      {/* ***** Most Played Section End ***** */}

      {/* ***** Categories Section Start ***** */}
      <Categories />
      {/* ***** Categories Section End ***** */}

      {/* ***** CTA Section Start ***** */}
      <CTA />
      {/* ***** CTA Section End ***** */}

      {/* ***** Footer Start ***** */}
      <Footer />
      {/* ***** Footer End ***** */}
    </div>
  );
}

export default Home;
