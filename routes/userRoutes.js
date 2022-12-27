const express = require('express')
const router = express.Router();

const userRegister = require('../controller/userRegister');

router.post("/register", userRegister);

module.exports = router;