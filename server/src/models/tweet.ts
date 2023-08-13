import mongoose from 'mongoose';

// defining the tweet model schema.
const tweetSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
			max: [250, 'Tweet can not be more than 250 characters.'],
		},
		hastags: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Hastag',
			},
		],
	},
	{ timestamps: true }
);

// creating the tweet model.
const Tweet = mongoose.model('tweet', tweetSchema);

export default Tweet;
