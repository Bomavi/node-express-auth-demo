/* npm imports: common */
const express = require('express');

/* root imports: common */
const { errorHandler } = rootRequire('middleware');
const { AuthController } = rootRequire('controllers');

const api = () => {
	const router = express();

	router.post('/login', AuthController.login());
	router.post('/logout', AuthController.logout());

	router.use(errorHandler);

	return router;
};

module.exports = { api };
