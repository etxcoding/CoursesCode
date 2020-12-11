const bcrypt = require('bcrypt');

const password = '123456.';

bcrypt
	.hash(password, 5)
	.then((hash) => {
		console.log(hash);
		return bcrypt.compare(password, hash);
	})
	.then((res) => console.log(res));
