const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');
const router = express.Router();

const login = async (req, res, next) => {
	try {
		const data = await controller.login(req.body);
		response.success(req, res, data, 200);
	} catch (error) {
		next(error);
	}
};

router.post('/login', login);

module.exports = router;
