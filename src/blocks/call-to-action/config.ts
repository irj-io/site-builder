import { z } from 'zod'

import { ButtonActionSchema } from '../../components/component-schema'
import { SectionPropsSchema } from '../../components/section/config'

export type CallToActionProps = z.infer<typeof CallToActionPropsSchema>
export const CallToActionPropsSchema = z.object({
	type: z.literal('callToAction'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	button: ButtonActionSchema,
	section: SectionPropsSchema.optional(),
})
