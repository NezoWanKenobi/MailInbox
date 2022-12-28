const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    signAccessToken:  (username) => {
        const authorization = jwt.sign({username: username}, process.env.JWT_SECRET_KEY,{expiresIn: '2h'});
        return authorization;
    }
}