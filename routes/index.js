const express = require("express");
const router = express.Router();
const user = require("./userRoutes");
const inbox = require('./inboxRoutes');

router.use('/user', user);
router.use('/inbox', inbox);
module.exports = router;