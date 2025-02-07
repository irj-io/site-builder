import { z } from 'zod'

import { ActionSchema, MediaSchema } from '@/components/component-schema'
import { SectionPropsSchema } from '@/components/section/config'

export type FeatureBoxProps = z.infer<typeof FeatureBoxPropsSchema>
export const FeatureBoxPropsSchema = z.object({
	type: z.literal('featureBox'),
	media: MediaSchema.optional(),
	title: z.string().optional(),
	overline: z.string().optional(),
	content: z.string().optional(),
	action: ActionSchema.optional(),
	reverse: z.boolean().default(false),
	section: SectionPropsSchema.optional(),
})
