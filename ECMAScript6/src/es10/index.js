// FLAT

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(1));

// FLAT

// FLAT MAP

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));

// FLAT MAP

// TRIM START END

let hello = '     hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello world     ';
console.log(hello2);
console.log(hello2.trimEnd());

// TRIM START END

// OPTIONAL CATCH BINDING

try {
} catch {
	console.log(error);
}

// OPTIONAL CATCH BINDING

// FROM ENTRIES
let entries = [
	['name', 'Jesus'],
	['age', 32]
];
console.log(Object.fromEntries(entries));

// SYMBOL
let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

