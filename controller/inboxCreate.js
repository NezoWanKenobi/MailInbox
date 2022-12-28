const inboxModel = require('../model/inboxModel');

module.exports = async(req, res)  => {

    let inboxData = new inboxModel.Inbox({
        subject:req.body.subject,
        content:req.body.content,
        isread: req.body.isread,
        createdBy: req.user.username
    });

    inbox = await inboxData.save().catch((err) => {
        return res
            .status(500).send({message: err})
    });


    return res.status(200).send({message : "Message created successfully!"});
}