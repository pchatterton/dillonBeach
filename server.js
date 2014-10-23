var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var port = Number(process.env.PORT || 3000);

app.all('/*', function(req, res, next) {
	if(req.url == '/') {
		res.sendfile('index.html', {root: __dirname + '/'});
	} else {
		res.sendfile('index.html', {root: __dirname + '/'});
	}
})

app.listen(port);
