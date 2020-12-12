const Model = require('./model');

const list = async (filter) => {
	// const list = await Model.find(_filter);

	return new Promise((resolve, reject) => {
		Model.find(filter)
			.populate('chat')
			.populate('user')
			.exec((error, populated) => {
				if (error) {
					reject(error);
					return false;
				}

				resolve(populated);
			});
	});
	// return list;
};

const add = (item) => {
	const newItem = new Model(item);
	newItem.save();
};

const update = async (item) => {
	const foundItem = await Model.findById(item.id);

	if (item.message) foundItem.message = item.message;
	if (item.user) foundItem.user = item.user;

	const updatedItem = await foundItem.save();
	return updatedItem;
};

const remove = async (id) => {
	let _filter = { _id: id };
	const removedItem = await Model.deleteOne(_filter);
	return removedItem;
};

module.exports = {
	list,
	add,
	update,
	remove
};
