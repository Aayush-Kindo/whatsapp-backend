const Person = require('./models/person')
const { v4: uuid } = require('uuid');

const persons = [
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/3011/3011270.png',
        name: 'Aman',
        // messages:[
        //     {
        //         sender_id: 'x',
        //         receiver_id: 'y',
                // msg: 'Hello'
        //     }
        // ],
        status: 'inactive'
    },
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        name: 'XYZ',
        // messages:[
        //     {
        //         sender_id: 'x',
        //         receiver_id: 'y',
                // msg: 'Hyy'
        //     }
        // ],
        status: 'inactive'
    },
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png',
        name: 'Gunther',
        // msg: 'Holla',
        status: 'inactive'
    },
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/727/727399.png',
        name: 'Brave',
        // msg: 'What Up!',
        status: 'inactive'
    },
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
        name: 'Scooby',
        // msg: 'Do Do',
        status: 'inactive'
    },
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/599/599305.png',
        name: 'Eeinstein',
        // msg: 'Hii',
        status: 'inactive'
    },
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/5520/5520843.png',
        name: 'Jim',
        // msg: 'Hy there',
        status: 'inactive'
    },
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/201/201634.png',
        name: 'Karrie',
        // msg: 'Ho Ho',
        status: 'inactive'
    },
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/875/875610.png',
        name: 'Hercules',
        // msg: 'Hiiiee',
        status: 'inactive'
    },
    {
        // id: uuid(),
        img: 'https://cdn-icons-png.flaticon.com/512/727/727369.png',
        name: 'Sparda',
        // msg: 'Hyyyy',
        status: 'inactive'
    }
]


const seedDb = async() =>{
    await Person.insertMany(persons)
    console.log('db seeded')
}

module.exports = seedDb 