// models/reservation.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 

const Reservation = sequelize.define('Reservation', {
    reservationDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'members', 
            key: 'id'
        }
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'books', 
            key: 'id'
        }
    },
   
});

module.exports = Reservation;
