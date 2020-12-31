const { nanoid } = require('nanoid');
const auth = require('../auth');

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

	const upsert = async (body) => {
		const item = {
			id: body.id ? body.id : nanoid(),
			username: body.username,
			name: body.name
		};

		if (body.password || body.username) {
			await auth.upsert({
				id: item.id,
				username: item.username,
				password: body.password
			});
		}

		return store.upsert(COLLECTION, item);
	};

	return {
		list,
		get,
		upsert
	};
};
