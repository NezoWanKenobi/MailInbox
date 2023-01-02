const inboxModel = require('../model/inboxModel');

module.exports = async (req,res) => {
    try {
        console.log('PARAM calisti')
        console.log(req.params.title)
        let inboxes = await inboxModel.Inbox.findOne({subject:req.params.title})
        console.log(inboxes)
        res.status(200).send(inboxes);
    } catch (err) {
        res.status(500).send("Server error");
    }
}

