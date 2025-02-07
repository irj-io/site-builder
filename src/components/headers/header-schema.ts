import { z } from 'zod'

import { ActionSchema, MediaSchema } from '../component-schema'

export type Header = z.infer<typeof HeaderSchema>
export const HeaderSchema = z.object({
	logo: MediaSchema,
	navLinks: z.array(ActionSchema),
	theme: z.enum(['light', 'dark']).optional(),
})
