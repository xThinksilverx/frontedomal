const Sequelize = require('sequelize');


class Database {
    constructor() {
        this.init();
    }

    init() {
        this.db = new Sequelize(
            'funcionaAgora',
            'root',
            '',
        {
            host: 'localhost',
            dialect: 'mysql',
            define: {
            timestamps: false},
        }
    );
}
}

module.exports = new Database();