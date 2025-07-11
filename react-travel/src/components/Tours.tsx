import React from "react";
import Header from "./Header";

const Tours: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container tours">
        <h1 className="heading" data-aos="zoom-out">popular places</h1>
        <section className="grid">
          <div className="box" data-aos="fade-up">
            <div className="price"><i className="fas fa-dollar-sign"></i><span>1299</span></div>
            <img src="images/tour-img-1.webp" className="image" alt="" />
            <h3 className="name">taj mahal</h3>
            <p className="address">agra, india</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>1999</span></p>
            <img src="images/tour-img-2.webp" alt="" className="image" />
            <h3 className="name">tokyo</h3>
            <p className="address">tokyo, japan</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>3000</span></p>
            <img src="images/tour-img-3.webp" alt="" className="image" />
            <h3 className="name">hawaii</h3>
            <p className="address">hawaii, united state</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>1203</span></p>
            <img src="images/tour-img-4.webp" alt="" className="image" />
            <h3 className="name">london</h3>
            <p className="address">england, U.K.</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>1999</span></p>
            <img src="images/tour-img-5.webp" alt="" className="image" />
            <h3 className="name">lotus temple</h3>
            <p className="address">new delhi, india</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>1000</span></p>
            <img src="images/tour-img-6.webp" alt="" className="image" />
            <h3 className="name">Arc de Triomphe</h3>
            <p className="address">Paris, France</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tours; 