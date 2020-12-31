const statusMessages = {
	200: 'Done',
	201: 'Created',
	400: 'Invalid format',
	401: 'Unauthorized',
	500: 'Internal error'
};

exports.success = (req, res, message, status = 200) => {
	res.status(status).send({
		error: '',
		body: message || statusMessages[status]
	});
};

exports.error = (req, res, message, status = 500, details) => {
	console.error(`[response error] ${details}`);

	res.status(status).send({
		error: message || statusMessages[status],
		body: ''
	});
};
