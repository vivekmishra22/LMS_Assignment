# 📚 LMS Course Listing & Student Enrollment App

This is a full-stack MERN (MongoDB, Express, React, Node.js) web application that allows users to:
- View available courses.
- Enroll in courses.
- Manage course and enrollment data through a backend API.

The project is divided into:
- **Frontend** (React) – Deployed on Netlify  
- **Backend** (Node.js + Express + MongoDB) – Deployed on Render

---

## 🚀 Live Links

- **Frontend:** https://lmsasignment.netlify.app
- **Backend API:** https://lms-t1j5.onrender.com

---

## 📂 Project Structure

LMS_Assignment/
├── backend/ # Node.js + Express API
│ ├── config/ # Database configuration
│ ├── controllers/ # Business logic
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API endpoints
│ ├── .env.example # Environment template
│ └── server.js # Entry point
├── frontend/ # React application
│ ├── public/ # Static files
│ ├── src/ # React components
│ │ ├── api/ # API service
│ │ └── App.js # Main component
│ └── .env.example # Frontend env template
└── README.md # You are here

---

## 🧑‍💻 How to Run the Project Locally

### 🔧 Prerequisites
Make sure you have the following installed:

- Node.js (v18+)
- npm or yarn
- MongoDB Atlas (or local MongoDB for development)

### 1. Clone Repository
```bash
git clone https://github.com/vivekmishra22/LMS_Assignment.git

---

### 📦 Backend Setup

1. **Navigate to backend folder**
   ```bash
   cd backend

#  Install dependencies

-   npm install

### 🔗 API Endpoints

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| GET    | `/api/courses`        | Get all courses       |
| GET    | `/api/enrollments/me` | Get user enrollments  |
| POST   | `/api/enrollments`    | Enroll in a course    |

# Notes
Uses dummyStudent123 as hardcoded student ID for testing
Backend auto-restarts on changes with nodemon

# Configure API URL
Make sure your API base URL is set to your backend's URL. In your code (e.g., inside Axios or fetch calls), point to:

http://localhost:8000    # for local development

For production: https://lms-t1j5.onrender.com

# Run the app
npm start


# Client will be running at
http://localhost:3000

# Technologies Used
Frontend: React.js, TailwindCSS (or CSS), Axios

Backend: Node.js, Express.js, MongoDB, Mongoose

Hosting: Netlify (frontend), Render (backend)

Tools: Postman for testing API, GitHub for version control

# Brief Explanation
✔️ Key Design Decisions
The backend was structured using MVC for clarity and maintainability.
Used Mongoose to simplify MongoDB interactions.
Divided frontend and backend into separate folders to make deployment and development easier.

# Challenges Faced
Deployment Issues: Render’s cold start delays were fixed using proper CORS and timeout settings.
Env Setup: Ensured .env variables were never pushed and documented them properly.
Axios baseURL conflicts: Solved by using environment-based config for development/production.

## 🧠 What I Learned

- Full-cycle development: from local development to live deployment.
- Importance of clean folder structure and environment-based configuration.
- Hosting and deployment best practices using Netlify & Render.
