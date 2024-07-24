const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 

const Member = sequelize.define('Member', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
   
});



module.exports = Member;
