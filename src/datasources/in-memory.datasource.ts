import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import path from 'path';

const DBConfig = {
	'name': 'InMemory',
	'connector': 'memory',
	'localStorage': 'db',
	'file': path.join(__dirname, '..', '..', '/db/db.json')
};

export class InMemoryDataSource extends juggler.DataSource {
	static dataSourceName = 'InMemory';

	constructor(@inject('datasources.config.InMemory', {optional: true}) dsConfig:object = DBConfig) {
		super(dsConfig);
	}
}
