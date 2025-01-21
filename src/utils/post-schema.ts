import { z } from 'zod'

export type PostData = z.infer<typeof PostDataSchema>
export const PostDataSchema = z.object({
	_contentHtml: z.string(),
	author: z.string(),
	banner: z.string(),
	bannerAlt: z.string(),
	date: z.string(),
	description: z.string().optional(),
	slug: z.array(z.string()),
	title: z.string(),
})
