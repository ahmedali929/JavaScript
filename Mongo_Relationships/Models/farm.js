const mongoose = require ('mongoose');
const Schema = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch(err => {
        console.log("Mongo Conneciton Error")
        console.log(er)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});


const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchcema);

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer'},
//     { name: 'Asparagus', price: 3.99, season: 'Spring'}
// ])

// const makeFarm = async () => {
//     const farm = new Farm({name: 'Full Belly Farms', city: 'Guinda, CA'});
//     const melon = await Product.findOne({name:'Goddess Melon'});
//     farm.products.push(melon);
//     await farm.save();
// }
// makeFarm();


const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms'});
    const watermelon = await Product.findOne({name:'Sugar Baby Watermelon'});
    farmSchema.products.push(melon);
    await farm.save();
}

Farm.findOne({name: 'Full Belly Farm'})
    .populate('products')
    .then(farm => console.log(farm))