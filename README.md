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

## หมายเหตุ
- สามารถปรับแต่งข้อมูลทัวร์, เพิ่มฟีเจอร์, หรือเปลี่ยนดีไซน์ได้ตามต้องการ
- หากต้องการ deploy ขึ้น production แนะนำให้ใช้ MongoDB Atlas และบริการ hosting เช่น Vercel, Render, Railway

---

**สร้างโดย: [tazzyodev](mailto:tazzyodev@gmail.com)** 