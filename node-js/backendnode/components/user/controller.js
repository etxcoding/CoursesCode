const store = require('./store');

const list = (filter) => {
	return new Promise((resolve, reject) => {
		resolve(store.list(filter));
	});
};

const add = (name) => {
	return new Promise((resolve, reject) => {
		if (!name) {
			console.error('[userController] No name.');
			reject('Incorrect data.');
			return false;
		}

		const item = {
			name: name
		};
		store.add(item);
		resolve(item);
	});
};

const update = (id, name) => {
	return new Promise(async (resolve, reject) => {
		if (id && name) {
			try {
				const data = await store.update({
					id,
					name: name
				});
				resolve(data);
			} catch (error) {
				reject(new Error(error));
			}
		} else {
			reject(new Error('Missing data.'));
		}
	});
};

const remove = (id) => {
	return new Promise(async (resolve, reject) => {
		if (id) {
			try {
				const data = await store.remove(id);
				resolve(data);
			} catch (error) {
				reject(new Error(error));
			}
		} else {
			reject(new Error('Missing data.'));
		}
	});
};

module.exports = {
	list,
	add,
	update,
	remove
};
