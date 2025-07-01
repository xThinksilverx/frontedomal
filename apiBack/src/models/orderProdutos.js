const Sequelize = require('sequelize');
const database = require('../config/db');

const OrderProdutos = database.db.define('OrderProdutos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'orders',
      key: 'id'
    }
  },
  produtosId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'produtos',
      key: 'id'
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  tableName: 'order_produtos',
  timestamps: false,
});

module.exports = OrderProdutos;
