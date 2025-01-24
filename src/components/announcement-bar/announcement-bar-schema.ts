import { z } from 'zod'

import { SectionSchema } from '../section/section-schema'

const AnnouncementItemSchema = z.object({
	content: z.string(),
	startDate: z.coerce.date().optional(),
	endDate: z.coerce.date().optional(),
})

export type AnnouncementBar = z.infer<typeof AnnouncementBarSchema>
export const AnnouncementBarSchema = z.object({
	announcements: z.array(AnnouncementItemSchema).optional(),
	section: SectionSchema.optional(),
})
