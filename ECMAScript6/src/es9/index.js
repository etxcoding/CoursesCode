const obj = {
	name: 'Jesus',
	age: 29,
	country: 'MX'
};

let { country, ...all } = obj;
console.log(all);

const obj = {
	name: 'Jesus',
	age: 29
};

const obj1 = {
	...obj,
	country: 'MX'
};

console.log(obj1);

// FINALLY
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => resolve('Hello World'), 3000);
		} else {
			return reject(new Error('Test error'));
		}
	});
};

helloWorld()
	.then((response) => console.log(response))
	.catch((error) => console.log(error))
	.finally(() => console.log('Finalize'));
// FINALLY

// REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
// REGEX