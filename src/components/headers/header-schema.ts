import { z } from 'zod'

import { ActionSchema } from '../component-schema'
import { MediaPropsSchema } from '../media/config'

export type Header = z.infer<typeof HeaderSchema>
export const HeaderSchema = z.object({
	logo: MediaPropsSchema,
	navLinks: z.array(ActionSchema),
	theme: z.enum(['light', 'dark']).optional(),
})
