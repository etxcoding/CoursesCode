const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const router = require('./network/routes');

db(
	'mongodb+srv://db_user_nodejscourse:EPh6yXy95DCWfIjM@cluster0.slalq.mongodb.net/nodejscourse_db'
);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(router);
router(app);

// app.use('/', (req, res) => {
// 	res.send('Hi');
// });

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Listening on localhost:3000');
