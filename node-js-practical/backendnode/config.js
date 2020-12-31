const config = {
	api: {
		port: process.env.PORT || 3000,
		host: process.env.HOST || 'http://localhost'
	},
	jwt: {
		secret: process.env.SECRET || 'n075053c1237!'
	},
	mysql: {
		host: process.env.MYSQL_HOST || '',
		user: process.env.MYSQL_USER || '',
		password: process.env.MYSQL_PASSWORD || '',
		database: process.env.MYSQL_DATABASE || '',
	},
	dbUrl: process.env.DB_URL || '',
	publicRoute: process.env.PUBLIC_ROUTE || '/app',
	filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;
