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

productSchema.methods.greet = function() {
    console.log("HELLO! HI! HOWDY!");
    console.log(`-  from ${this.name}`);
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function() {
    return this.updateMany({},{onSale: true, price: 0});
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Apparel');
    console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res));

// findProduct();

// const bike = new Product({name:'Mountain Bike', price: 599.99});
// const bikeHelmet = new Product({name:'Bike Helmet', price: 29.99, categories: ['Cycling', 'Safety'], size: 'L'});
// Product.findOneAndUpdate({name: 'Bike Helmet'}, {price: 19.99}, {new: true, runValidators: true})
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR")
//         console.log(err)
//     })
// bikeHelmet.save()
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR")
//         console.log(err)
//     })
