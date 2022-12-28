const express = require('express')
const router = express.Router();

const userRegister = require('../controller/userRegister');
const userLogin = require('../controller/userLogin');
const userCurrent = require('../controller/userCurrent');
const checkJwt = require('../middleware/checkJwt');

router.post("/login", userLogin);
router.post("/register", userRegister);
router.get("/me", checkJwt, userCurrent);

module.exports = router;