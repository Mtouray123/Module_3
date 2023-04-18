const express = require('express');
require("dotenv").config
const app = express();
const port = 3000;

app.set("View engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//Data

//Middleware

//Routes
// !Get vegetables list 
app.get('/vegetables', (req, res) => {
    res.send("List")
})

//!to return a form to create new vegetable
app.get("vegetables/new", (req, res) => {
    res.send('"new vegetables');
})

// !Post
app.post('vegetables', (req, res) => {
    res.send("post")
})
// !Get one Item
app.get('/vegetables/:id', (req, res) => {
    res.send("get an item by ID")
})

app.listen(port, (req, res) => {
    console.log('listening on port' + port);
})