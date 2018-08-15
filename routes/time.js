var express = require('express');
var router = express.Router();


/* GET users listing. */
router.use('/:time', function(req, res, next) {
  var time = Number(req.params.time);
  if(isNaN(time)){
  var date = new Date(req.params.time);
  res.json({'Unix': date.getTime(), 'UTC': date.toUTCString()});
  } else {
  var date = new Date(time);
  res.json({'Unix': date.getTime(), 'UTC': date.toUTCString()});
  }
});





//Use current time if param is empty
 router.use('/', function(req, res, next) {
   var date = new Date();
   res.json({'Unix': date.getTime(), 'UTC': date.toUTCString()});
   next();
 })



module.exports = router;
