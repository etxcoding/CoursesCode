const nanoid = require('nanoid');

const COLLECTION = 'user';

module.exports = (injectedStore) => {
	let store = injectedStore;
	if (!store) {
		store = require('../../../store/dummy');
    }
    
	const list = async () => {
		try {
			return await store.list(COLLECTION);
		} catch (error) {
			throw error;
		}
	};

	const get = (id) => {
		return store.get(COLLECTION, id);
	};

	const upsert = (body) => {
		const item = {
			name: body.name
		};

		if (body.id) {
			user.id = body.id;
		} else {
			user.id = nanoid();
		}

		return store.upsert(COLLECTION, item);
	};

	return {
		list,
		get,
		upsert
	};
};
