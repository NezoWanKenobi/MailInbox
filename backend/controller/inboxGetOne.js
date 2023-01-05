const inboxModel = require('../model/inboxModel');

module.exports = async (req,res) => {
    try {

        let inboxes = await inboxModel.Inbox.findOne({_id:req.params.title})
        await inboxModel.Inbox.updateOne({_id:req.params.title},{isread:true})
        res.status(200).send(inboxes);
    } catch (err) {
        res.status(500).send("Server error");
    }
}

