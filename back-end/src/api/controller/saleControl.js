const {
  createSale,
  createSalesProduct,
  getSalesService,
  getSaleByIdService,
  updateSaleStatusService,
} = require('../service/salesService');

const getSellerId = require('../middleware/getSellerId');

const createSaleAndProduct = async (req, res) => {
  try {
    const { sale, saleProduct } = req.body;
  
    const { dataValues: { id } } = await createSale(sale);

    saleProduct.forEach(
      async (newSale) => createSalesProduct({ ...newSale, id }),
    );

    return res.status(201).send({ id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSalesBySellerID = async (req, res) => {
  try {
    const { authorization } = req.headers;
    
    const { id, role } = getSellerId(authorization);
    console.log(id, role);

    if (!id) {
      return res.status(404).json({ message: 'Invalid User' });
    }

    const sales = await getSalesService(id, role);

    res.status(200).json({ sales });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;

    const sale = await getSaleByIdService(id);
    
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }

    res.status(200).json(sale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSaleStatus = async (req, res) => {
  try { 
    const { id } = req.params;
    const { status } = req.body;

    const updatedSale = await updateSaleStatusService(id, status);

    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = { createSaleAndProduct, getSalesBySellerID, getSaleById, updateSaleStatus };