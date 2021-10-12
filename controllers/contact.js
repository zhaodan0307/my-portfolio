//use express
var express = require('express');

//instantiate an express router to parse and direct url requests
var router = express.Router();

//Get : /contact show index view
router.get('/',(req, res) =>{
    res.render('contact/index', { title: 'Contact me' });
})


//make public

module.exports = router;