module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    saleId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, field: 'sale_id' },
    productId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, field: 'product_id' },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  }, 
  { 
    tableName: 'salesProducts',
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
