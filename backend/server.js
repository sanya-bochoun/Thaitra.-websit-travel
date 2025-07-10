const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// เชื่อมต่อ MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('เชื่อมต่อ MongoDB Atlas สำเร็จ!'))
  .catch(err => console.error('เชื่อมต่อ MongoDB ไม่สำเร็จ:', err));

// ตัวอย่าง API
app.get('/', (req, res) => {
  res.send('API พร้อมใช้งาน');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server เริ่มที่พอร์ต ${PORT}`)); 