const { Reservation } = require('../models/connection');
const { Member, Book } = require('../models/connection')

exports.get = async (req, res) => {
    //All Reservations with the Books Reserved and the Members Who Reserved Them
    const reservations = await Reservation.findAll({
        include: [{
            model: Book,
            attributes: ['title'],
        }, {
            model: Member,
            attributes: ['name'],
        }
        ]

    });
    res.json(reservations);
};

exports.create = async (req, res) => {
    const { reservationDate, memberId, bookId } = req.body;
    const reservation = await Reservation.create({ reservationDate, memberId, bookId });
    res.json(reservation);
};

exports.update = async (req, res) => {
    const { reservationDate } = req.body;
    const reservationId = req.params.id;

    await Reservation.update({ reservationDate }, { where: { id: reservationId } });
    res.json({ id: reservationId, reservationDate });
};

exports.deletereservation = async (req, res) => {
    const reservationId = req.params.id;
    await Reservation.destroy({ where: { id: reservationId } });
    res.json({ message: 'Deleted successfully' });
};
