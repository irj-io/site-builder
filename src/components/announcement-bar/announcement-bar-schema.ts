import { z } from 'zod'

import { SectionPropsSchema } from '../section/config'

const AnnouncementItemSchema = z.object({
	content: z.string(),
	startDate: z.coerce.date().optional(),
	endDate: z.coerce.date().optional(),
})

export type AnnouncementBar = z.infer<typeof AnnouncementBarSchema>
export const AnnouncementBarSchema = z.object({
	announcements: z.array(AnnouncementItemSchema).optional(),
	section: SectionPropsSchema.optional(),
})
