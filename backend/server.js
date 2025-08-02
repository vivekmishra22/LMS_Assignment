const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes
// app.use('/api/courses', require('./routes/courses'));
// app.use('/api/enrollments', require('./routes/enrollments'));

const courseRoutes = require('./routes/courses');
const enrollmentRoutes = require('./routes/enrollments');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

app.get('/', (req, res) => {
  res.json({
    message: "LMS Backend API",
    endpoints: {
      courses: "/api/courses",
      enrollments: "/api/enrollments"
    }
  });
});

// app.get('/', (req, res) => {
//   res.send('Course Listing and Enrollment API is running.');
// });


// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
