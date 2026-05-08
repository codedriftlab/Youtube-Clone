# YouTube Clone MERN Project

YouTube clone project that mimics the look and feel of YouTube. Built with [React / HTML / CSS / JavaScript] — featuring video browsing, playback, and a responsive layout.

### Technologies Used

* MongoDB
* Express.js
* React.js
* Node.js
* JWT Authentication
* Axios
* React Router DOM
* CSS

---

# Features

## Authentication

* User Registration
* User Login
* JWT Token Authentication
* Logout Functionality

## Homepage

* Dynamic Videos from MongoDB
* Responsive Video Grid
* Sidebar Navigation
* Header Section
* Category Filter Buttons
* Search Videos by Title

## Video Player

* Watch Videos
* Like Video
* Dislike Video
* Autoplay Video
* Responsive Video Player

## UI Features

* YouTube Style Layout
* Responsive Design
* Hover Effects
* Sidebar

---

# Project Structure

```bash
frontend/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── VideoCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── VideoPlayer.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── styles/
│   │   ├── home.css
│   │   ├── header.css
│   │   ├── sidebar.css
│   │   ├── player.css
│   │   └── videoCard.css
│   │
│   └── App.jsx
│
backend/
│
├── controllers/
│   ├── authController.js
│   └── videoController.js
│
├── middleware/
│   ├── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Video.js
│
├── routes/
│   ├── authRoutes.js
│   ├── videoRoutes.js
│   └── uploadRoutes.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
└── package.json
```

---

# Installation

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# API Routes

## Authentication

```bash
POST /api/auth/register
POST /api/auth/login
```

---

# MongoDB Sample Video Data

```json
{
  "title": "JavaScript Tutorial",
  "description": "Learn JavaScript basics",
  "thumbnailUrl": "https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
  "videoUrl": "https://media.w3.org/2010/05/bunny/trailer.mp4",
  "category": "Programming",
  "views": 12000,
  "likes": 800,
  "dislikes": 10
}
```

---

# Author

Manglesh

---

# Conclusion

This MERN YouTube Clone project demonstrates full-stack web development using React, Node.js, Express, and MongoDB. It includes authentication, video management, searching, filtering, and responsive UI features similar to YouTube.
