const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

const secretPassword = 'secret_key';

module.exports = (user) => jwt.sign(user.dataValues, secretPassword, jwtConfig);