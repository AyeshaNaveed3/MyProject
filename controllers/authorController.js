const Author = require('../models/author');
const { Book, Category } = require('../models/connection');

exports.get = async (req, res) => {
    const { name, id } = req.query;
    const queryConditions = {};
    
    if (name) {
        queryConditions.name = name;
    }
    
    if (id) {
        queryConditions.id = id;
    }
    
    try {
        const authors = await Author.findAll({
            where: queryConditions,
            include: [
                {
                    model: Book,
                    attributes: ['title'],
                    include: [
                        {
                            model: Category,
                            attributes: ['name'],
                        }
                    ]
                },
            ]
        });
        
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    const { name } = req.body;
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




