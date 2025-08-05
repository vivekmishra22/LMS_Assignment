const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path"); 
require('dotenv').config();

const courseRoutes = require('./routes/courses');
const enrollmentRoutes = require('./routes/enrollments');

const app = express();

// CORS Configuration (update with your frontend URLs)
const corsOptions = {
  origin: ['http://localhost:5173', 'https://your-netlify-app.netlify.app'],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// API Info Endpoint
app.get('/', (req, res) => {
  res.json({
    message: "LMS Backend API",
    endpoints: {
      courses: "/api/courses",
      enrollments: "/api/enrollments"
    }
  });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB error:', err));

// Static Files (updated path resolution)
app.use(express.static(path.join(path.resolve(), "frontend/dist")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require("path"); 
// require('dotenv').config();


// // Routes
// // app.use('/api/courses', require('./routes/courses'));
// // app.use('/api/enrollments', require('./routes/enrollments'));

// const courseRoutes = require('./routes/courses');
// const enrollmentRoutes = require('./routes/enrollments');

// const app = express();

// const __dirname = path.resolve();

// const corsOptions = {
//   origin: ['http://localhost:5173', 'https://your-netlify-app.netlify.app'],
//   credentials: true
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// app.use('/api/courses', courseRoutes);
// app.use('/api/enrollments', enrollmentRoutes);

// app.get('/', (req, res) => {
//   res.json({
//     message: "LMS Backend API",
//     endpoints: {
//       courses: "/api/courses",
//       enrollments: "/api/enrollments"
//     }
//   });
// });

// // app.get('/', (req, res) => {
// //   res.send('Course Listing and Enrollment API is running.');
// // });


// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('MongoDB error:', err));

// app.use(express.static(path.join(__dirname, "/frontend/dist")));
    
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
