const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRouter = require('./routes/loginRouter');
const usersRouter = require('./routes/usersRouter');
require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
};

const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/login', loginRouter);
app.use('/user', usersRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
