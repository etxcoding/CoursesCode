const { callbackify } = require('util');
const { Z_ASCII } = require('zlib');

function asynch(callback) {
	setTimeout(() => {
		try {
			let a = 3 + z;
			callback(null, a);
		} catch (e) {
			callback(e);
		}
	}, 1000);
}
try {
	asynch((err, data) => {
		if (err) {
			console.log(err);
			return false;
			// throw webkitRequestAnimationFrame; NO VA FUNCIONAR SI ES ASYNC DENTRO DE TRY Y CATCH
		}

		console.log(data);
	});
} catch (e) {
	console.log(e);
}
