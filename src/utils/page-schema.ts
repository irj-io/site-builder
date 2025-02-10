import { z } from 'zod'

import { BlocksSchema } from '@/blocks/block-schema'

export type Page = z.infer<typeof PageSchema>
export const PageSchema = z.object({
	layout: z.array(BlocksSchema),
})
