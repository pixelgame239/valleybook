import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../contact";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Contact" element={<ContactPage />} />

      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoute;
