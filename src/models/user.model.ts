import {Entity, model, property} from '@loopback/repository';

@model({settings: {'strict': false}})
export class User extends Entity {

	@property({
		type: 'number',
		id: true
	})
	id:number;

	@property({
		type: 'string',
	})
	firstName?:string;

	@property({
		type: 'string',
	})
	lastName?:string;

	@property({
		type: 'string',
		required: true,
	})
	email:string;

	// Define well-known properties here

	// Indexer property to allow additional data
	[prop:string]:any;

	constructor(data?:Partial<User>) {
		super(data);
	}
}
