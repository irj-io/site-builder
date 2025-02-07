import { z } from 'zod'

import { MediaSchema } from '../component-schema'

export type TestimonialProps = z.infer<typeof TestimonialPropsSchema>
export const TestimonialPropsSchema = z.object({
	type: z.literal('testimonial'),
	variant: z.enum(['vertical']).default('vertical'),
	media: MediaSchema.optional(),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	content: z.string().optional(),
})
