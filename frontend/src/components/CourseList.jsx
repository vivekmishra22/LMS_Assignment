import React, { useEffect, useState } from 'react';
import { fetchCourses, fetchEnrolledCourses, enrollCourse } from '../api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [coursesRes, enrollmentsRes] = await Promise.all([
          fetchCourses(),
          fetchEnrolledCourses()
        ]);
        setCourses(coursesRes.data);
        setEnrolledCourses(enrollmentsRes.data);
      } catch (err) {
        console.error('Error loading data:', err);
      }
    };
    loadData();
  }, []);

  const handleEnroll = async (courseId) => {
    try {
      await enrollCourse(courseId);
      const { data } = await fetchEnrolledCourses();
      setEnrolledCourses(data);
      alert('Enrolled successfully!');
    } catch (err) {
      alert('Enrollment failed: ' + (err.response?.data?.error || err.message));
    }
  };

  const isEnrolled = (courseId) => 
    enrolledCourses.some(c => c._id === courseId);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Available Courses</h1>
      {courses.map(course => (
        <div key={course._id} style={{ 
          border: '1px solid #ddd', 
          padding: '15px', 
          margin: '10px',
          borderRadius: '5px'
        }}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          
          {isEnrolled(course._id) ? (
            <button disabled style={{ background: '#ccc' }}>
              Enrolled
            </button>
          ) : (
            <button 
              onClick={() => handleEnroll(course._id)}
              style={{ background: '#4CAF50', color: 'white' }}
            >
              Enroll
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseList;