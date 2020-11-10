const somethingWillHappen = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve("Done!");
		} else {
			reject("Oh no..");
		}
	});
};

somethingWillHappen()
	.then((response) => console.log(response))
	.catch((error) => console.log(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('true');
            }, 3000);
        } else {
            const error = new Error('Oh no..');
            reject(error);
        }
    });
};

somethingWillHappen2()
	.then((response) => console.log(response))
	.then(() => console.log('Hi'))
	.catch(error => console.log(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(error => console.log(error));