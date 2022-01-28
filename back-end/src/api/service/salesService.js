const { Sale } = require('../../database/models');

const createSale = async (sale) => {
  try {
    const create = await Sale.create(sale);
    return create;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createSale };