module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, foreignKey: true, field: 'user_id' },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true, field: 'seller_id' },
    total_price: { type: DataTypes.DECIMAL(9, 2), allowNull: false },
    delivery_address: { type: DataTypes.STRING(100), allowNull: false },
    delivery_number: { type: DataTypes.STRING(50), allowNull: false },
    sale_date: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING(50), allowNull: false },
  }, { createdAt: "sale_date", updatedAt: false, tableName: 'sales' });

  Sale.associate = function (models) {
    models.Sale.belongsTo(models.User,
    {
      foreignKey: "user_id", as: 'Customer'
    }),
    models.Sale.belongsTo(models.User,
    {
      foreignKey: "seller_id", as: 'Seller'
    })
  }

  return Sale;
};
