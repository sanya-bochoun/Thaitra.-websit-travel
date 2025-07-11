import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="header" data-aos="fade-down">
    <section className="flex">
      <Link to="/" className="logo">Thaitra.</Link>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div id="menu-btn" className="fas fa-bars"></div>
    </section>
  </header>
);

export default Header; 