const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

// exec('ls -la', (err, stdout, sterr) => {
// 	if (err) {
// 		console.error(err);
// 		return false;
// 	}

// 	console.log(stdout);
// });

// exec('node modules/console.js', (err, stdout, sterr) => {
// 	if (err) {
// 		console.error(err);
// 		return false;
// 	}

// 	console.log(stdout);
// });
let myProcess = spawn('ls', ['-la']);

console.log(myProcess.pid);
console.log(myProcess.connected);
myProcess.stdout.on('data', (data) => {
	console.log(myProcess.killed);
	console.log(data.toString());
});

myProcess.on('exit', () => {
	console.log('ending');
	console.log(myProcess.killed);
});
