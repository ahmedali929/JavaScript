const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet', (req, res) => {
    const {name = 'anonymous'} = req.cookies
    res.send(`Hey there, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie')
    res.cookie('animal', 'chickens')
    res.send('ok sent you a cookie')
})

app.listen(3000, () => {
    console.log("serving")
})