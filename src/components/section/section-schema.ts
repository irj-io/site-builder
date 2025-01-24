import { z } from 'zod'

export type Section = z.infer<typeof SectionSchema>
export const SectionSchema = z.object({
	className: z.string().optional(),
})
