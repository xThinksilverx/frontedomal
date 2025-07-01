const Sequelize = require('sequelize');
const database = require('../config/db');

const Produtos = database.db.define('Produtos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    categoriaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'produtos',
    timestamps: false,
});

module.exports = Produtos;