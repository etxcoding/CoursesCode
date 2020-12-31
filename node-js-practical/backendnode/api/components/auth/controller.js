const bcrypt = require('bcrypt');
const auth = require('../../../auth');
const COLLECTION = 'auth';

module.exports = (injectedStore) => {
	let store = injectedStore;
	if (!store) {
		store = require('../../../store/dummy');
	}

	const login = async ({ username, password }) => {
		try {
			const data = await store.query(COLLECTION, { username: username });
			const result = await bcrypt.compare(password, data.password);
			if (result === true) {
				return auth.sign(data);
			} else {
				throw new Error('Invalid data.');
			}
		} catch (error) {
			throw new Error('Invalid data.');
		}
	};

	const upsert = async (data) => {
		const authData = {
			id: data.id
		};

		if (data.username) {
			authData.username = data.username;
		}
		if (data.password) {
			authData.password = await bcrypt.hash(data.password, 5);
		}

		return store.upsert(COLLECTION, authData);
	};

	return {
		login,
		upsert
	};
};
