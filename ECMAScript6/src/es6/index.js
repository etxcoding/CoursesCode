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

let hello = 'Hello';
let world = 'World';

let epichPhrase = hello + ' ' + world;

console.log(epichPhrase);

let epichPhrase2 = `${hello} ${world}`;
console.log(epichPhrase2);
