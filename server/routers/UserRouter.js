const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../Utils.js');
const User = require('../models/UserModel.js');

const userRouter = express.Router();

userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      number: req.body.number,
      email: req.body.email,
      password: req.body.password,
      roll: req.body.roll,
    });
    const created_user = await user.save();
    res.send({
      _id: created_user._id,
      name: created_user.name,
      number: created_user.number,
      email: created_user.email,
      password: created_user.password,
      roll: created_user.roll,
      token: generateToken(created_user),
    });
  }),
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if (user) {
      if (req.body.password === user.password) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          roll: user.roll,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({message: 'Invalid user email or password'});
  }),
);

module.exports = userRouter;
