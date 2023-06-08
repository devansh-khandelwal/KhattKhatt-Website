import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Tents from "./pages/Tents";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="KhattKhatt-Website/" exact element={<Home />} />
        <Route path="KhattKhatt-Website/about" element={<About />} />
        <Route path="KhattKhatt-Website/tents" element={<Tents />} />
        <Route path="KhattKhatt-Website/activities" element={<Activities />} />
        <Route path="KhattKhatt-Website/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
