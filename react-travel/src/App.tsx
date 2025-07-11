
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Tours from "./components/Tours";
import Destinations from "./components/Destinations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </Router>
  );
}

export default App;
