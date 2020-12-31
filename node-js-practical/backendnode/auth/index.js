const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;
const error = require('../utils/error');

const sign = (data) => {
	const token = jwt.sign(data, secret);
	return token;
};

const check = {
	own: (req, owner) => {
		const decoded = decodeHeader(req);
		console.log(decoded);

		if (decoded.id !== owner) {
			throw error('Unauthorized', 401);
		}
	}
};

const getToken = (auth) => {
	if (!auth) {
		throw new Error('No token');
	}

	if (auth.indexOf('Bearer ') == -1) {
		throw new Error('Invalid format');
	}

	let token = auth.replace('Bearer ', '');
	return token;
};

const verifyToken = (token) => {
	try {
		return jwt.verify(token, secret);
	} catch (error) {
		throw new Error(error.message);
	}
};

const decodeHeader = (req) => {
	const authorization = req.headers.authorization || '';
	const token = getToken(authorization);
	const decoded = verifyToken(token);

	req.user = decoded;

	return decoded;
};

module.exports = {
	sign,
	check
};
