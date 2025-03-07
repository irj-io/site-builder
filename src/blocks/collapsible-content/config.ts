import { z } from 'zod'

import { SectionPropsSchema } from '../../components/section/config'

export type CollapsibleContentPropsItem = z.infer<typeof CollapsibleContentItemPropsSchema>
const CollapsibleContentItemPropsSchema = z.object({
	title: z.string().optional(),
	content: z.string().optional(),
})

export type CollapsibleContentProps = z.infer<typeof CollapsibleContentPropsSchema>
export const CollapsibleContentPropsSchema = z.object({
	type: z.literal('collapsibleContent'),
	title: z.string().optional(),
	items: z.array(CollapsibleContentItemPropsSchema),
	section: SectionPropsSchema.optional(),
})
