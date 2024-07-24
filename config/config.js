const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.dbname, process.env.dbuser, process.env.dbpass, {
    host: process.env.dbhost,
    dialect: 'mysql'
});

module.exports = sequelize;
