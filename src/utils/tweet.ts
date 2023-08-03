import { z } from 'zod';

export const tweet = z.object({
	content: z.string(),
	email: z.string(),
});
