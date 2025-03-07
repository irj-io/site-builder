import { z } from 'zod'

import { SectionPropsSchema } from '../../components/section/config'

export type ContactFormProps = z.infer<typeof ContactFormPropsSchema>
export const ContactFormPropsSchema = z.object({
	type: z.literal('contactForm'),
	title: z.string().optional(),
	section: SectionPropsSchema.optional(),
})
