import { z } from 'zod'

import { ActionSchema } from '../component-schema'
import { MediaPropsSchema } from '../media/config'

export type FooterColumn = z.infer<typeof FooterColumn>
const FooterColumn = z.object({
	title: z.string().optional(),
	content: z.array(ActionSchema).optional(),
})

export type Footer = z.infer<typeof FooterSchema>
export const FooterSchema = z.object({
	logo: MediaPropsSchema.optional(),
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
