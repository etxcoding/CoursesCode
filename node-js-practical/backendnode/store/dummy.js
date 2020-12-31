const db = {
	user: [{ id: 'l1SAybg4EYIdvgTqEp3Nk', username: 'carls', name: 'Carlos' }],
	auth: []
};

const list = async (collection) => {
	return db[collection] || [];
};

const get = async (collection, id) => {
	let col = await list(collection);
	return col.filter((item) => item.id === Number(id))[0] || null;
};

const upsert = async (collection, data) => {
	db[collection].push(data);
	return true;
};

const remove = async (collection, id) => {
	return true;
};

const query = async (collection, q) => {
	let col = await list(collection);
	let keys = Object.keys(q);
	let key = keys[0];
	return col.filter((item) => item[key] === q[key])[0] || null;
};

module.exports = {
	list,
	get,
	upsert,
	remove,
	query
};
