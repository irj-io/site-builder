import { z } from 'zod'

export type PostData = z.infer<typeof PostDataSchema>
export const PostDataSchema = z.object({
	author: z.string(),
	banner: z.string(),
	bannerAlt: z.string(),
	contentHtml: z.string(),
	date: z.string(),
	description: z.string().optional(),
	slug: z.array(z.string()),
	title: z.string(),
})
