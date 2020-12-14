const db = {
	user: [{ id: 1, name: 'Carlos' }]
};

const list = async (collection) => {
	return db[collection];
};

const get = async (collection, id) => {
	let col = await list(collection);
	return col.filter((item) => item.id === Number(id))[0] || null;
};

const upsert = async (collection, data) => {
	db[collection].push(data);
};

const remove = async (collection, id) => {
	return true;
};

module.exports = {
	list,
	get,
	upsert,
	remove
};
