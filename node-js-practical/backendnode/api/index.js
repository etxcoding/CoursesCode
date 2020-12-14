const config = require('../config');

const swaggerUi = require('swagger-ui-express');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const user = require('./components/user/network');

const swaggerDoc = require('./swagger.json');
// Routes
app.use('/api/user', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, () => {
	console.log(`Listening on: ${config.api.host}:${config.api.port}`);
});
