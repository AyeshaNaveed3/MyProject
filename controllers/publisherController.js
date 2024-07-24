const Publisher = require('../models/publisher');

exports.get = async (req, res) => {
    const publisher = await Publisher.findAll();
    res.json(publisher);
};

exports.create = async (req, res) => {
    const { name,address,contact } = req.body;
    const publisher = await Publisher.create({ name,address,contact });
    res.json(publisher);
};

exports.update = async (req, res) => {
    const { name,address,contact } = req.body;
    const publisherId = req.params.id;

    await Publisher.update({ name,address,contact }, { where: { id: categoryId } });
    res.json({ id: publisherId, name,address,contact });
    
};


exports.deletepublisher = async (req, res) => {
    const publisherId = req.params.id;
    await Publisher.destroy({ where: { id: publisherId } });
    res.json({ message: 'Deleted successfully' });
};