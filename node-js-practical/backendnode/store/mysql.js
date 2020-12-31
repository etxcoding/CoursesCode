const mysql = require('mysql');

const config = require('../config');

const dbconf = {
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.database
};

let connection;

const handleConn = () => {
	connection = mysql.createConnection(dbconf);

	connection.connect((err) => {
		console.error('[db error]', err);
		setTimeout(handleConn, 2000);
	});
};
