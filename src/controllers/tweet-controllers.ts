import { Request, Response, NextFunction } from 'express';
import TweetServices from '../services/tweet-services';
import { tweet } from '../utils/tweet';

const tweetServices = new TweetServices();

const create = async (req: Request, res: Response) => {
	try {
		console.log(req.body);

		const parsedInput = tweet.safeParse(req.body);
		if (parsedInput.success) {
			const tweet = await tweetServices.create(req.body);
			return res.status(201).json({
				data: tweet,
				message: 'successfully created the tweet..!',
				error: {},
			});
		} else {
			return res.status(411).json({
				data: {},
				message: 'validation error occur..!',
				error: parsedInput.error,
			});
		}
	} catch (error) {
		res.status(400).json({
			data: {},
			message: 'unable to create the tweet.!',
			error: error,
		});
	}
};

export default {
	create,
};
