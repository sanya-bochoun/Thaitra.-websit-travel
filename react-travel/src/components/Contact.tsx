import React from "react";
import Header from "./Header";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container contact">
        <h1 className="heading" data-aos="zoom-out">contact us</h1>
        <section>
          <div className="row">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.086614958938!2d72.83608960687518!3d19.13958260781318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1672939645362!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-aos="flip-left"></iframe>
            <form action="" method="post" data-aos="flip-right">
              <h3>get in touch</h3>
              <input type="text" name="name" required maxLength={50} placeholder="enter your name" className="box" />
              <input type="email" name="email" required maxLength={50} placeholder="enter your email" className="box" />
              <input type="number" name="number" required maxLength={10} min={0} max={9999999999} placeholder="enter your number" className="box" />
              <textarea name="message" className="box" required maxLength={1000} cols={30} rows={10}></textarea>
              <input type="submit" value="send message" name="send" className="btn" />
            </form>
          </div>
          <div className="grid">
            <div className="box" data-aos="fade-up">
              <i className="fas fa-phone"></i>
              <h3>phone number</h3>
              <a href="tel:1234567890">+123-456-7890</a>
              <a href="tel:1112223333">+111-222-3333</a>
            </div>
            <div className="box" data-aos="fade-up">
              <i className="fas fa-envelope"></i>
              <h3>email address</h3>
              <a href="mailto:shaikhanas@gmail.com">shaikhanas@gmail.come</a>
              <a href="mailto:anasbhai@gmail.com">anasbhai@gmail.come</a>
            </div>
            <div className="box" data-aos="fade-up">
              <i className="fas fa-map-marker-alt"></i>
              <h3>office address</h3>
              <a href="#">flat no. 01, a-1, jogeshwari, mumbai, india - 400104</a>
            </div>
          </div>
          <div className="credit">
            &copy; copyright @ 2023 by <span>mr. web designer</span> | all rights reserved!
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact; 