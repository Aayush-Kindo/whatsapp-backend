const mongoose = require('mongoose')


const messageSchema = new mongoose.Schema({

    //sent info 
    sender_id: String,
    sender_name: String,

    //received info
    receiver_id: String,
    receiver_name: String,

    msg: String
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message