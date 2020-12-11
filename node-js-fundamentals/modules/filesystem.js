const fs = require('fs');

function readSomething(path, cb) {
	fs.readFile(path, (err, data) => {
		console.log(data.toString());
	});
}

function writeSomething(path, content, cb) {
	fs.writeFile(path, content, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log('Okay');
		}
	});
}

function deleteSomething(path, cb) {
	fs.unlink(path, cb);
}

// readSomething(__dirname + '/filetest2.txt');
// writeSomething(__dirname + '/filetest2.txt', 'Nuevo archivo', console.log);
// deleteSomething(__dirname + '/filetest2.txt', console.log);
