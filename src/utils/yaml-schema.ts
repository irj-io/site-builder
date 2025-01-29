import { z } from 'zod'

import { AnnouncementBarSchema } from '@/components/announcement-bar/announcement-bar-schema'
import { HeaderSchema } from '@/components/headers/header-schema'
import { BlocksSchema } from './page-schema'

export const YamlSchema = z.object({
	announcementBar: AnnouncementBarSchema.optional().describe('Override announcementBar properties'),
	header: HeaderSchema.pick({ theme: true }).optional().describe('Override header properties'),
	layout: z.array(BlocksSchema).describe('A list of page blocks to add to the page'),
})
