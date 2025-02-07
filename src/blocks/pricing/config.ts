import { z } from 'zod'

import { ActionSchema } from '@/components/component-schema'
import { SectionPropsSchema } from '@/components/section/config'

const PlanPropsSchema = z.object({
	type: z.string(),
	price: z.object({
		usd: z.string(),
		eur: z.string(),
		gbp: z.string(),
		zar: z.string(),
	}),
	descr: z.string().optional(),
	features: z.array(z.object({ label: z.string() })),
	action: ActionSchema,
})

export type PricingProps = z.infer<typeof PricingPropsSchema>
export const PricingPropsSchema = z.object({
	type: z.literal('pricing'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	plans: z.array(PlanPropsSchema),
	section: SectionPropsSchema.optional(),
})
