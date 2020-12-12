const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
	// res.header({
	// 	'custom-header': 'custom value'
	// });

	const filter = req.query.user || null;

	controller
		.list(filter)
		.then((results) => {
			response.success(req, res, results, 201);
		})
		.catch((error) => {
			response.error(req, res, 'Internal error.', 500, error);
		});
});

router.get('/:userId', (req, res) => {
	const filter = req.params.userId;

	controller
		.list(filter)
		.then((results) => {
			response.success(req, res, results, 201);
		})
		.catch((error) => {
			response.error(req, res, 'Internal error.', 500, error);
		});
});

router.post('/', (req, res) => {
	controller
		.add(req.body.users)
		.then((results) => {
			response.success(req, res, `Item added.`, 201);
		})
		.catch((error) => {
			response.error(req, res, 'Internal error.', 500, error);
		});
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const data = await controller.remove(id);
		response.success(req, res, data, 200);
	} catch (error) {
		response.error(req, res, 'Internal error.', 500, error);
	}
});

module.exports = router;
