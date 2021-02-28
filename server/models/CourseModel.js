const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  image: {
    type: String,
    required: [true, 'image is required'],
  },
  courseId: {
    type: Number,
    required: [true, 'id is reuired'],
  },
});

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
