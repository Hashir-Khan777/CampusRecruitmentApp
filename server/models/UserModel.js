const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  number: {
    type: Number,
    requred: [true, 'mobile number is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  roll: {
    type: Number,
    requred: [true, 'roll number is required'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
