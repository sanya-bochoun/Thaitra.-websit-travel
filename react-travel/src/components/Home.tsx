import React, { useState } from "react";
import Header from "./Header";

interface Tour {
  _id?: string;
  name: string;
  description: string;
  location: string;
  price: number;
  image?: string;
  date: string;
}

const Home: React.FC = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const url = `http://localhost:5000/api/tours?location=${encodeURIComponent(location)}&date=${encodeURIComponent(date)}&guests=${guests}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setTours(data);
      } else {
        alert("เกิดข้อผิดพลาด");
      }
    } catch {
      alert("เกิดข้อผิดพลาด");
    }
    setLoading(false);
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
            <input type="date" name="date" className="box" value={date} onChange={e => setDate(e.target.value)} placeholder="เลือกวันที่ (ถ้าไม่เลือกจะค้นหาทั้งหมด)" />
            <p>how many</p>
            <input type="number" name="guests" min={1} max={10} maxLength={2} placeholder="number of guests" required className="box" value={guests} onChange={e => setGuests(Number(e.target.value))} />
            <input type="submit" value={loading ? "searching..." : "search tour"} name="search" className="btn" disabled={loading} />
          </form>
        </section>
        {tours.length > 0 && (
          <section className="tours-result">
            <h2 className="heading">ผลลัพธ์ทัวร์</h2>
            <div className="grid">
              {tours.map((tour) => (
                <div className="box" key={tour._id}>
                  <div className="tour-title">{tour.name}</div>
                  <div className="tour-location">{tour.location}</div>
                  <div className="tour-date">วันที่: {new Date(tour.date).toLocaleDateString()}</div>
                  <div className="tour-price">ราคา: {tour.price} บาท</div>
                  {tour.image && <img src={tour.image} alt={tour.name} />}
                  <div className="tour-desc">{tour.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Home; 