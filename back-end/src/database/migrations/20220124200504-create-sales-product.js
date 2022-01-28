'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        field: 'sale_id',
        allowNull: false,
        primaryKey: true,
        references:  { model: 'sales', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      productId: {
        type: Sequelize.INTEGER,
        field:'product_id',
        allowNull: false,
        primaryKey: true,
        references: { model: 'products', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      quantity: { type: Sequelize.INTEGER, allowNull: false },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};