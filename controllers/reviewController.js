const { Op } = require('sequelize')
const Review = require('../models/review');
const { Book, Member } = require('../models/connection');

exports.get = async (req, res) => {
    const { comments, rating, memberId, bookId } = req.query;
    const queryconditions = {};
    if (comments) {
        queryconditions.comments = {
            [Op.like]: `%${comments}%`
        };
    }
    if (rating) {
        queryconditions.rating = rating;
    }
    if (memberId) {
        queryconditions.memberId = memberId;
    }
    if (bookId) {
        queryconditions.bookId = bookId;
    }
    const review = await Review.findAll({
        where: queryconditions,
        include: [{
            model: Member,
            attributes: ['name'],
        },
        {
            model: Book,
            attributes: ['title'],
        }]

    });
    res.json(review);
};

exports.create = async (req, res) => {
    const { comments, rating, reviewDate, memberId, bookId } = req.body;
    const review = await Review.create({ comments, rating, reviewDate, memberId, bookId });
    res.json(review);
};

exports.update = async (req, res) => {
    const { comments, rating, reviewDate } = req.body;
    const reviewId = req.params.id;

    await Review.update({ comments, rating, reviewDate }, { where: { id: reviewId } });
    res.json({ id: reviewId, comments, rating, reviewDate });

};


exports.deletereview = async (req, res) => {
    const reviewId = req.params.id;
    await Review.destroy({ where: { id: reviewId } });
    res.json({ message: 'Deleted successfully' });
};
