const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diplomaSchema = new Schema({
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

const DiplomaModel = mongoose.model('Diploma', diplomaSchema);

module.exports = DiplomaModel;
