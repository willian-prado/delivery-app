const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./routes/loginRouter');
const usersRouter = require('./routes/usersRouter');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/login', loginRouter);
app.use('/user', usersRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
