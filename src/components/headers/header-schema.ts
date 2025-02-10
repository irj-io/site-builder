import { z } from 'zod'

import { ActionSchema, MediaPropsSchema } from '../component-schema'

export type Header = z.infer<typeof HeaderSchema>
export const HeaderSchema = z.object({
	logo: MediaPropsSchema,
	navLinks: z.array(ActionSchema),
	theme: z.enum(['light', 'dark']).optional(),
})
