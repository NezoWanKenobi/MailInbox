const mongoose = require('mongoose');


const inboxSchema = mongoose.Schema({
    subject:{
        type:String, required:true
    },
    content:{
        type:String, required:true
    },
    isread:{
        type:Boolean,required:true
    },
    messageTo:{
        type:String
    },
},{timestamps:true});

const Inbox = mongoose.model('Inbox',inboxSchema);

module.exports = {
    Inbox:Inbox,
    inboxSchema:inboxSchema
}