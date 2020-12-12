const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, 'public/files/');
		},
		filename: (req, file, cb) => {
			cb(null, new Date().toISOString() + file.originalname);
		}
	})
});

router.get('/', (req, res) => {
	// res.header({
	// 	'custom-header': 'custom value'
	// });

	controller
		.list(req.query.chat, req.query.user)
		.then((results) => {
			response.success(req, res, results, 201);
		})
		.catch((error) => {
			response.error(req, res, error, 500, 'This is only a simulation.');
		});
});

router.post('/', upload.single('file'), (req, res) => {
	console.log(req.file);
	controller
		.add(req.body.chat, req.body.user, req.body.message, req.file)
		.then((results) => {
			response.success(req, res, `Item ${results.message} added.`, 201);
		})
		.catch((error) => {
			response.error(req, res, error, 500, 'This is only a simulation.');
		});
});

router.patch('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { user, message } = req.body;

		const data = await controller.update(id, user, message);
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
