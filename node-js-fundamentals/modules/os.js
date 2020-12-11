const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.constants);
console.log(os.freemem());

const SIZE = 1024;
// function kb(bytes) {
// 	return bytes / SIZE;
// }

const kb = (bytes) => bytes / SIZE;
const mb = (bytes) => kb(bytes) / SIZE;
const gb = (bytes) => mb(bytes) / SIZE;

console.log(gb(os.totalmem()));
console.log(gb(os.freemem()));
// console.log(kb(os.freemem()));
// console.log(mb(kb(os.freemem())));
// console.log(mb(mb(kb(os.freemem()))));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());

