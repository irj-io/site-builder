import { z } from 'zod'

import { BlocksSchema } from '@/blocks/block-schema'
import { ContentSchema } from '@/blocks/content-schema'
import { AnnouncementBarSchema } from '@/components/announcement-bar/announcement-bar-schema'
import { FooterSchema } from '@/components/footers/footer-schema'
import { HeaderSchema } from '@/components/headers/header-schema'

export type YamlGlobal = z.infer<typeof YamlGlobalSchema>
export const YamlGlobalSchema = z.object({
	announcementBar: AnnouncementBarSchema.optional().describe('AnnouncementBar properties'),
	header: HeaderSchema.optional().describe('Header properties'),
	footer: FooterSchema.optional().describe('Footer properties'),
})

export type YamlPage = z.infer<typeof YamlPageSchema>
export const YamlPageSchema = z.object({
	announcementBar: AnnouncementBarSchema.optional().describe('Override announcementBar properties'),
	header: HeaderSchema.pick({ theme: true }).optional().describe('Override header properties'),
	layout: z.array(BlocksSchema).describe('A list of page blocks to add to the page'),
})

export const isYamlPage = (data: unknown): data is YamlPage => {
	return YamlPageSchema.safeParse(data).success
}

export type YamlCollectionDetail = z.infer<typeof YamlCollectionDetailSchema>
export const YamlCollectionDetailSchema = z.object({
	items: z.array(
		z.object({
			id: z.string().or(z.number()),
			content: ContentSchema,
		})
	),
})

export const isYamlCollectionDetail = (data: unknown): data is YamlCollectionDetail => {
	return YamlCollectionDetailSchema.safeParse(data).success
}

export type YamlCollection = z.infer<typeof YamlCollectionSchema>
export const YamlCollectionSchema = z
	.object({
		collections: z.record(z.string(), YamlCollectionDetailSchema),
	})
	.passthrough()

export const isYamlCollection = (data: unknown): data is YamlCollection => {
	return YamlCollectionSchema.safeParse(data).success
}
