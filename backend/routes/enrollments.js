const express = require ('express');
const { getMyEnrollments, createEnrollment } = require ('../controllers/enrollmentController');
const router = express.Router()

router.get('/me', getMyEnrollments);
router.post('/', createEnrollment);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const enrollmentController = require('../controllers/enrollmentController');

// router.get('/me', enrollmentController.getMyEnrollments);
// router.post('/', enrollmentController.createEnrollment);

// module.exports = router;