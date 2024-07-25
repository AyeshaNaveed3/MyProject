const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');
const Member = require('../models/member');
const {Reservation,Book}=require('../models/connection');
require('dotenv').config();

exports.get = async (req, res) => {
    const members = await Member.findAll({

        include:[{
            model:Reservation,
            attributes:['reservationDate'],
            include:[{
                model:Book,
                attributes:['title'],
            }]
        }]
    });
    res.json(members);
};


exports.login=async(req,res)=>{

    const{email,password}=req.body

    const member=await Member.findOne({where:{email,password}});
    console.log('Found member:', member);
   if(member){
    const token = jwt.sign({ id: member.id, name:member.name,email: member.email, role:member.role?.toString() }, process.env.SECRET_KEY, { expiresIn: '5d' });
    res.send({ token, member });
   }else{
    res.status(401).send('Email and password not found');
   }
}

exports.create = async (req, res) => {
    const { name,email,password ,role} = req.body;

    const roleStr = role?.toString();
    const validRoles = [process.env.ROLE_ADMIN?.toString(), process.env.ROLE_MEMBER?.toString(), process.env.ROLE_AUTHOR?.toString()];
    if (!validRoles.includes(roleStr)) {
        return res.status(400).json({ message: 'Invalid role' });
    }
    else{
        const member = await Member.create({ name,email,password, role: roleStr });
        res.json(member);
    }
    
};