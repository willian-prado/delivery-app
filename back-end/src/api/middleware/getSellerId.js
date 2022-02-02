const jwt = require('jsonwebtoken');

const secretPassword = 'secret_key';

module.exports = (authorization) => {
  const { id, role } = jwt.verify(authorization, secretPassword);

  return { id, role };
};
