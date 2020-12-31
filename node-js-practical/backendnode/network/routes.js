const express = require('express');
const auth = require('../api/components/auth/network');
const user = require('../api/components/user/network');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../api/swagger.json');

const errors = require('../network/errors');

const routes = (server) => {
	server.use('/api/auth', auth);
	server.use('/api/user', user);
	server.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

	server.use(errors);
};

module.exports = routes;
