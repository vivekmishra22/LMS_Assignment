const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const courses = [
  {
    title: "React Fundamentals",
    description: "Learn React from scratch",
    instructor: "Abc",
    duration: "4 weeks"
  },
  {
    title: "Node.js Basics",
    description: "Introduction to backend development",
    instructor: "Xyz",
    duration: "3 weeks"
  }
];

Course.insertMany(courses)
  .then(() => {
    console.log('Courses seeded successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Seeding error:', err);
    mongoose.disconnect();
  });