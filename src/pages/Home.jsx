// Import React library
import React from "react";

// Import all required components
import Preloader from "../components/Preloader"; // Loading animation component
import Header from "../components/Header"; // Main navigation header
import MainBanner from "../components/MainBanner"; // Hero banner section
import Features from "../components/Features"; // Features section (currently unused)
import Trending from "../components/Trending"; // Trending games section
import MostPlayed from "../components/MostPlayed"; // Most played games section
import Categories from "../components/Categories"; // Game categories section
import CTA from "../components/CTA"; // Call-to-action section
import Footer from "../components/Footer"; // Page footer
import Component from "../components/Book"; // Book component (temporary)
import supabase from "../backend/initSupabase";
import { useState, useEffect } from "react";

function Home() {
  const [bookdata, setBookdata] = useState([])

  useEffect(() => {
    async function getData() {
      const { data: bookdata } = await supabase.from('books').select();

      if (bookdata.length > 1) {
        console.log(`Fetched: ${bookdata} `);
      }
    }

    getData();
  }, [])
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

// Export Home component as default
export default Home;
