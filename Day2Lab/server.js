const express = require('express')
const app = express();

app.get('/greeting', (req, res) => {
    res.send(`Hello, stranger`)
})

app.get('/greeting/:name', (req, res) => {
    const { name } = req.params

    res.send(`What's up, ${name}!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const { total, tipPercentage } = req.params
     
})

app.listen(3000, function() {
    console.log('Listening on port 3000');
})