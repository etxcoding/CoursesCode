const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
	users: [
		{
			type: Schema.ObjectId,
			ref: 'User'
		}
	],
	date: Date

	// messages: [
	// 	{
	// 		type: Schema.ObjectId,
	// 		ref: 'Message'
	// 	}
	// ],
});

const model = mongoose.model('Chat', mySchema);

module.exports = model;
