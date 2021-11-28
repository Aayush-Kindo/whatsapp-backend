const mongoose = require('mongoose')
const message = require('../models/message');

const personSchema = new mongoose.Schema({
    id:{
        type:'String'
    },
    img:{
        type:'String'
    },
    name:{
        type:'String'
    },
    // msg:[
    //     {
    //         type: 'String'
    //     }
    // ],
    messages: [
        {
            sender_id: {type:'String'},
            //received info
            receiver_id: {type:'String'},
            msg: {type:'String'}
        }
    ],
    status:{
        type:'String'
    }
})

const Person = mongoose.model('Person',personSchema)

module.exports = Person