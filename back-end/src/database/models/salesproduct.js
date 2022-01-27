module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  }, 
  { 
    tableName: 'salesModel',
    timestamps: false 
  });

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
