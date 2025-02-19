const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("MONGO Connection Open");
    })
    .catch(err => {
        console.log("Oh no, MONGO Connection error!");
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('WOOF');
})



app.listen(3000, () => {
    console.log("App is listening on port 3000");
});



