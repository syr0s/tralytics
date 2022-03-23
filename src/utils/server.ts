import express from 'express';

import { port } from '../constants';

export class Server {
	private app: express.Application;

	/** Create a new express.js server. */
	constructor() {
		this.app = express();
	}

	/** Start the express.js server */
	public run(): void {
		this.app.listen(port, () => {
			console.log(`Tralytics server running. listening on port ${port}`);
		});
	}
}