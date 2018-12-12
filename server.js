require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//BodyParser Middleware

app.use(bodyParser.json());

const db = process.env.MLAB_URI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

const port = process.env.PORT;

app.listen(port, () => console.log(`server started on port ${port}`));