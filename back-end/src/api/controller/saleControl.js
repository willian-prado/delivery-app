const { createSale } = require('../service/salesService');

const create = async (req, res) => {
  try {
    const { sale } = req.body;
  
    const creatingSale = await createSale(sale);
    return res.status(200).json(creatingSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { create };