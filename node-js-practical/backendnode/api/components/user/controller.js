const store = require('../../../store/dummy');

const COLLECTION = 'user';
const list = () => {
	return store.list(COLLECTION);
};

module.exports = { list };
