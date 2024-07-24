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
    console.log('Received request to create author:', req.body);
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        const author = await Author.create({ name });
        console.log('Author created:', author);
        res.status(201).json(author);
    } catch (error) {
        console.error('Error creating author:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
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




