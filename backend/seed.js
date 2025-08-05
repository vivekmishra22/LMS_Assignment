const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const courses = [
  // {
  //   title: "React Fundamentals",
  //   description: "Learn React from scratch",
  //   instructor: "Abc",
  //   duration: "4 weeks"
  // },
  // {
  //   title: "Node.js Basics",
  //   description: "Introduction to backend development",
  //   instructor: "Xyz",
  //   duration: "3 weeks"
  // },
  {
    title: "MongoDB Essentials",
    description: "Master MongoDB queries and aggregation",
    instructor: "John Doe",
    duration: "2 weeks"
  },
  {
    title: "Express.js Mastery",
    description: "Learn to build powerful REST APIs with Express",
    instructor: "Jane Smith",
    duration: "3 weeks"
  },
  {
    title: "Full-Stack MERN Project",
    description: "Build and deploy a full-stack application",
    instructor: "Dev Mentor",
    duration: "5 weeks"
  },
  {
    title: "HTML & CSS Basics",
    description: "Foundation for building websites",
    instructor: "Emily Rose",
    duration: "2 weeks"
  },
  {
    title: "JavaScript Advanced",
    description: "Deep dive into modern JavaScript",
    instructor: "David Lee",
    duration: "4 weeks"
  },
  {
    title: "Version Control with Git",
    description: "Understand Git workflows and GitHub",
    instructor: "Mark Stone",
    duration: "1 week"
  },
  {
    title: "Deployment with Render & Netlify",
    description: "Host frontend and backend apps online",
    instructor: "Vivek Mishra",
    duration: "1.5 weeks"
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