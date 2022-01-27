const router = require('express').Router();

const { validateJWT } = require('../middleware/validateJWT');

const { getProduct } = require('../controller/productControl');

router.get('/', validateJWT, getProduct);

module.exports = router;
