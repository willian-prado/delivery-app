const { Product } = require('../../database/models');

const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getAllProducts };
