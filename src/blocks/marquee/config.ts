import { z } from 'zod'

import { ImageSchema } from '@/components/component-schema'
import { SectionPropsSchema } from '@/components/section/config'

export type LogoMarqueeProps = z.infer<typeof LogoMarqueePropsSchema>
export const LogoMarqueePropsSchema = z.object({
	type: z.literal('logoMarquee'),
	items: z.array(ImageSchema),
	section: SectionPropsSchema.optional(),
})
