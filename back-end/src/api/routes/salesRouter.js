const router = require('express').Router();

const { validateJWT } = require('../middleware/validateJWT');

const { createSaleAndProduct } = require('../controller/saleControl');

router.post('/', validateJWT, createSaleAndProduct);

module.exports = router;
