var express = require('express');
var router = express.Router();

/* GET Computation operation. */
router.get('/', function(req, res, next) {
  var value=parseFloat(req.query.x)
  if (value) {
    var x = parseFloat(value);
    var y = Math.cos(x); 
    res.send('Math.cos()'+' applied to ' +x+' is '+y)
  } else {
    var x = Math.floor(Math.random() * 100 + 1)
    var y = Math.cos(x);
    res.send('Math.cos()'+' applied to ' +x+' is '+y);
  }
});

module.exports = router;

