const express = require('express')
const router = express.Router()
//figures out what code to run in response to a request
//typically based on url and the method, GET, POST, etc.
router.get('/', function(req, res, next){
    //responds to get request to home page
    //request, response, next
    res.render('index',
        {title: 'Feedback Application',
            author: 'Suh',
            timePageLoadedAt: new Date()
        })
    //name of handlebars file
    //render means generate HTML
    //this function responds to get requests
})
//get request to the home page
//next is used to pass the response on to something else
// that can handle it if the data is invalid or something

router.get('/feedback-form', function (req, res, next){
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function (req, res, next){
    //access form data
    // const formData = req.query //for a GET request - read the URL query
    const formData = req.body // for a POST request
    console.log(formData)

    //todo save to database
    //automatically email someone when feedback is submitted
    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData.current
    })
})
module.exports = router
//return router to whatever else needs this file
//needs to always be the very last line in the file