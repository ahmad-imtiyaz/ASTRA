import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LaravelModule from "./pages/LaravelModule";

// Import wrapper
import BabWrapper from "./pages/laravel-crud/BabWrapper";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Dashboard */}
        <Route path="/" element={<Home />} />

        {/* Halaman utama modul Laravel */}
        <Route path="/module/laravel-crud" element={<LaravelModule />} />

        {/* Satu route dinamis untuk semua bab */}
        <Route
          path="/module/laravel-crud/chapter/:id"
          element={<BabWrapper />}
        />
      </Routes>
    </Router>
  );
}
