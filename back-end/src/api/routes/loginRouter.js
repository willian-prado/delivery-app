const router = require('express').Router();

const {
  validateEmailLogin,
  validatePasswordLogin,
} = require('../middleware/auth-middlewareLogin');

const { createLogin } = require('../controller/loginControl');

router.post('/', validateEmailLogin, validatePasswordLogin, createLogin);

module.exports = router;
