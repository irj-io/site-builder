import { z } from 'zod'

import { ActionSchema } from '@/utils/page-schema'

export type FooterColumn = z.infer<typeof FooterColumn>
const FooterColumn = z.object({
	title: z.string().optional(),
	content: z.array(ActionSchema).optional(),
})

export type Footer = z.infer<typeof FooterSchema>
export const FooterSchema = z.object({
	topSection: z
		.object({
			content: z.string().optional(),
		})
		.optional(),
	columns: z.array(FooterColumn).optional(),
	bottomSection: z
		.object({
			content: z.string().optional(),
		})
		.optional(),
})
