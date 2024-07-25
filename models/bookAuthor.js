const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

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
    }
});

module.exports = BookAuthors;
