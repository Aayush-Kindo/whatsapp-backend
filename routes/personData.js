const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid');
const Person = require('../models/person')

//search all registered user from db and send
router.get('/api/persons', async(req,res)=>{
    const persons = await Person.find({})
    res.send(persons)
    // console.log(persons)
})

// register new user
router.post('/api/register',async(req, res) => {  
    if(req.body!==''){
        const newUser = new Person({
            // id: uuid(),
            name: req.body.name,
            img: req.body.img,
            // message: req.body.message,
            status: req.body.status
        })
        await Person.create(newUser)
        console.log('new user added successfully')
        res.redirect('/')
    }
    else(
        res.redirect('/')
    )
})

router.post('/api/message',async(req,res)=>{
    const senderId = req.body.senderId
    const receiverId = req.body.receiverId
    const message = req.body.msg

    const sender = await Person.findById(senderId)
    const receiver = await Person.findById(receiverId)

    sender.messages.push({
        sender_id: senderId,
        receiver_id: receiverId,
        msg: message
    })

    await sender.save()

    receiver.messages.push({
        sender_id: receiverId,
        receiver_id: senderId,
        msg: message
    })

    await receiver.save()

    console.log('message sent successfully')
    res.redirect('/')
    // const user = await Person.findById(senderId)
})

router.get('/api/fetchMessage/:id', async(req,res)=>{
    const messageData = await Person.findById(req.params.id)
    // res.send(messageData.messages)
    res.send(messageData.messages)
    // console.log(messageData.messages)
})


module.exports = router