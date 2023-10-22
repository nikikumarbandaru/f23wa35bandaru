var express = require('express');
var router = express.Router();

/* GET Interesting fact page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Nikith Kumar Bandaru' });
});

module.exports = router;
