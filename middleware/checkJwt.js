const userModel = require('../model/userModel');
require('dotenv').config();
const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
      const token = req.header('authorization').replace('Bearer ', '');
   
      if (!token) {
        res.status(403).send('Forbidden!')
      }
   
      const data = JWT.verify(token, process.env.JWT_SECRET_KEY);

      let user =  await userModel.User.findOne({ username: data.username}).catch((e) => { res.status(500).send({message: e}) });
      req.user = user

   
      next();
    } catch (err) {
      res.status(401).send({message:'Please authenticate'});
    }
};