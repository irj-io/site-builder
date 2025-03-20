import { z } from 'zod'

import { MediaPropsSchema } from '../components/media/config'

export type MarkdownData = z.infer<typeof MarkdownDataSchema>
export const MarkdownDataSchema = z.object({
	_contentHtml: z.string(),
	author: z.string().optional(),
	authorAvatarUrl: z.string().optional(),
	date: z.string().optional(),
	description: z.string().optional(),
	media: MediaPropsSchema.optional(),
	order: z.number().optional(),
	published: z.boolean().optional(),
	slug: z.array(z.string()),
	title: z.string().optional(),
	// Deprecated, use media
	banner: z.string().optional(),
	bannerAlt: z.string().optional(),
})

export type ArticleData = z.infer<typeof ArticleDataSchema>
export const ArticleDataSchema = z.object({
	_contentHtml: z.string(),
	author: z.string(),
	authorAvatarUrl: z.string(),
	date: z.string(),
	description: z.string().optional(),
	media: MediaPropsSchema.optional(),
	order: z.number().optional(),
	published: z.boolean().optional(),
	slug: z.array(z.string()),
	title: z.string(),
	// Deprecated, use media
	banner: z.string().optional(),
	bannerAlt: z.string().optional(),
})
