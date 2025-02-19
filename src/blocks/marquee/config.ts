import { z } from 'zod'

import { ImagePropsSchema } from '@/components/media/config'
import { SectionPropsSchema } from '@/components/section/config'

export type LogoMarqueeProps = z.infer<typeof LogoMarqueePropsSchema>
export const LogoMarqueePropsSchema = z.object({
	type: z.literal('logoMarquee'),
	items: z.array(ImagePropsSchema),
	section: SectionPropsSchema.optional(),
})
