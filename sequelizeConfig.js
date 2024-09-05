const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bit', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;
