const router = require('express').Router();

const {
  validateEmailLogin,
  validatePasswordLogin,
} = require('../middleware/auth-middlewareLogin');

const { isAdmin } = require('../middleware/auth-manager');

const { createSeller } = require('../controller/managerControl');

router.post('/',
  validateEmailLogin,
  validatePasswordLogin,
  isAdmin,
  createSeller);

module.exports = router;