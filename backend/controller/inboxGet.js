const inboxModel = require('../model/inboxModel');

module.exports = async (req,res) => {
    try {
        let inboxes = await inboxModel.Inbox.find({messageTo: req.params.user})
        res.status(200).send(inboxes);
    } catch (err) {
        res.status(500).send("Server error");
    }
}

