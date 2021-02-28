const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data.js');
const Course = require('../models/CourseModel');

const courseRouter = express.Router();

courseRouter.get(
  '/courseSeed',
  expressAsyncHandler(async (req, res) => {
    // await Course.remove({});
    // const craeteCourse = await Course.insertMany(data.courses);
    res.send({craeteCourse});
  }),
);

courseRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const Courses = await Course.find({});
    res.send(Courses);
  }),
);

module.exports = courseRouter;
