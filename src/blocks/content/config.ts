import { z } from 'zod'

import { SectionPropsSchema } from '../../components/section/config'
import { ContentSchema } from '../content-schema'

const ContentColumnSchema = z.object({
	content: ContentSchema.optional(),
})

export type ContentProps = z.infer<typeof ContentPropsSchema>
export const ContentPropsSchema = z.object({
	type: z.literal('content'),
	columns: z.array(ContentColumnSchema),
	section: SectionPropsSchema.optional(),
})
