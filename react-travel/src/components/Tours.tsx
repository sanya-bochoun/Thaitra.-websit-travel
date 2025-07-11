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
            <div className="price"><i className="fas fa-dollar-sign"></i><span>3990฿ </span></div>
            <img src="images/tour-img-1.jpg" className="image" alt="" />
            <h3 className="name">Phuket</h3>
            <p className="address">Phuket, Thailand</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>3999฿</span></p>
            <img src="images/tour-img-2.jpg" alt="" className="image" />
            <h3 className="name">Koh Samui</h3>
            <p className="address">Koh Samui, Thailand</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>3999฿</span></p>
            <img src="images/tour-img-3.jpg" alt="" className="image" />
            <h3 className="name">Koh Phi Phi</h3>
            <p className="address">Koh Phi Phi, Thailand</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>2999฿</span></p>
            <img src="images/tour-img-4.jpg" alt="" className="image" />
            <h3 className="name">Bangkok</h3>
            <p className="address">Bangkok, Thailand</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>2999฿</span></p>
            <img src="images/tour-img-5.jpg" alt="" className="image" />
            <h3 className="name">Chiang Mai</h3>
            <p className="address">Chiang Mai, Thailand</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
          <div className="box" data-aos="fade-up">
            <p className="price"><i className="fas fa-dollar-sign"></i><span>2999฿</span></p>
            <img src="images/tour-img-6.jpg" alt="" className="image" />
            <h3 className="name">Ayutthaya</h3>
            <p className="address">Ayutthaya, Thailand</p>
            <a href="#" className="btn">send enquiry</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tours; 