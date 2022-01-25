const Sale = (sequelize, DataTypes) => {
  module.exports = sequelize.define("Sale", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    user_id: { type: DataTypes.INTEGER, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true },
    total_price: { type: DataTypes.DECIMAL(9, 2), allowNull: false },
    delivery_address: { type: DataTypes.STRING(100), allowNull: false },
    delivery_number: { type: DataTypes.STRING(50), allowNull: false },
    sale_date: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING(50), allowNull: false },
  }, { createdAt: sale_date, updatedAt: false });

  Sale.associate = function (models) {
    models.Sale.belongsTo(models.User,
    { 
      foreignKey: user_id, as: 'User'
    }),
    models.Sale.belongsTo(models.User,
    {
      foreignKey: seller_id, as: 'User'
    })
  }

  return Sale;
};
