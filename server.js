// var express = require('express');
// var bodyParser = require('body-parser');
// var cloudinary = require('cloudinary');
// var app = express();
// var pin = '123456';

// console.log(__dirname)

// app.use(express.static(__dirname + '/'));
// app.use(bodyParser());

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

// // Cloudinary

// cloudinary.config({ 
//   cloud_name: 'petersen-beach-house', 
//   api_key: '261624937114185', 
//   api_secret: '-yZt0uHbskTOXCEEUCHssad6oGU' 
// });

// var port = Number(process.env.PORT || 3000);

// app.listen(port);

// app.all('/*', function(req, res, next) {
// 	if(req.url == '/') {
// 		res.sendfile('index.html', {root: __dirname + '/'});
// 	} else {
// 		res.sendfile('index.html', {root: __dirname + '/app'});
// 	}
// })

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");