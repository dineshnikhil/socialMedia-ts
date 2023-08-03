import Tweet from '../models/tweet';
import { z } from 'zod';
import { tweet } from '../utils/tweet';

type tweet = z.infer<typeof tweet>;

class TweetRepository {
	async create(data: tweet) {
		try {
			const tweet = await Tweet.create(data);
			return tweet;
		} catch (error) {
			console.log(error);
		}
	}
}

export default TweetRepository;
