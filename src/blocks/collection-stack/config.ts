import { z } from 'zod'

import { SectionPropsSchema } from '../../components/section/config'

export type CollectionStackProps = z.infer<typeof CollectionStackPropsSchema>
export const CollectionStackPropsSchema = z.object({
	type: z.literal('collectionStack'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	collectionId: z.string(),
	section: SectionPropsSchema.optional(),
})
