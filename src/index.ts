import express, { Request, Response } from 'express';
import connect from './config/database';
import Tweet from './models/tweet';

const port = 3000;

const createAndRunServer = (): void => {
	const app = express();

	app.get('/', (req: Request, res: Response) => {
		res.send('hello this is my firt typescript server..!');
	});

	app.listen(port, async () => {
		console.log('server is running on the port: ', port);
		connect();

		const tweet = await Tweet.create({
			content: 'fourth tweet..!',
			email: 'a@b.com',
		});
		console.log(tweet);
	});
};

createAndRunServer();
