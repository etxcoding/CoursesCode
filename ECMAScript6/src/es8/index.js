import hello from '../es6/module';

// ENTRIES
const data = {
	frontend: 'Paulina',
	backend: 'Jesus',
	design: 'Ana'
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
// ENTRIES

// VALUES
const data = {
	frontend: 'Paulina',
	backend: 'Jesus',
	design: 'Ana'
};

const values = Object.values(data);
console.log(values);
console.log(values.length);
// VALUES

// PADSTART PADEND
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'));
// PADSTART PADEND

const obj = {
	name: 'Jesus'
};

// ASYNC AWAIT

const helloWorld = () => {
	return new Promise((resolve, reject) => {
		if (false) {
			setTimeout(() => resolve('Hello World'), 3000);
		} else {
			reject(new Error('Test error'));
		}
	});
};

const helloAsync = async () => {
	const hello = await helloWorld();
	console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
	try {
		const hello = await helloWorld();
		console.log(hello);
	} catch (error) {
		console.log(error);
	}
};

anotherFunction();

// ASYNC AWAIT
