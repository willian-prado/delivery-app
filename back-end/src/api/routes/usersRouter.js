const router = require('express').Router();

const {
  validateEmail,
  validatePassword,
} = require('../middleware/auth-middlewareUsers');

const { validateJWT } = require('../middleware/validateJWT');

const { createUser, getUsers } = require('../controller/usersControl');

router.post('/', validateEmail, validatePassword, createUser);
router.get('/', validateJWT, getUsers);

module.exports = router;
