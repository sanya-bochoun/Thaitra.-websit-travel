import React from "react";
import Header from "./Header";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container about">
        <h1 className="heading" data-aos="zoom-out">about us</h1>
        <section>
          <div className="details">
            <div className="box" data-aos="zoom-in">
              <h3>why choose us?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate accusantium repellat aliquam esse odit commodi est cumque perferendis rem veritatis minus aliquid delectus eligendi.</p>
              <a href="/contact" className="btn">contact us</a>
            </div>
          </div>
          <div className="grid">
            <div className="box" data-aos="fade-up">
              <img src="images/about-img-1.svg" alt="" />
              <h3>easy bookings</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed blanditiis.</p>
            </div>
            <div className="box" data-aos="fade-up">
              <img src="images/about-img-2.svg" alt="" />
              <h3>travel world</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed blanditiis.</p>
            </div>
            <div className="box" data-aos="fade-up">
              <img src="images/about-img-3.svg" alt="" />
              <h3>enjoy tours</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed blanditiis.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="container reviews">
        <h1 className="heading" data-aos="zoom-out">client's reviews</h1>
        <section className="grid">
          {[1,2,3,4,5,6].map((i) => (
            <div className="box" data-aos="zoom-in" key={i}>
              <img src={`images/pic-${i}.png`} alt="" />
              <h3>john deo</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illo distinctio repellendus delectus dicta modi iure, quod numquam nesciunt aspernatur.</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default About; 