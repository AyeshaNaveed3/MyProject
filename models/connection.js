const sequelize = require('../config/config'); 

const Book = require('./book');
const Author = require('./author');
const Category = require('./category');
const Publisher = require('./publisher');
const Reservation = require('./reservation');
const Member=require('./member');
const Review = require('./review');


Category.hasMany(Book, { foreignKey: 'categoryId' });
Book.belongsTo(Category, { foreignKey: 'categoryId' });

Publisher.hasMany(Book, { foreignKey: 'publisherId' });
Book.belongsTo(Publisher, { foreignKey: 'publisherId' });

const BookAuthors = sequelize.define('BookAuthors', {}, { timestamps: false });
Book.belongsToMany(Author, { through: BookAuthors });
Author.belongsToMany(Book, { through: BookAuthors });

Member.hasMany(Reservation, { foreignKey: 'memberId' });
Reservation.belongsTo(Member, { foreignKey: 'memberId' });

Book.hasMany(Reservation, { foreignKey: 'bookId' });
Reservation.belongsTo(Book, { foreignKey: 'bookId' });

Member.hasMany(Review, { foreignKey: 'memberId' });
Review.belongsTo(Member, { foreignKey: 'memberId' });

Book.hasMany(Review, { foreignKey: 'bookId' });
Review.belongsTo(Book, { foreignKey: 'bookId' });

module.exports = {
    sequelize,
    Book,
    Author,
    Category,
    Publisher,
    Reservation,
    Member,
    Review,
    BookAuthors
};
