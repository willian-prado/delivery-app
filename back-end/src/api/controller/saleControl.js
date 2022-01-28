const {
  createSale,
  createSalesProduct,
} = require('../service/salesService');

const createSaleAndProduct = async (req, res) => {
  try {
    const { sale, saleProduct } = req.body;
  
    const { dataValues: { id } } = await createSale(sale);

    saleProduct.forEach(
      async (xablay) => createSalesProduct({ ...xablay, id }),
    );

    return res.status(201).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createSaleAndProduct };