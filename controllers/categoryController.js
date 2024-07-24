const Category = require('../models/category');

exports.get = async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
};

exports.create = async (req, res) => {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.json(category);
};

exports.update = async (req, res) => {
    const { name } = req.body;
    const categoryId = req.params.id;

    await Category.update({ name }, { where: { id: categoryId } });
    res.json({ id: categoryId, name });
};

exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    await Category.destroy({ where: { id: categoryId } });
    res.json({ message: 'Deleted successfully' });
};
