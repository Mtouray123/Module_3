const express = require('express')

const tweetsRouter = express.Router();



tweetsRouter.get('/', (req, res) => {
    res.json({data: [{
        title:"Deep Thoughts",
        body: "Friends, I am the realesr coder alive",
        author: "Arthur",
    }]})
})

module.exports = tweetsRouter;