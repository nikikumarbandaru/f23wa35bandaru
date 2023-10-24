var express = require('express');
var router = express.Router();

/* GET Computation operation. */
router.get('/', function(req, res, next) {
  var random=Math.floor(Math.random()*100)+1
  var value=parseFloat(req.query.x)
  var x=!isNaN(value)?value:random
  var y=Math.cos(x)
  var output= ('Math.cos()'+' applied to ' +x+' is '+y)
  res.render('bonus', { response: output });
});

module.exports = router;
