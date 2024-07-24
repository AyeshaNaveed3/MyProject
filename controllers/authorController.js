const Author = require('../models/author');

exports.get = async (req, res) => {
    const { name, id } = req.query;
    const queryconditions = {};
    if (name) {
        queryconditions.name = name;
    }
    if (id) {
        queryconditions.id = id;
    }
    const users = await Author.findAll({ where: queryconditions });
    res.json(users);
};

exports.create = async (req, res) => {
    const {name } = req.body;
    const author = await Author.create({ name });
    res.json(author);
};



exports.update = async (req, res) => {
    const { name } = req.body;
    const authorId = req.params.id;

    await Author.update({ name }, { where: { id: authorId } });
    res.json({ id: authorId, name });
};

exports.deleteauthor = async (req, res) => {
    const authorId = req.params.id;
    console.log(authorId)
    await Author.destroy({ where: { id: authorId } });
    res.json({ message: 'Deleted successfully' });
};




