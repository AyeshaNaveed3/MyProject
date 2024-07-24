const express = require('express');
const router = express.Router();
const { get, create, update, deletereservation } = require('../controllers/reservationController'); 
const verifyToken = require('../middlewares/verifyToken');


const roleAdmin = process.env.ROLE_ADMIN
const roleMember = process.env.ROLE_MEMBER

router.get('/', verifyToken([roleAdmin,roleMember]), get);
router.post('/add', verifyToken([roleAdmin]), create);
router.put('/update/:id', verifyToken([roleAdmin]), update);
router.delete('/delete/:id', verifyToken([roleAdmin]), deletereservation); 

module.exports = router;
