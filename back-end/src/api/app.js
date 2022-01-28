const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginRouter = require('./routes/loginRouter');
const usersRouter = require('./routes/usersRouter');
const productRouter = require('./routes/productRouter');
const salesRouter = require('./routes/salesRouter');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
};

const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(express.static('public'));

app.use('/login', loginRouter);
app.use('/user', usersRouter);
app.use('/products', productRouter);
app.use('/checkout', salesRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
