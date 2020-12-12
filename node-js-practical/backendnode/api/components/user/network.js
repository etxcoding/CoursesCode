const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../../network/response');

router.get('/', (req, res) => {
	const data = controller.list();
	response.success(req, res, data, 200);
});

module.exports = router;
