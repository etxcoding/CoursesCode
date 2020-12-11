process.on('exit', () => {
	console.log('process ended');

	// NOTHING WORKS HERE ANYMORE (settimeout)
});

process.on('beforeExit', () => {
	console.log('process will end');
});

process.on('uncaughtException', (err, origin) => {
	console.error('exception:', err);
	console.log('origin:', origin);

	setTimeout(() => {
		console.log('from exceptions');
	}, 3000);
});
// process.on('')

functionNO();
// process.on('beforeExit', ())
