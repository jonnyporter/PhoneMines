var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var util = require('util');
var OperationHelper = require('apac').OperationHelper;
var bodyParser = require('body-parser');
var path = require('path');

var opHelper = new OperationHelper({
    awsId: 'AKIAJTX5JRE2T45COOUA',
    awsSecret: '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', 
    assocId: 'phone0f4-20',
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

app.use('/', express.static(__dirname + '/public'));

function searchAmazon(category, keywords, cb){
    opHelper.execute('ItemSearch', {
        'SearchIndex': category,
        'Keywords': keywords,
        'BrowseNode': '2483608011',
        'ResponseGroup': 'Images,ItemAttributes',
        'Sort': 'titlerank'
    }, function (err, results) { // you can add a third parameter for the raw xml response, "results" here are currently parsed using xml2js
        if (err) { 
            return cb(err);
        }
        return cb(null, results);
    });
}

app.post('/search.html', function (req, res) {
    var category = req.body.category;
    var keywords = req.body.keywords;
    searchAmazon(category, keywords, function (err, results) {
        if (err) {
            console.log('There was an error from the amazon search ', err);
            return res.send(err);
        }
        return res.send(results);
    });
});

app.listen(port, function () {
    console.log("Listening on port: " + port);
});