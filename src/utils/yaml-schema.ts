import { z } from 'zod'

import { AnnouncementBarSchema } from '@/components/announcement-bar/announcement-bar-schema'
import { FooterSchema } from '@/components/footers/footer-schema'
import { HeaderSchema } from '@/components/headers/header-schema'
import { BlocksSchema } from './page-schema'

export const YamlGlobalSchema = z.object({
	announcementBar: AnnouncementBarSchema.optional().describe('AnnouncementBar properties'),
	header: HeaderSchema.optional().describe('Header properties'),
	footer: FooterSchema.optional().describe('Footer properties'),
})

export const YamlPageSchema = z.object({
	announcementBar: AnnouncementBarSchema.optional().describe('Override announcementBar properties'),
	header: HeaderSchema.pick({ theme: true }).optional().describe('Override header properties'),
	layout: z.array(BlocksSchema).describe('A list of page blocks to add to the page'),
})
