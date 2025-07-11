import React, { useState } from "react";
import Header from "./Header";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, email, number, message };
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert("ส่งข้อความสำเร็จ!");
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      } else {
        alert("เกิดข้อผิดพลาด");
      }
    } catch {
      alert("เกิดข้อผิดพลาด");
    }
  };

  return (
    <>
      <Header />
      <div className="container contact">
        <h1 className="heading" data-aos="zoom-out">contact us</h1>
        <section>
          <div className="row">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7752.102173121101!2d100.56109612842783!3d13.71535575840763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1752259681953!5m2!1sth!2sth" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-aos="flip-left"></iframe>
            <form onSubmit={handleSubmit} data-aos="flip-right">
              <h3>get in touch</h3>
              <input type="text" name="name" required maxLength={50} placeholder="enter your name" className="box" value={name} onChange={e => setName(e.target.value)} />
              <input type="email" name="email" required maxLength={50} placeholder="enter your email" className="box" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="number" name="number" required maxLength={10} min={0} max={9999999999} placeholder="enter your number" className="box" value={number} onChange={e => setNumber(e.target.value)} />
              <textarea name="message" className="box" required maxLength={1000} cols={30} rows={10} value={message} onChange={e => setMessage(e.target.value)}></textarea>
              <input type="submit" value="send message" name="send" className="btn" />
            </form>
          </div>
          <div className="grid">
            <div className="box" data-aos="fade-up">
              <i className="fas fa-phone"></i>
              <h3>phone number</h3>
              <a href="tel:664567890">+66-456-7890</a>
              <a href="tel:662223333">+66-222-3333</a>
            </div>
            <div className="box" data-aos="fade-up">
              <i className="fas fa-envelope"></i>
              <h3>email address</h3>
              <a href="mailto:shaikhanas@gmail.com">sbeakjib@gmail.come</a>
              <a href="mailto:anasbhai@gmail.com">tazzyodev@gmail.come</a>
            </div>
            <div className="box" data-aos="fade-up">
              <i className="fas fa-map-marker-alt"></i>
              <h3>office address</h3>
              <a href="#">21/77 kankhehaklongtoey klongtoey
              klongtoey Bangkok 10110 Thailand</a>
            </div>
          </div>
          <div className="credit">
            &copy; copyright @ 2025 by <span>tazzyodev</span> | all rights reserved!
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;