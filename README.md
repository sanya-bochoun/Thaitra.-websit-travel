# Thaitra Travel Website

เว็บท่องเที่ยวตัวอย่าง (Fullstack) ด้วย React + TypeScript (Frontend) และ Node.js/Express + MongoDB (Backend)

## โครงสร้างโปรเจค

```
├── backend/                # โค้ดฝั่งเซิร์ฟเวอร์ (Node.js/Express)
│   ├── models/             # Mongoose models (Tour, Contact, ...)
│   ├── server.js           # Entry point backend
│   └── .env                # (สร้างเอง) สำหรับ MONGO_URI
├── react-travel/           # โค้ดฝั่งลูกค้า (React + TypeScript)
│   ├── src/components/     # React Components
│   ├── src/style.css       # สไตล์หลัก
│   └── ...
└── README.md
```

## วิธีติดตั้งและรัน (Local)

### 1. ติดตั้ง MongoDB (ถ้ายังไม่มี)
- ดาวน์โหลดและติดตั้ง [MongoDB Community](https://www.mongodb.com/try/download/community)
- รัน MongoDB service ให้พร้อมใช้งาน (ปกติที่ `mongodb://localhost:27017`)

### 2. เตรียม backend
```sh
cd backend
npm install
```

สร้างไฟล์ `.env` ในโฟลเดอร์ backend:
```
MONGO_URI=mongodb://localhost:27017/travel
```

### 3. เตรียม frontend
```sh
cd ../react-travel
npm install
```

### 4. รันระบบ
- รัน backend:
  ```sh
  cd backend
  npm run dev
  ```
- รัน frontend:
  ```sh
  cd ../react-travel
  npm run dev
  ```

## การ import ข้อมูลทัวร์ตัวอย่าง
1. สร้างไฟล์ `tours.json` (copy JSON ตัวอย่างจากในแชทนี้)
2. ใช้ MongoDB Compass หรือคำสั่ง:
   ```sh
   mongoimport --db travel --collection tours --file tours.json --jsonArray
   ```

## การใช้งาน
- เปิดเว็บที่ [http://localhost:5173](http://localhost:5173)
- ค้นหาทัวร์จากหน้า Home (ค้นหาได้ทั้งแบบกรอกเฉพาะจังหวัด หรือเลือกวันที่ด้วย)
- ข้อมูลจะถูกดึงจาก backend (Node.js/Express) และแสดงผลแบบสวยงาม
- สามารถดูตัวอย่าง API ได้ที่ backend/server.js

## ฟีเจอร์หลัก
- ค้นหาทัวร์ (GET /api/tours)
- บันทึกข้อมูลติดต่อ (POST /api/contact)
- ระบบแยก frontend/backend ชัดเจน
- ใช้ Cloudinary สำหรับเก็บรูปภาพทัวร์
- **Responsive Hamburger Menu** (เมนู ☰ สำหรับจอเล็ก)

## วิธีเพิ่ม Font Awesome (สำหรับ hamburger menu)
1. เปิดไฟล์ `react-travel/public/index.html`
2. เพิ่มบรรทัดนี้ใน `<head>`:
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
   ```
3. Save แล้วรีเฟรชหน้าเว็บ

## Troubleshooting (ปัญหาที่พบบ่อย)
- **Hamburger menu ไม่แสดง:**
  - ตรวจสอบว่าเพิ่ม Font Awesome ใน index.html แล้ว
  - รีเฟรช cache (Ctrl+F5)
  - ย่อหน้าจอให้ต่ำกว่า 769px
- **API ไม่ตอบสนองหลัง deploy:**
  - ตรวจสอบ log ของ Render ว่าเชื่อมต่อ MongoDB Atlas สำเร็จหรือไม่
  - ตรวจสอบว่า MONGO_URI ถูกต้อง และ whitelist IP แล้ว
  - ตรวจสอบว่าเลือก root directory เป็น backend
- **Frontend fetch ไม่เจอ backend:**
  - ตรวจสอบว่า fetch ไปที่ URL ของ backend ที่ Render จริง
  - ตั้งค่า CORS ใน backend ให้รองรับ origin ของ frontend

## หมายเหตุ
- สามารถปรับแต่งข้อมูลทัวร์, เพิ่มฟีเจอร์, หรือเปลี่ยนดีไซน์ได้ตามต้องการ
- หากต้องการ deploy ขึ้น production แนะนำให้ใช้ MongoDB Atlas และบริการ hosting เช่น Vercel, Render, Railway

---

**สร้างโดย: [tazzyodev](mailto:tazzyodev@gmail.com)** 