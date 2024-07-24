
const { BookAuthors } = require('../models/connection'); 

exports.get = async (req, res) => {
    const bookauthor = await BookAuthors.findAll();
    res.json(bookauthor);
};

exports.create = async (req, res) => {
    const { BookId,AuthorId } = req.body;
    const bookauthor = await BookAuthors.create({ BookId,AuthorId});
    res.json(bookauthor);
};

exports.update = async (req, res) => {
    const { BookId,AuthorId } = req.body;
    const bookId = req.params.id;

   const updated= await BookAuthors.update({ BookId,AuthorId }, { where: { BookId: bookId } });
    if (updated) {
        res.json({ BookId, AuthorId });
    } else {
        res.json({ message: 'BookAuthor not found' });
    }
};

exports.deleteBookAuthor = async (req, res) => {
    const bookId = req.params.id;
    await BookAuthors.destroy({ where: { BookId: bookId } });
    res.json({ message: 'Deleted successfully' });
};
