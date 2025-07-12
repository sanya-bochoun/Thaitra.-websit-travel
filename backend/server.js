const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// เชื่อมต่อ MongoDB (local หรือ Atlas)
const isAtlas = process.env.MONGO_URI && process.env.MONGO_URI.startsWith('mongodb+srv://');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    if (isAtlas) {
      console.log('✅ [MongoDB] เชื่อมต่อ MongoDB Atlas (Cloud) สำเร็จ! 🚀');
    } else {
      console.log('✅ [MongoDB] เชื่อมต่อ MongoDB (local) สำเร็จ! 🚀');
    }
  })
  .catch(err => console.error('❌ [MongoDB] เชื่อมต่อ MongoDB ไม่สำเร็จ:', err));

const TourSearch = require('./models/TourSearch');
const Contact = require('./models/Contact');
const Tour = require('./models/Tour');

// API สำหรับบันทึกข้อมูลค้นหาทัวร์
app.post('/api/tour-search', async (req, res) => {
  try {
    const tour = new TourSearch(req.body);
    await tour.save();
    res.status(201).json(tour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// API สำหรับดึงข้อมูลค้นหาทัวร์ทั้งหมด
app.get('/api/tour-search', async (req, res) => {
  try {
    const tours = await TourSearch.find().sort({ createdAt: -1 });
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API สำหรับค้นหาทัวร์ (GET /api/tours?location=...&date=...&guests=...)
app.get('/api/tours', async (req, res) => {
  try {
    const { location, date, guests } = req.query;
    let filter = {};
    if (location) {
      filter.location = { $regex: `^${location.trim()}$`, $options: 'i' };
    }
    if (date) {
      const start = new Date(date);
      start.setHours(0,0,0,0);
      const end = new Date(date);
      end.setHours(23,59,59,999);
      filter.date = { $gte: start, $lte: end };
    }
    console.log('[DEBUG] QUERY:', JSON.stringify(filter));
    const tours = await Tour.find(filter).sort({ date: 1 });
    console.log('[DEBUG] RESULT:', tours);
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API สำหรับบันทึกข้อมูลติดต่อ
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// API สำหรับดึงข้อมูลติดต่อทั้งหมด
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ตัวอย่าง API
app.get('/', (req, res) => {
  res.send('API พร้อมใช้งาน');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌐 [Server] Server พร้อมใช้งานที่ http://localhost:${PORT} ⚡️`)); 