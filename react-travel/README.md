# 🏖️ Thailand Travel Website

เว็บไซต์ท่องเที่ยวประเทศไทยที่สร้างด้วย React + TypeScript + Node.js + MongoDB

## 📋 โครงสร้างโปรเจค

```
react-travel/
├── src/                    # Frontend React Components
│   ├── components/         # Reusable Components
│   ├── pages/             # Page Components
│   └── main.tsx          # Entry Point
├── public/                # Static Files
│   └── images/           # Images & Favicon
├── backend/               # Backend API (Node.js/Express)
│   ├── models/           # MongoDB Models
│   ├── routes/           # API Routes
│   └── server.js         # Server Entry Point
└── README.md             # Project Documentation
```

## 🚀 เทคโนโลยีที่ใช้

### Frontend
- **React 18** + **TypeScript**
- **Vite** (Build Tool)
- **React Router** (Navigation)
- **Tailwind CSS** (Styling)
- **Font Awesome** (Icons)

### Backend
- **Node.js** + **Express**
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **CORS** (Cross-Origin)

### Deployment
- **Render** (Backend Hosting)
- **MongoDB Atlas** (Cloud Database)
- **Vercel** (Frontend Hosting)

## 🛠️ การติดตั้งและรัน

### 1. ติดตั้ง Dependencies

```bash
# Frontend
cd react-travel
npm install

# Backend
cd backend
npm install
```

### 2. ตั้งค่า Environment Variables

สร้างไฟล์ `.env` ใน backend:

```env
MONGO_URI=mongodb://localhost:27017/travel_db
PORT=5000
```

### 3. รัน Development Server

```bash
# Frontend (Terminal 1)
cd react-travel
npm run dev

# Backend (Terminal 2)
cd backend
npm run dev
```

เว็บไซต์จะเปิดที่: `http://localhost:5173`

## 📊 ฟีเจอร์หลัก

### 🏠 หน้าแรก (Home)
- Hero section พร้อมรูปภาพสวยงาม
- ฟอร์มค้นหาทัวร์ (วันที่, สถานที่)
- แสดงผลลัพธ์การค้นหาแบบ responsive

### 🗺️ หน้า Destinations
- แสดงสถานที่ท่องเที่ยวต่างๆ
- รูปภาพและข้อมูลครบถ้วน

### 🎒 หน้า Tours
- รายการทัวร์ทั้งหมด
- ข้อมูลราคา, ระยะเวลา, สถานที่

### 📞 หน้า Contact
- ฟอร์มติดต่อ
- ข้อมูลการติดต่อ

### ℹ️ หน้า About
- ข้อมูลเกี่ยวกับบริษัท
- ประวัติและบริการ

## 🗄️ ฐานข้อมูล MongoDB

### Models

#### Tour Model
```javascript
{
  title: String,
  location: String,
  price: Number,
  duration: String,
  image: String,
  description: String,
  startDate: Date,
  endDate: Date
}
```

#### Contact Model
```javascript
{
  name: String,
  email: String,
  message: String,
  createdAt: Date
}
```

## 🔌 API Endpoints

### Tours
- `GET /api/tours` - ดึงข้อมูลทัวร์ทั้งหมด
- `GET /api/tours?location=...&startDate=...&endDate=...` - ค้นหาทัวร์

### Contact
- `POST /api/contact` - ส่งข้อความติดต่อ
- `GET /api/contact` - ดึงข้อความติดต่อ

## 🚀 การ Deploy

### Backend (Render)
1. สร้าง account ที่ [Render.com](https://render.com)
2. Connect GitHub repository
3. ตั้งค่า:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:** `MONGO_URI` (MongoDB Atlas connection string)

### Frontend (Vercel)
1. สร้าง account ที่ [Vercel.com](https://vercel.com)
2. Import GitHub repository
3. Deploy อัตโนมัติ

## 📱 Responsive Design

เว็บไซต์รองรับทุกขนาดหน้าจอ:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (< 768px) - พร้อม Hamburger Menu

## 🎨 UI/UX Features

- **Modern Design** - ใช้ Tailwind CSS
- **Smooth Animations** - CSS transitions
- **Loading States** - สำหรับ API calls
- **Error Handling** - แสดงข้อความ error ที่เหมาะสม
- **Accessibility** - รองรับ screen readers

## 📸 ข้อมูลตัวอย่าง

โปรเจคมาพร้อมข้อมูลทัวร์ 40 รายการ:
- สถานที่ท่องเที่ยวทั่วประเทศไทย
- ราคาและระยะเวลาที่หลากหลาย
- รูปภาพจาก Cloudinary

## 🔧 การพัฒนาเพิ่มเติม

### เพิ่มข้อมูลทัวร์
```bash
# ใช้ MongoDB Compass หรือ
mongoimport --db travel_db --collection tours --file tours.json
```

### แก้ไข Styling
- ไฟล์ CSS หลัก: `src/style.css`
- Tailwind config: `tailwind.config.js`

### เพิ่ม API Endpoints
- สร้างไฟล์ใหม่ใน `backend/routes/`
- เพิ่มใน `backend/server.js`

## 📞 การติดต่อ

หากมีปัญหาหรือต้องการความช่วยเหลือ:
- สร้าง Issue ใน GitHub repository
- ติดต่อทีมพัฒนา

## 📄 License

MIT License - ดูรายละเอียดใน LICENSE file

---

**พัฒนาโดย:** ทีมพัฒนาเว็บไซต์ท่องเที่ยว  
**เวอร์ชัน:** 1.0.0  
**อัปเดตล่าสุด:** 2024
