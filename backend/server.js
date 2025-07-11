const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// เชื่อมต่อ MongoDB local
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ [MongoDB] เชื่อมต่อ MongoDB (local) สำเร็จ! 🚀'))
  .catch(err => console.error('❌ [MongoDB] เชื่อมต่อ MongoDB ไม่สำเร็จ:', err));

const TourSearch = require('./models/TourSearch');
const Contact = require('./models/Contact');

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