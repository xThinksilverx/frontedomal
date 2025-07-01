const Sequelize = require('sequelize');
const database = require('../config/db');

const Categorias = database.db.define('Categorias', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    tableName: 'categorias'
});

module.exports = Categorias;