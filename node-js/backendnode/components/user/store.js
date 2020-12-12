const Model = require('./model');

const list = async (filter) => {
	let _filter = {};
	if (filter !== null) {
		_filter = { name: filter };
	}
	const list = await Model.find(_filter);
	return list;
};

const add = (item) => {
	const newItem = new Model(item);
	newItem.save();
};

const update = async (item) => {
	const foundItem = await Model.findById(item.id);

	if (item.name) foundItem.name = item.name;

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
