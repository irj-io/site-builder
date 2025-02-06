import { z } from 'zod'

export type MarkdownData = z.infer<typeof MarkdownDataSchema>
export const MarkdownDataSchema = z.object({
	_contentHtml: z.string(),
	author: z.string().optional(),
	authorAvatarUrl: z.string().optional(),
	banner: z.string().optional(),
	bannerAlt: z.string().optional(),
	date: z.string().optional(),
	description: z.string().optional(),
	slug: z.array(z.string()),
	title: z.string().optional(),
})

export type ArticleData = z.infer<typeof ArticleDataSchema>
export const ArticleDataSchema = z.object({
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
