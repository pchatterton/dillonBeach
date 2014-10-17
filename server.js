var express = require('express');
var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
var app = express();
var pin = '123456';

console.log(__dirname)

app.use(express.static(__dirname + '/dillonBeach'));
// app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Cloudinary

cloudinary.config({ 
  cloud_name: 'petersen-beach-house', 
  api_key: '261624937114185', 
  api_secret: '-yZt0uHbskTOXCEEUCHssad6oGU' 
});

var port = Number(process.env.PORT || 1212);

app.listen(port, function () {
    console.log("Listening on " + port);
});