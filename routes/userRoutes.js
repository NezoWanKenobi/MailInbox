const express = require('express')
const router = express.Router();

const userRegister = require('../controller/userRegister');
const userLogin = require('../controller/userLogin');
router.post("/login", userLogin);
router.post("/register", userRegister);

module.exports = router;