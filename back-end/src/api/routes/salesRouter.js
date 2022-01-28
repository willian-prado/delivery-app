const router = require('express').Router();

const { validateJWT } = require('../middleware/validateJWT');

const { create } = require('../controller/saleControl');

router.post('/', validateJWT, create);

module.exports = router;
