const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');
const router = express.Router();

const list = async (req, res) => {

	try {
		const data = await controller.list();
		response.success(req, res, data, 200);
	} catch (error) {
		response.error(req, res, '', 500, `[userNetwork] ${error}`);
	}
}

const get = async (req, res) => {

	try {
		const data = await controller.get(req.params.id);
		response.success(req, res, data, 200);
	} catch (error) {
		response.error(req, res, '', 500, `[userNetwork] ${error}`);
	}
}

const upsert = async (req, res) => {

	try {
		const data = await controller.upsert(req.body);
		response.success(req, res, data, 201);
	} catch (error) {
		response.error(req, res, '', 500, `[userNetwork] ${error}`);
	}
}

router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);

module.exports = router;
