const fetchData = require("../utils/fetchData");

const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
	.then((resolve1) => {
		console.log(resolve1.info.count);
		return fetchData(`${API}${resolve1.results[0].id}`);
	})
	.then((resolve2) => {
		console.log(resolve2.name);
		return fetchData(resolve2.origin.url);
	})
	.then((resolve3) => {
		console.log(resolve3.dimension);
	})
	.catch((error) => console.log(error));
