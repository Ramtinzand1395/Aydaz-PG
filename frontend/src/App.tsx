import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage.tsx";
import Login_register from "./components/login/Login_register.tsx";
import GalleryPage from "./components/gallerypage/GalleryPage.tsx";
import GenerallCorses from "./components/corses/GenerallCorses.tsx";
import StaticCorse from "./components/corses/staticCorse/StaticCorse.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login_register />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/corses/:corseName" element={<GenerallCorses />} />
        <Route path="/face-to-face course" element={<StaticCorse />} />

      </Routes>
    </div>
  );
};

export default App;
