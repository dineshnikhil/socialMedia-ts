import { z } from 'zod';

export const tweet = z.object({
	content: z.string(),
	email: z.string(),
});

export const createUser = z.object({
	username: z.string(),
	email: z.string().email(),
	password: z.string(),
});

export type tweetType = z.infer<typeof tweet>;
export type createUserType = z.infer<typeof createUser>;
