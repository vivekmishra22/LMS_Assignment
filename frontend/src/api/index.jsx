import axios from 'axios';

// const API = axios.create({ baseURL: getBaseURL() });
const API = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://lms-assignment-lij5.onrender.com' // Always use Render in production
});

export const fetchCourses = () => API.get('/api/courses');
export const fetchEnrolledCourses = () => API.get('/api/enrollments/me');
export const enrollCourse = (courseId) => API.post('/api/enrollments', { courseId });