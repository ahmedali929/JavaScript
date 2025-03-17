const express = require('express');
const app = express();
const morgan = require('morgan');

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
    if(password === "chickennugget") {
        next();
    }
    res.send("Sorry you need a password")
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

app.use((req, res) => {
    res.status(404).send("Not found")
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})