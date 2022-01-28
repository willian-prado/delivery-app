const { Sale, SalesProduct } = require('../../database/models');

const createSale = async (sale) => {
  try {
    const create = await Sale.create(sale);
    return create;
  } catch (error) {
    throw new Error(error);
  }
};

const createSalesProduct = async ({ id: saleId, product_id: productId, quantity }) => {
  try {
    const create = await SalesProduct.create({ saleId, productId, quantity });
    return create;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createSale, createSalesProduct };