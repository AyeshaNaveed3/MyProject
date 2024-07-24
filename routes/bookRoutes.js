const express = require('express');
const router = express.Router();
const { get, create, update, deleteBook,findByPublisher } = require('../controllers/bookController');
const verifyToken = require('../middlewares/verifyToken');

const roleAdmin = process.env.ROLE_ADMIN
const roleMember = process.env.ROLE_MEMBER
const roleAuthor=process.env.ROLE_AUTHOR

router.get('/',verifyToken([roleAdmin,roleMember]), get);
router.post('/add', verifyToken([roleAdmin,roleAuthor]),create);
router.put('/update/:id', verifyToken([roleAdmin,roleAuthor]), update);
router.delete('/delete/:id', verifyToken([roleAdmin,roleAuthor]), deleteBook);
router.post('/search',verifyToken([roleAdmin,roleAuthor,roleMember]),findByPublisher);

module.exports = router;
