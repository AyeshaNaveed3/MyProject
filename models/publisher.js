const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 

const Publisher = sequelize.define('Publisher', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
});



module.exports = Publisher;
