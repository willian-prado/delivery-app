const router = require('express').Router();

const {
  validateEmail,
  validatePassword,
} = require('../middleware/auth-middlewareUsers');

const { createUser } = require('../controller/usersControl');

router.post('/', validateEmail, validatePassword, createUser);

module.exports = router;
