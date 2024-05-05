import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage.tsx";
import Login_register from "./components/login/Login_register.tsx";
import GalleryPage from "./components/gallerypage/GalleryPage.tsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login_register />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
};

export default App;
