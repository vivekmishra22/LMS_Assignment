const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

const getMyEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ studentId: 'dummyStudent123' })
      .populate('courseId');
    res.status(200).json(enrollments.map(e => e.courseId));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch enrollments' });
  }
};

const createEnrollment = async (req, res) => {
  try {
    const { courseId } = req.body;
    
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    const existing = await Enrollment.findOne({ 
      courseId, 
      studentId: 'dummyStudent123' 
    });
    if (existing) return res.status(400).json({ error: 'Already enrolled' });

    const enrollment = new Enrollment({ courseId });
    await enrollment.save();
    res.status(201).json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Enrollment failed' });
  }
};

module.exports = { getMyEnrollments, createEnrollment };