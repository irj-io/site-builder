import { z } from 'zod'

import { ActionSchema, MediaSchema } from '@/utils/page-schema'

export type Header = z.infer<typeof HeaderSchema>
export const HeaderSchema = z.object({
	logo: MediaSchema,
	navLinks: z.array(ActionSchema),
})
