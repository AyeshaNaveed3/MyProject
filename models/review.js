const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 


const Review = sequelize.define('Review', {
    comments: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reviewDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    memberId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'members', 
            key: 'id'
        }
    },
    bookId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'books', 
            key: 'id'
        }
    },
   
   
});


module.exports = Review;
