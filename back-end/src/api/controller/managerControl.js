const managerService = require('../service/managerService');

const createSeller = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const seller = { name, email, password };
    const createNewSeller = await managerService.createNewSeller(seller);
    return res.status(201).json(createNewSeller);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = {
  createSeller,
};