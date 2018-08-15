var express = require('express');
var router = express.Router();


//Use current time if param is empty
 router.use('/', function(req, res, next) {
   var date = new Date();
   res.json({'Unix': date.getTime(), 'UTC': date.toUTCString()});
   next();
 })

module.exports = router;
