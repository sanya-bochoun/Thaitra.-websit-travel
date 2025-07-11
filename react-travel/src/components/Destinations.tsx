import React from "react";
import Header from "./Header";

const Destinations: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container destinations">
        <h1 className="heading" data-aos="zoom-out">destinations</h1>
        <section className="grid">
          <div className="box" data-aos="zoom-in">
            <img src="images/destination-1.jpg" alt="" />
            <h3><span>istanbul</span></h3>
          </div>
          <div className="box" data-aos="zoom-in">
            <img src="images/destination-2.jpg" alt="" />
            <h3><span>california</span></h3>
          </div>
          <div className="box" data-aos="zoom-in">
            <img src="images/destination-3.jpg" alt="" />
            <h3><span>london</span></h3>
          </div>
          <div className="box" data-aos="zoom-in">
            <img src="images/destination-4.jpg" alt="" />
            <h3><span>morocco</span></h3>
          </div>
          <div className="box" data-aos="zoom-in">
            <img src="images/destination-5.jpg" alt="" />
            <h3><span>new york</span></h3>
          </div>
          <div className="box" data-aos="zoom-in">
            <img src="images/destination-6.jpg" alt="" />
            <h3><span>paris</span></h3>
          </div>
          <div className="box" data-aos="zoom-in">
            <img src="images/destination-7.jpg" alt="" />
            <h3><span>barcelona</span></h3>
          </div>
          <div className="box" data-aos="zoom-in">
            <img src="images/destination-8.jpg" alt="" />
            <h3><span>sydney</span></h3>
          </div>
          <div className="box" data-aos="zoom-in">
            <img src="images/destination-9.jpg" alt="" />
            <h3><span>tokyo</span></h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default Destinations; 