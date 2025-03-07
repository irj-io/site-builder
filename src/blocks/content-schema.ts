import { z } from 'zod'

import { ContentBoxPropsSchema } from '../components/content-box/config'
import { ImagePropsSchema } from '../components/media/config'
import { TestimonialPropsSchema } from '../components/testimonial/config'

export type Content = z.infer<typeof ContentSchema>
export const ContentSchema = z.discriminatedUnion('type', [
	ContentBoxPropsSchema,
	TestimonialPropsSchema,
	ImagePropsSchema,
])
