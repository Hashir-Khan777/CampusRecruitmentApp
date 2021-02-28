const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data.js');
const Diploma = require('../models/DiplomaModel.js');

const diplomaRouter = express.Router();

diplomaRouter.get(
  '/diplomaSeed',
  expressAsyncHandler(async (req, res) => {
    // await Diploma.remove({});
    // const craeteDiploma = await Diploma.insertMany(data.diplomas);
    res.send({craeteDiploma});
  }),
);

diplomaRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const diplomas = await Diploma.find({});
    res.send(diplomas);
  }),
);

module.exports = diplomaRouter;
