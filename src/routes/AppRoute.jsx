import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../Login";
import ProductDetail from "../ProductDetail";
import ShopPage from "../shop";
import ContactPage from "../contact";


const AppRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      <Route path="/Contact" element={<ContactPage />} />

        <Route path="/Login" element={<LoginPage />} />


        <Route path="/product-details" element={<ProductDetail />}></Route>
        <Route path="/shop" element={<ShopPage></ShopPage>}></Route>

        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
  );
};

export default AppRoute;