const config = require('../config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const router = require('../network/routes');
router(app);

app.listen(config.api.port, () => {
	console.log(`Listening on: ${config.api.host}:${config.api.port}`);
});
