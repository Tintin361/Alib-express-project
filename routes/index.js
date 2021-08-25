var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'Alib', totalAnime: 150 });
});

/* GET home page. */




module.exports = router;