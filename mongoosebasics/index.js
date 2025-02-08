const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log("Connection Open")
})
.catch(err => {
    console.log("Oh no, error!")
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})

// Movie.insertMany([
//     {title: 'Amelie', year: 2001, score: 9.1, rating: 'R'},
//     {title: 'Alien', year: 1979, score: 9.2, rating: 'R'},
//     {title: 'Iron Giant', year: 1999, score: 9.3, rating: 'PG'},
//     {title: 'Stand By Me', year: 1986, score: 9.4, rating: 'R'},
//     {title: 'Moonrise Kingdom', year: 2012, score: 9.5, rating: 'PG-13'}
// ])
//     .then(data => {
//         console.log("It worked")
//         console.log(data);
//     })