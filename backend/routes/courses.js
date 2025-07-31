const express = require ('express');
const { getAllCourses } = require ('../controllers/courseController');
const router = express.Router()

router.get('/', getAllCourses);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const courseController = require('../controllers/courseController');

// router.get('/', courseController.getAllCourses);

// module.exports = router;