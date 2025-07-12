import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header" data-aos="fade-down">
      <section className="flex">
        <Link to="/" className="logo">Thaitra.</Link>
        <nav className={`navbar${menuOpen ? " active" : ""}`}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
          <Link to="/tours" onClick={handleLinkClick}>Tours</Link>
          <Link to="/destinations" onClick={handleLinkClick}>Destinations</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </nav>
        <div id="menu-btn" className="fas fa-bars" onClick={handleMenuToggle} style={{cursor: 'pointer'}}></div>
      </section>
    </header>
  );
};

export default Header; 