const express = require('express')
const router = express.Router();

const inboxCreate = require('../controller/inboxCreate');
const inboxGet = require('../controller/inboxGet');
const inboxGetOne = require('../controller/inboxGetOne');

const checkJwt = require('../middleware/checkJwt');

router.post("/create", checkJwt, inboxCreate)
router.get("/:title", checkJwt, inboxGetOne)
router.get("/all/:user", checkJwt, inboxGet)

module.exports = router;