const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  courseId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  studentId: { 
    type: String, 
    default: 'dummyStudent123',
    required: true 
  },
  enrollmentDate: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);