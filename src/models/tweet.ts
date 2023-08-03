import mongoose, { Document, Schema } from 'mongoose';
import { z } from 'zod';
import { tweet } from '../utils/tweet';

// define the interface to define the structure of the document
type tweetType = z.infer<typeof tweet>;

// defining the tweet model schema.
const tweetSchema = new mongoose.Schema<tweetType>(
	{
		content: {
			type: String,
			required: true,
		},
		email: {
			type: String,
		},
	},
	{ timestamps: true }
);

// creating the tweet model.
const Tweet = mongoose.model<tweetType>('tweet', tweetSchema);

export default Tweet;
