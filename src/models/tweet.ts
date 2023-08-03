import mongoose, { Document, Schema } from 'mongoose';

// define the interface to define the structure of the document
interface tweet extends Document {
	content: string;
	email: string;
}

// defining the tweet model schema.
const tweetSchema = new mongoose.Schema<tweet>(
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
const Tweet = mongoose.model<tweet>('tweet', tweetSchema);

export default Tweet;
