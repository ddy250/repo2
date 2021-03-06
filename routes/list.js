var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(
        [
            {
                "profileImageURL": "http://www.roughbros.com/assets/uploads/leadership/dave.jpg",
                "industry": [
                    "Software",
                    "Manufacturing",
                    "Retail",
                    "Business Services"
                ],
                "companyCity": "Houston",
                "companyCountry": "U.S.A",
                "lastUpdatedDate": "2017-03-13",
                "name": "David Roberts",
                "title": "Federal Inside Sales District Manager",
                "companyLogo": "http://img2.insight.com/graphics/insight/en-gb/content/header_black_logo.gif",
                "companyName": "Insight",
                "companyEmployees": 5761,
                "companyDomain": "www.insight.com",
                "id": 1,
                "email": "personmail@gmail.com",
                "phone": "05083333333",
                "companyRevenue": 2555333
            },
            {
                "profileImageURL": "http://www.roughbros.com/assets/uploads/leadership/dave.jpg",
                "industry": [
                    "Soft",
                    "Manufacturing",
                    "Retail",
                    "Business Services"
                ],
                "companyCity": "Houston",
                "companyCountry": "U.S.A",
                "lastUpdatedDate": "2017-03-13",
                "name": "David Roberts",
                "title": "Federal Inside Sales District Manager",
                "companyLogo": "http://img2.insight.com/graphics/insight/en-gb/content/header_black_logo.gif",
                "companyName": "Insight",
                "companyEmployees": 5761,
                "companyDomain": "www.insight.com",
                "id": 1,
                "email": "personmail@gmail.com",
                "phone": "05083333333",
                "companyRevenue": 1930
            }
        ]
    );
});

module.exports = router;
