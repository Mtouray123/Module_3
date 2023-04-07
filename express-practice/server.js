// import or load the express module
const express = require('express');

// create instance of the express app
const app = express();

// === define our routes

// root or main route
app.get('/', function(req, res) {
    // use the response object to send back some data
    res.send('<h1>Hello World</h1>')
})

// // start to listen for requests
// app.listen(3000, function() {
//     console.log('Server is running...');
// })

// '/home' route
app.get('/home', function(req, res){
    res.send('<h1>Home Page</h1>')
})

app.get('/cards', function(req, res) {
    res.send('List of cards')
})

app.post('/cars', function(req, res) {
    res.send('New car created!')
})