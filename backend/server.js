const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const courseRoutes = require('./routes/courses');
const enrollmentRoutes = require('./routes/enrollments');

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'https://lmsasignment.netlify.app/', // Your Netlify URL
    'http://localhost:3000' // For local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'API is running',
    endpoints: {
      courses: '/api/courses',
      enrollments: '/api/enrollments'
    },
    timestamp: new Date().toISOString()
  });
});

// Improved MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  w: 'majority'
})
.then(() => console.log('✔ Connected to MongoDB'))
.catch(err => {
  console.error('✖ MongoDB connection error:', err);
  process.exit(1);
});

// Centralized error handling
app.use((err, req, res, next) => {
  console.error('⚠ Error:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message || 'Something went wrong'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}`);
});

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// // Routes
// // app.use('/api/courses', require('./routes/courses'));
// // app.use('/api/enrollments', require('./routes/enrollments'));

// const courseRoutes = require('./routes/courses');
// const enrollmentRoutes = require('./routes/enrollments');

// const app = express();
// app.use(cors());
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

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
