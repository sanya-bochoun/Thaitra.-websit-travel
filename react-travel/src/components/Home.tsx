import React, { useState } from "react";
import Header from "./Header";

const Home: React.FC = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { location, date, guests };
    try {
      const res = await fetch("http://localhost:5000/api/tour-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert("บันทึกข้อมูลสำเร็จ!");
        setLocation("");
        setDate("");
        setGuests(1);
      } else {
        alert("เกิดข้อผิดพลาด");
      }
    } catch (err) {
      alert("เกิดข้อผิดพลาด");
    }
  };

  return (
    <>
      <Header />
      <div className="container home" data-aos="zoom-out">
        <section className="flex" data-aos="zoom-in" data-aos-delay="600">
          <form onSubmit={handleSubmit}>
            <h3>search your tour</h3>
            <p>where to</p>
            <input type="text" name="location" required maxLength={50} placeholder="enter tour location" className="box" value={location} onChange={e => setLocation(e.target.value)} />
            <p>when to</p>
            <input type="date" name="date" className="box" required value={date} onChange={e => setDate(e.target.value)} />
            <p>how many</p>
            <input type="number" name="guests" min={1} max={10} maxLength={2} placeholder="number of guests" required className="box" value={guests} onChange={e => setGuests(Number(e.target.value))} />
            <input type="submit" value="search tour" name="search" className="btn" />
          </form>
        </section>
      </div>
    </>
  );
};

export default Home; 