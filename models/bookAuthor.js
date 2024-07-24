const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Adjust path if needed

const BookAuthors = sequelize.define('BookAuthors', {
  
  BookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  AuthorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
 
});

module.exports = BookAuthors;
