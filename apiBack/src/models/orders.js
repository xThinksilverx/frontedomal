const Sequelize = require('sequelize');
const database = require('../config/db');

const Orders = database.db.define('Orders', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'orders'
});

module.exports = Orders;
