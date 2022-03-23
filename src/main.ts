import express from 'express';

import { port } from './constants';

const app = express();



app.listen(port, () => {
	console.log(`Tralytics server running. listening on port ${port}`);
});