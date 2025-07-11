import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      {/* Header Section */}
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
      {/* Home Section */}
      <div className="container home" data-aos="zoom-out">
        <section className="flex" data-aos="zoom-in" data-aos-delay="600">
          <form action="" method="post">
            <h3>search your tour</h3>
            <p>where to</p>
            <input type="text" name="location" required maxLength={50} placeholder="enter tour location" className="box" />
            <p>when to</p>
            <input type="date" name="date" className="box" required />
            <p>how many</p>
            <input type="number" name="guests" min={1} max={10} maxLength={2} placeholder="number of guests" required className="box" />
            <input type="submit" value="search tour" name="search" className="btn" />
          </form>
        </section>
      </div>
    </>
  );
};

export default Home; 