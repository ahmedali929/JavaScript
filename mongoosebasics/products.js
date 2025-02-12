const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh no, error!")
    console.log(err)
})


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0.01, 'Price must be at least 1 cent']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name:'Mountain Bike', price: 599.99});
const bikeHelmet = new Product({name:'Bike Helmet', price: 29.99, categories: ['Cycling', 'Safety'], size: 'L'});
Product.findOneAndUpdate({name: 'Bike Helmet'}, {price: 19.99}, {new: true, runValidators: true})
    .then(data => {
        console.log("IT WORKED")
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err)
    })
bikeHelmet.save()
    .then(data => {
        console.log("IT WORKED")
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err)
    })
