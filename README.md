# 🏖️ Thaitra Travel Website

A fullstack travel website built with React + TypeScript (Frontend) and Node.js/Express + MongoDB (Backend).

---

## 📁 Project Structure

```
├── backend/                # Node.js/Express API
│   ├── models/             # Mongoose models
│   ├── server.js           # Backend entry point
│   └── .env                # For MONGO_URI
├── react-travel/           # React + TypeScript Frontend
│   ├── src/components/     # React Components
│   ├── public/images/      # Images & favicon
│   └── ...
└── README.md
```

---

## 🚀 Technologies Used

- **Frontend:** React 18, TypeScript, Vite, React Router, Tailwind CSS, Font Awesome
- **Backend:** Node.js, Express, MongoDB, Mongoose, CORS, dotenv
- **Deployment:** Render (backend), MongoDB Atlas (cloud DB), Vercel (frontend)

---

## 🛠️ Installation & Usage

### 1. Install MongoDB (if not already)
- Download and install [MongoDB Community](https://www.mongodb.com/try/download/community)
- Start MongoDB service (default: `mongodb://localhost:27017`)

### 2. Setup Backend
```sh
cd backend
npm install
```
Create a `.env` file in `backend/`:
```
MONGO_URI=mongodb://localhost:27017/travel
```

### 3. Setup Frontend
```sh
cd ../react-travel
npm install
```

### 4. Run the Project
- Start backend:
  ```sh
  cd backend
  npm run dev
  ```
- Start frontend:
  ```sh
  cd ../react-travel
  npm run dev
  ```
- Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📊 Importing Sample Tour Data

1. Create a `tours.json` file (see sample in repo or chat)
2. Use MongoDB Compass or run:
   ```sh
   mongoimport --db travel --collection tours --file tours.json --jsonArray
   ```

---

## 🔌 API Endpoints

### Tours
- `GET /api/tours` — Get all tours or search by location/date
- `GET /api/tours?location=Phuket` — Search tours by location

### Contact
- `POST /api/contact` — Submit contact form
- `GET /api/contact` — Get all contact messages

---

## 🌟 Features

- Search tours by location and date
- Contact form with backend storage
- Responsive hamburger menu
- Cloudinary for tour images
- Modern UI/UX, mobile-friendly

---

## 🖼️ Responsive & UI/UX

- Supports Desktop, Tablet, Mobile
- Hamburger menu for small screens
- Tailwind CSS + Font Awesome for styling

---

## 🛠️ Troubleshooting

- **API not responding:** Check MONGO_URI, CORS, backend logs
- **Hamburger menu not showing:** Ensure Font Awesome is included in `index.html`
- **No data displayed:** Make sure you are connected to the correct MongoDB instance (local/Atlas)
- **Frontend can't reach backend:** Check CORS and API URL

---

## 🚀 Deployment

- **Backend:** Render (set root directory, MONGO_URI, start command)
- **Frontend:** Vercel (import repo, auto deploy)
- **Database:** MongoDB Atlas (import data, whitelist IP)

---

## 📄 License

MIT License

---

## 🙋 Contact

- Created by: [tazzyodev](mailto:tazzyodev@gmail.com)
- For issues or questions, open an Issue on GitHub or contact the maintainer.

---

**ภาษาไทย:**

- เว็บนี้เป็นตัวอย่างเว็บท่องเที่ยว Fullstack (React + Node.js + MongoDB)
- วิธีติดตั้ง, import ข้อมูล, และ deploy อธิบายไว้ครบถ้วนด้านบน
- สามารถปรับแต่งข้อมูล, เพิ่มฟีเจอร์, หรือเปลี่ยนดีไซน์ได้ตามต้องการ 