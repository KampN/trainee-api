import {TraineeApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {TraineeApiApplication};

export async function main(options:ApplicationConfig = {}) {

	options.rest.port = '80';
	options.rest.host = '0.0.0.0';

	const app = new TraineeApiApplication(options);
	await app.boot();
	await app.start();

	const url = app.restServer.url;
	console.log(`Server is running at ${url}`);

	return app;
}
