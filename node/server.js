const http = require('http');

http.createServer(function(req, res) {


	res.writeHead(200, {"Content-type": 'text/plain'});

	res.end('2000');
}).listen(9000);