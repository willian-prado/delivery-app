const router = require('express').Router();

const {
  validateEmail,
  validatePassword,
} = require('../middleware/auth-middlewareUsers');

const { isAdmin } = require('../middleware/auth-manager');

const { validateJWT } = require('../middleware/validateJWT');

const { createUser, getUsers, deleteUser } = require('../controller/usersControl');

router.post('/', validateEmail, validatePassword, createUser);
router.get('/', validateJWT, getUsers);
router.delete('/', isAdmin, validateJWT, deleteUser);

module.exports = router;
