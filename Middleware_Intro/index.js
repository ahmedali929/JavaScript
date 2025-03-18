const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('common'))

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    return next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I love dogs")
    next();
})

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if(password === 'chickennugget') {
        next();
    }
    throw new AppError('Password Required', 401)
}

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page!')
})


app.get('/dogs', verifyPassword, (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof woof')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('This is a secret')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin', 403);
})

app.use((req, res) => {
    res.status(404).send("Not found")
})

// app.use((err, req, res, next) => {
//     console.log("**********************");
//     console.log("*******error**********");
//     console.log("**********************");
//     next(err);  
// })

app.use((err, req, res, next) => {
    const { status = 500, message="Something went wrong" } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})