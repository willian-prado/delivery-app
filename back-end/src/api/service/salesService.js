const { Sale, SalesProduct, Product, User } = require('../../database/models');

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

const getSalesService = async (id, role) => {
  try {
    if (role === 'seller') {
      const sales = await Sale.findAll({ where: { sellerId: id } });
      return sales;
    }
    const sales = await Sale.findAll({ where: { userId: id } });
    return sales;
  } catch (error) {
    throw new Error(error);
  }
};

const getSaleByIdService = async (id) => {
  try {
    const sale = await Sale.findOne(
      { where: { id },
        include: [
          { model: Product, as: 'products', through: { attributes: ['quantity'] } },
          { 
            model: User,
            as: 'Seller',
            atributes: { include: ['id', 'name', 'role'] } },
          { model: User, as: 'Customer', atributes: { include: ['id', 'name', 'role'] } },
        ],
      },
    );
    return sale;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createSale, createSalesProduct, getSalesService, getSaleByIdService };