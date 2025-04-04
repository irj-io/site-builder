import { z } from 'zod'

export type SectionProps = z.infer<typeof SectionPropsSchema>
export const SectionPropsSchema = z.object({
	className: z.string().optional(),
	id: z.string().optional(),
})
