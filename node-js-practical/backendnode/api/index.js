const config = require('../config');
const express = require('express');
const app = express();
const user = require('./components/user/network');

// Routes
app.use('/api/user', user);

app.listen(config.api.port, () => {
	console.log(`Listening on: ${config.api.host}:${config.api.port}`);
});
