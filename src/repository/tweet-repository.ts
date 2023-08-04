import Tweet from '../models/tweet';
import { tweetType } from '../utils/tweet';

class TweetRepository {
	async create(data: tweetType) {
		try {
			const tweet = await Tweet.create(data);
			return tweet;
		} catch (error) {
			console.log(error);
		}
	}
}

export default TweetRepository;
