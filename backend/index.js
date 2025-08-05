const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/courses', require('./routes/courses'));
app.use('/api/enrollments', require('./routes/enrollments'));

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


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
