import { z } from 'zod'

import { ContentBoxPropsSchema } from '@/components/content-box/config'
import { SectionSchema } from '@/components/section/section-schema'
import { TestimonialPropsSchema } from '@/components/testimonial/config'

const ContentColumnSchema = z.object({
	content: z.union([ContentBoxPropsSchema, TestimonialPropsSchema]).optional(),
})

export type ContentProps = z.infer<typeof ContentPropsSchema>
export const ContentPropsSchema = z.object({
	type: z.literal('content'),
	columns: z.array(ContentColumnSchema),
	section: SectionSchema.optional(),
})
