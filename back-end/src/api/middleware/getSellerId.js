const jwt = require('jsonwebtoken');

const secretPassword = 'secret_key';

module.exports = (authorization) => {
  const { id } = jwt.verify(authorization, secretPassword);

  return id;
};
