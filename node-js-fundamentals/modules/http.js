const http = require('http');

http.createServer(router).listen(3000);

console.log('Listening');

function router(req, res) {
	console.log('new req');
	console.log(req.url);

	switch (req.url) {
		case '/hi':
			debugger;
			res.write('Hi, sup?');
			res.end();
			break;
		default:
			res.write('error 404');
			res.end();
	}

	// res.writeHead(201, { 'Content-Type': 'text/plain'})
	// res.write('Hi, this is nodejs http');

	// res.end();
}
