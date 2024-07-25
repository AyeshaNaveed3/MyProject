const express = require('express');
const router = express.Router();
const { login,create,get } = require('../controllers/memberController');
const verifyToken = require('../middlewares/verifyToken');


router.get('/',get);
router.post('/login', login);
router.post('/create',create);

module.exports = router;
