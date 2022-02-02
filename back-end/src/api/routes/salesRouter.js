const router = require('express').Router();

const { validateJWT } = require('../middleware/validateJWT');

const {
  createSaleAndProduct,
  getSalesBySellerID,
  getSaleById,
  updateSaleStatus,
} = require('../controller/saleControl');

router.post('/', validateJWT, createSaleAndProduct);
router.get('/', validateJWT, getSalesBySellerID);
router.get('/:id', validateJWT, getSaleById);
router.put('/:id', validateJWT, updateSaleStatus);

module.exports = router;
