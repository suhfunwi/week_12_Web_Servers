const express = require('express')
//imports express library
const path = require('path')
const bodyParser = require('body-parser')
//imports path, which helps locate where things are
// e.g if you need to get something from a different directory
const indexRouter = require('./routes/index.js')
//since index is in a different directory, this is the notation for it
const app = express()
//creates the web app server
app.use(bodyParser.urlencoded({extended: false}))
//enable parsing of POST request body

const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))
app.set('views', path.join(__dirname, 'views'))
//__dirname is where the code is stored currently
//.join has it create the path to the views directory
//basically it tells the app where the views (HTML) are
app.set('view engine', 'hbs')
//use handlebars to generate views
app.use('/', indexRouter)
//all requests to the app will be passed to indexRouter
// '/' is like the home directory

//start server running
const server = app.listen(process.env.PORT || 3000, function (){
    console.log('Server running on port', server.address().port)
})
//if it's told to run a specific port, use that port. otherwise use 3000
