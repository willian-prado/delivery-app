const productServices = require('../service/productService');

const getProduct = async (req, res) => {
  try {
    const getAllProducts = await productServices.getAllProducts();
    return res.status(200).json(getAllProducts);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { getProduct };