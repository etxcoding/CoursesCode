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
