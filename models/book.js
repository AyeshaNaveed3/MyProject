const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    yearPublished: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  /*  categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories',
            key: 'id' 
        }
    },
    publisherId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'publishers', 
            key: 'id' 
        }
    },*/
   
});

module.exports = Book;
