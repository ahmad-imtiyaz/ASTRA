import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LaravelModule from "./pages/LaravelModule";

// Import semua bab
import Bab1 from "./pages/laravel-crud/Bab1";
import Bab2 from "./pages/laravel-crud/Bab2";
import Bab3 from "./pages/laravel-crud/Bab3";
import Bab4 from "./pages/laravel-crud/Bab4";
import Bab5 from "./pages/laravel-crud/Bab5";
// import Bab6 from "./pages/laravel-crud/Bab6";
// import Bab7 from "./pages/laravel-crud/Bab7";
// import Bab8 from "./pages/laravel-crud/Bab8";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Route module utama */}
        <Route path="/module/laravel-crud" element={<LaravelModule />} />

        {/* Route setiap bab - PISAH FILE */}
        <Route path="/module/laravel-crud/chapter/1" element={<Bab1 />} />
        <Route path="/module/laravel-crud/chapter/2" element={<Bab2 />} />
        <Route path="/module/laravel-crud/chapter/3" element={<Bab3 />} />
        <Route path="/module/laravel-crud/chapter/4" element={<Bab4 />} />
        <Route path="/module/laravel-crud/chapter/5" element={<Bab5 />} />
      </Routes>
    </Router>
  );
}
