const fs = require('fs');
// let data = '';

let readableStream = fs.createReadStream(__dirname + '/testfile.txt');

// readableStream.setEncoding('UTF8');
// readableStream.on('data', (chunk) => {
// 	data += chunk;
// 	console.log(chunk);
// });

// readableStream.on('end', () => {
// 	console.log(data);
// });

// process.stdout.write('Hi');
// process.stdout.write('Whats');
// process.stdout.write('up?');

const stream = require('stream');
const util = require('util');

const Transform = stream.Transform;

function Caps() {
	Transform.call(this);
}
util.inherits(Caps, Transform);

Caps.prototype._transform = function (chunk, encode, cb) {
	chunkCaps = chunk.toString().toUpperCase();
	this.push(chunkCaps);
	cb();
};

let caps = new Caps();
readableStream.pipe(caps).pipe(process.stdout);
