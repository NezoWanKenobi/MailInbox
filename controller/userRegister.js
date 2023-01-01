const bcrypt = require('bcryptjs');

const userModel = require('../model/userModel');

module.exports = async(req, res)  => {

    const hash = await bcrypt.hash(req.body.password, 10);

    let user = new userModel.User({
        email:req.body.email.trim(),
        password:hash,
        username: req.body.username
    });

    try {
        await user.save();
        return res.status(200).send({message : "User registered successfully!"});
    }catch (err){
        return res.status(500).send({message: "Email already exist!"})
    }

}