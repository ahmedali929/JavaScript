const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh no, error!")
    console.log(err)
})

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`
});

personSchema.pre('save', async function() {
    this.first = 'LOL';
    this.last = "ROFL";
    console.log("ABOUT TO SAVE")  
})
personSchema.post('save', async function() {
    console.log("JUST SAVED")  
})

const Person = mongoose.model('Person', personSchema);