const Model = require('./model');

const list = async (filter) => {
	return new Promise((resolve, reject) => {
		let _filter = {};
		if (filter !== null) {
			_filter = { users: filter };
		}

		Model.find(_filter)
			.populate('users')
			.exec((error, populated) => {
				if (error) {
					reject(error);
					return false;
				}

				resolve(populated);
			});
	});
};

const add = (item) => {
	const newItem = new Model(item);
	newItem.save();
};

const remove = async (id) => {
	let _filter = { _id: id };
	const removedItem = await Model.deleteOne(_filter);
	return removedItem;
};

module.exports = {
	list,
	add,
	remove
};
