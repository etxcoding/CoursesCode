console.time('everything');

let sum = 0;
console.time('loop');
for (let i = 0; i < 100000000; i++) {
	sum += 1;
}
console.timeEnd('loop');

let sum2 = 0;
console.time('loop2');
for (let i = 0; i < 10000000; i++) {
	sum2 += 1;
}
console.timeEnd('loop2');

console.time('asynch');
console.log('asynch');
asynch().then(() => console.timeEnd('asynch'));

console.timeEnd('everything');

function asynch() {
	return new Promise((resolve) =>
		setTimeout(() => {
			console.log('asynch ends');
			resolve();
		}, 1000)
	);
}
