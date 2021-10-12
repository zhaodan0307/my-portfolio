//use express
var express = require('express');

//instantiate an express router to parse and direct url requests
var router = express.Router();

//Get : /about show index view
router.get('/',(req, res) =>{
    res.render('about/index', { title: 'About Dan\'s Portfolios' });
})


//make public

module.exports = router;