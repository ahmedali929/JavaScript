const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny'
    },{
        username: 'Unc',
        comment: 'rofl that is so funny'
    },{
        username: 'Vlad',
        comment: 'lmao that is so funny'
    },{
        username: 'Waldo',
        comment: 'xD that is so funny'
    },
]

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty} = req.body
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000")
})




