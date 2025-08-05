import axios from 'axios';

// const API = axios.create({ baseURL: 'https://lms-t1j5.onrender.com' });
const API = axios.create({ baseURL: 'http://localhost:8000' });

export const fetchCourses = () => API.get('/api/courses');
export const fetchEnrolledCourses = () => API.get('/api/enrollments/me');
export const enrollCourse = (courseId) => API.post('/api/enrollments', { courseId });