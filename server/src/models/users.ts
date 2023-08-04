import mongoose from 'mongoose';
import { createUserType } from '../../../common/src';

const userSchema = new mongoose.Schema<createUserType>(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('user', userSchema);

export default User;
