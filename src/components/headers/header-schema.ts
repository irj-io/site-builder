import { z } from 'zod'

import { ActionSchema } from '@/utils/page-schema'

export type Header = z.infer<typeof HeaderSchema>
export const HeaderSchema = z.object({
	navLinks: z.array(ActionSchema),
})
