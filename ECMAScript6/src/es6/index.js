// DEFAULT PARAMS
function newFunction(name, age, country) {
	var name = name || 'Jesus';
	var age = age || 29;
	var country = country || 'MX';
	console.log(name, age, country);
}

// es6
function newFunction2(name = 'Jesus', age = 29, country = 'MX') {
	console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 30, 'CO');
// DEFAULT PARAMS

// TEMPLATE LITERALS
let hello = 'Hello';
let world = 'World';

let epichPhrase = hello + ' ' + world;
let epichPhrase2 = `${hello} ${world}`;
console.log(epichPhrase);
console.log(epichPhrase2);
// TEMPLATE LITERALS

// MULTILINE
let lorem = 'qwer tyui op. asdfgh jkl. \n' + 'zxcv bn m.';
let lorem2 = `qwer tyui op. asdfgh jkl.
zxcv bn m.
`;

console.log(lorem);
console.log(lorem2);
// MULTILINE

// DESTRUCT
let person = {
	name: 'Jesus',
	age: 29,
	country: 'MX'
};
console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age, country);
// DESTRUCT

// SPREAD OPERATOR
let team1 = ['Jesus', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Ana'];

let education = ['David', ...team1, ...team2];
console.log(education);
// SPREAD OPERATOR

// LET
{
	var global = 'Global var';
}

{
	let globalLet = 'Global let';
	console.log(globalLet);
}

console.log(global);
// LET

// CONST
const a = 'b';
// a = 'a'; // error
console.log(a);
// CONST

// CREATE OBJ
let name = 'Jesus';
let age = 29;

obj = { name: name, age: age };
obj2 = { name, age };
console.log(obj2);
// CREATE OBJ

// ARROW FUNCTIONS
const names = [
	{ name: 'Jesus', age: 29 },
	{ name: 'Jessica', age: 28 }
];

let listOfNames = names.map(function (item) {
	console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {};

const listOfNames4 = (name) => {};

const square = (num) => num * num;
console.log(square(7));
// ARROW FUNCTIONS

// PROMISES

const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if (false) {
			resolve('Hey!');
		} else {
			reject('WRONG');
		}
	});
};

helloPromise()
	.then((response) => console.log(response))
	.then(() => console.log('hola2'))
	.catch((error) => console.log(error))
	.then(() => console.log('hola3'));

// PROMISES

// CLASSES

class Calculator {
	constructor() {
		this.valueA = 0;
		this.valueB = 0;
	}

	sum(valueA, valueB) {
		this.valueA = valueA;
		this.valueB = valueB;

		return this.valueA + this.valueB;
	}
}

const calc = new Calculator();
console.log(calc.sum(2, 2));
// CLASSES

// MODULES
import { hello } from './module';
hello();
// MODULES

// GENERATORS

function* helloWorld() {
	if (true) {
		yield 'Hello, ';
	}
	if (true) {
		yield 'World';
	}
}

const generateHello = helloWorld();
console.log(generateHello.next().value);
console.log(generateHello.next().value);
console.log(generateHello.next().value);

// GENERATORS
