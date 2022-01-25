const SalesProduct = (sequelize, DataTypes) => {
  module.exports = sequelize.define("SalesProduct", {
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  }, { timestamps: false });

  SalesProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale,
      {
        as: 'sales',
        foreignKey: 'sale_id',
        through: SalesProduct,
        otherKey: 'product_id'
      });
    models.Sale.belongsToMany(models.Product,
      {
        as: 'products',
        foreignKey: 'product_id',
        through: SalesProduct,
        otherKey: 'sale_id'
      })
  }

  return SalesProduct;
};
