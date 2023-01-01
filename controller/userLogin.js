const bcryt = require('bcryptjs')

const userModel = require('../model/userModel');
const jwt = require('../utils/jwtHelper');

module.exports = async(req, res)  => {
    const user = await userModel.User.findOne({username:req.body.username.trim()})
        .select("+password")
        .catch((err) => {
            return res
                .status(500)
                .send({message: err})})
    if(!user)
        return res
            .status(404)
            .send({ message: "An account with this email address was not found."})

    const match = await bcryt.compare(req.body.password, user.password);
    if(!match)
        return res
            .status(400)
            .send({ message : "You have entered an invald email or password"})
    
    const authorization =  jwt.signAccessToken(user.username);

    return res.status(200).send({"status":"success", "token":authorization});


}
