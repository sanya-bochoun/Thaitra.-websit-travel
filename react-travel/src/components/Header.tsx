import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="header" data-aos="fade-down">
    <section className="flex">
      <Link to="/" className="logo">Thaitra.</Link>
      <nav className="navbar">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/tours">tours</Link>
        <Link to="/destinations">destinations</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <div id="menu-btn" className="fas fa-bars"></div>
    </section>
  </header>
);

export default Header; 