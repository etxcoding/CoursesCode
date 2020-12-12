const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
	// res.header({
	// 	'custom-header': 'custom value'
	// });

	const filter = req.query.name || null;

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
		.add(req.body.name)
		.then((results) => {
			response.success(req, res, `Item ${results.name} added.`, 201);
		})
		.catch((error) => {
			response.error(req, res, 'Internal error.', 500, error);
		});
});

router.patch('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { name } = req.body;

		const data = await controller.update(id, name);
		response.success(req, res, data, 200);
	} catch (error) {
		response.error(req, res, 'Internal error.', 500, error);
	}
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
