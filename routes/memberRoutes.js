const express = require('express');
const router = express.Router();
const { login,create } = require('../controllers/memberController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/login', login);
router.post('/create',create);

module.exports = router;
