const secretPassword = 'secret_key';
const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
  const { authorization } = req.headers;
  const { role } = jwt.verify(authorization, secretPassword);

  if (role !== 'administrator') {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};

module.exports = {
  isAdmin,
};