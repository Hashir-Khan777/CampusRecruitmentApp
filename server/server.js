const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const courseRouter = require('./routers/CourseRouter');
const diplomaRouter = require('./routers/DiplomaRouter');
const userRouter = require('./routers/UserRouter');

const app = express();

app.use(bodyparser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/CampusRecruitmentApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/courses', courseRouter);
app.use('/api/diplomas', diplomaRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
});

app.listen(4000);
