var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var c = require('../userarray.json');
  res.render('index', { c: c });
});

module.exports = router;


