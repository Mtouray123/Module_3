const express = require('express');

// create express app instance
const app = express();

//TODO: define our template engine
const fs = require('fs') // this engine requires the fs module like we did 
app.engine('madeline', (filePath, options, callback) => {
    // reading template file
    fs.readFile(filePath, (err, content) => {
        // if there is an error return and pass the error to the callbacl of the engine
        if (err) return callback(err);
        // if no error parse the template file
        const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#', '<div>' + options.content + '</div>')
        // return the parsed data
        return callback(null, rendered)
    })
})

//? Config =======
// setting the views folder in our app
app.set('views', './views');
// tells our app to use the 'madeline' engine defined on top
app.set('view engine', 'madeline')


//TODO: tell our express app to use our ner template engine

//TODO: create routes
app.get('/', (req, res) => {
    // res.send("<h1>Hello World</h1>")
    res.render('template', {title: 'Hello World', message: 'My first template engine', content: 'I created my own template engine'})
})

app.get('/about-me', (req, res) => {
    console.log(req.url)
    res.render('about-me', {title: 'About me', message: 'Hello my name is Mahamad', content: 'I go to Per Scholas'})
})

app.get('another-one', (req, res) => {
    res.render('template', {title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win'})
})




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})