import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
const AppRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
  );
};

export default AppRoute;
