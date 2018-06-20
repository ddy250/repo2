var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var request = require('request');

var d=[];
var x;
function kFormatter(num,newarray) {
    for (x in num) {
        if (num[x].companyRevenue > 999999) {
            newarray[x] = (num[x].companyRevenue / 1000000).toFixed(2)+'M';
            newarray[x] = '$' + newarray[x];
        }
        else if (num[x].companyRevenue > 999) {
            newarray[x] = (num[x].companyRevenue / 1000).toFixed(2)+'k';
            newarray[x] = '$' + newarray[x];
            console.log(num[x]);
        }
        else if (num[x].companyRevenue < 999) {
            newarray[x] = num[x].companyRevenue;
            newarray[x] = '$' + newarray[x];
        }
    }
    return newarray;
}

/* GET home page. */
router.get('/', function (req, res, next) {
    request('https://evening-dawn-29014.herokuapp.com/list', function (error, response, body) {
        var c = JSON.parse(body);
        kFormatter(c, d);
        res.render('index', {
            c: c,
            d:d
        });
    });
});

module.exports = router;

