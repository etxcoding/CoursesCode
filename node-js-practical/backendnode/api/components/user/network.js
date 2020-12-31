const express = require('express');
const secure = require('./secure');
const response = require('../../../network/response');
const controller = require('./index');
const router = express.Router();

const list = async (req, res, next) => {
	try {
		throw new Error('test');
		const data = await controller.list();
		response.success(req, res, data, 200);
	} catch (error) {
		next(error);
	}
};

const get = async (req, res, next) => {
	try {
		const data = await controller.get(req.params.id);
		response.success(req, res, data, 200);
	} catch (error) {
		next(error);
	}
};

const upsert = async (req, res, next) => {
	try {
		const data = await controller.upsert(req.body);
		response.success(req, res, data, 201);
	} catch (error) {
		next(error);
	}
};

router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', secure('update'), upsert);

module.exports = router;
