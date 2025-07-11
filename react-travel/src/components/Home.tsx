import React from "react";
import Header from "./Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
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