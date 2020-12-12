const store = require('./store');

const list = (chat, user) => {
	let filter = {};
	filter = chat ? { ...filter, chat: chat } : filter;
	filter = user ? { ...filter, user: user } : filter;

	return new Promise((resolve, reject) => {
		resolve(store.list(filter));
	});
};

const add = (chat, user, message, file) => {
	return new Promise((resolve, reject) => {
		if (!chat || !user || !message) {
			console.error('[messageController] No chat, user or message.');
			reject('Incorrect data.');
			return false;
		}

		let fileUrl = '';
		if (file) {
			fileUrl = `http://localhost:3000/app/files/${file.filename}`;
		}

		const item = {
			chat,
			user,
			message,
			date: new Date(),
			file: fileUrl
		};
		store.add(item);
		resolve(item);
	});
};

const update = (id, user, message) => {
	return new Promise(async (resolve, reject) => {
		if (id && (user || message)) {
			try {
				const data = await store.update({
					id: id,
					user: user,
					message: message
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
