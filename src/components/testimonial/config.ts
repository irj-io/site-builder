import { z } from 'zod'

import { MediaPropsSchema } from '../media/config'

export type TestimonialProps = z.infer<typeof TestimonialPropsSchema>
export const TestimonialPropsSchema = z.object({
	type: z.literal('testimonial'),
	variant: z.enum(['horizontal', 'vertical']).default('vertical'),
	media: MediaPropsSchema.optional(),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	content: z.string().optional(),
	className: z.string().optional(),
})
