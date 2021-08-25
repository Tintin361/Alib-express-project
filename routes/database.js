var express = require('express');
var router = express.Router();



/* GET database page. */
router.get('/', function(req, res, next) {
    res.render('pages/database', { title: 'Alib' });
});



module.exports = router;