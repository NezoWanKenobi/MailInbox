const express = require('express')
const router = express.Router();

const inboxCreate = require('../controller/inboxCreate');
const inboxGet = require('../controller/inboxGet');
const checkJwt = require('../middleware/checkJwt');

router.post("/create", checkJwt, inboxCreate)
router.get("/all", checkJwt, inboxGet)

module.exports = router;