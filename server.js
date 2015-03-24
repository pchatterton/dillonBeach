var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.all('/*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
});

var port = Number(process.env.PORT || 2000);

app.listen(port);
