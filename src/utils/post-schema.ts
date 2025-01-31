import { z } from 'zod'

export type PostData = z.infer<typeof PostDataSchema>
export const PostDataSchema = z.object({
	_contentHtml: z.string(),
	author: z.string(),
	authorAvatarUrl: z.string(),
	banner: z.string().optional(),
	bannerAlt: z.string().optional(),
	date: z.string(),
	description: z.string().optional(),
	slug: z.array(z.string()),
	title: z.string(),
})
