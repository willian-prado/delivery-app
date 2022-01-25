const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./routes/loginRouter');
const usersRouter = require('./routes/usersRouter');

const app = express();

app.use(bodyParser.json());

app.use('/login', loginRouter);
app.use('/user', usersRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`auvindo porta ${PORT}`));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
