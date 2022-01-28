const {
  createSale,
  createSalesProduct,
} = require('../service/salesService');

const createSaleAndProduct = async (req, res) => {
  try {
    const { sale, saleProduct } = req.body;
  
    await createSale(sale);
    await createSalesProduct(saleProduct);

    return res.status(201);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createSaleAndProduct };