const store = require('./store');

const list = (filter) => {
	return new Promise((resolve, reject) => {
		resolve(store.list(filter));
	});
};

const add = (users) => {
	return new Promise((resolve, reject) => {
		if (!users || !Array.isArray(users)) {
			console.error('[chatController] No array of users.');
			reject('Incorrect data.');
			return false;
		}

		const item = {
			users: users,
			date: new Date()
		};
		store.add(item);
		resolve(item);
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
	remove
};
