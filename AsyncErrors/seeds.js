const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log("MONGO Connection Open");
    })
    .catch(err => {
        console.log("Oh no, MONGO Connection error!");
        console.log(err);
    });

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Watermelons',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Celery',
        price: 1.49,
        category: 'vegetable'
    },
    {
        name: 'Pasture Raised Chicken Eggs',
        price: 4.29,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})