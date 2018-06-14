var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
    request('http://localhost:3000/list', function (error, response, body) {
        var c= JSON.parse(body);
        res.render('index', {
            c: c
        });
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });

});

module.exports = router;

