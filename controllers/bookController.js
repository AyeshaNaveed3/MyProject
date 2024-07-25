const { Op } = require('sequelize');
const { Book,Author, Publisher, Category, Review,Member } = require('../models/connection');


exports.get = async (req, res) => {
    const { id, title, publisherId } = req.query;
    const queryConditions = {};

    if (id) {
        queryConditions.id = id;
    }

    if (title) {
        queryConditions.title = {
            [Op.like]: `%${title}%`
        };
    }
// Books with Their Reviews and Reviewers
    const books = await Book.findAll({
        where: queryConditions,
        include: [{
            model: Review,
            attributes: ['comments'],
            include: [
                {

                    model: Member,
                    attributes: ['name']

                }
            ]
        },

        ]


    });



    res.json(books);
};


exports.create = async (req, res) => {
    const { title, yearPublished, publisherId, categoryId } = req.body;
    const book = await Book.create({ title, yearPublished, publisherId, categoryId });
    res.json(book);
};

exports.update = async (req, res) => {
    const { title, yearPublished } = req.body;
    const bookId = req.params.id;

    await Book.update({ title, yearPublished }, { where: { id: bookId } });
    res.json({ id: bookId, title, yearPublished });
};

exports.deleteBook = async (req, res) => {
    const bookId = req.params.id;
    await Book.destroy({ where: { id: bookId } });
    res.json({ message: 'Deleted successfully' });
};

exports.findByPublisher = async (req, resp) => {
    const { publisherId } = req.body;
    const queryConditions = {};
    if (publisherId) {
        queryConditions.publisherId = publisherId;
    }

    const books = await Book.findAll({ where: queryConditions });
    resp.json(books);

}
