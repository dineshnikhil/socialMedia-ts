import mongoose, { mongo } from 'mongoose';

// defining the hastags model schema
const hastagSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
	tweets: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Tweet',
		},
	],
});

// creating the tweet model
const Hastag = mongoose.model('hastag', hastagSchema);

export default Hastag;
