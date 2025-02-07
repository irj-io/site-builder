import { z } from 'zod'

import {
	ActionSchema,
	ButtonActionSchema,
	IconSchema,
	ImageSchema,
	MediaSchema,
} from '@/components/component-schema'
import { SectionSchema } from '@/components/section/section-schema'
import { ContentPropsSchema } from './content/config'

export type Hero = z.infer<typeof HeroSchema>
const HeroBaseSchema = z.object({
	type: z.literal('hero'),
	variant: z.enum(['highImpact', 'mediumImpact', 'productScreenshot']),
	media: MediaSchema.optional(),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	actions: z.array(ActionSchema).optional(),
	section: SectionSchema.optional(),
})
const HeroHighImpactSchema = HeroBaseSchema.extend({
	variant: z.literal('highImpact'),
})
const HeroMediumImpactSchema = HeroBaseSchema.extend({
	variant: z.literal('mediumImpact'),
})
const HeroProductScreenshotSchema = HeroBaseSchema.extend({
	variant: z.literal('productScreenshot'),
})
export const HeroSchema = z.discriminatedUnion('variant', [
	HeroHighImpactSchema,
	HeroMediumImpactSchema,
	HeroProductScreenshotSchema,
])

export type FeatureBox = z.infer<typeof FeatureBoxSchema>
const FeatureBoxSchema = z.object({
	type: z.literal('featureBox'),
	media: MediaSchema.optional(),
	title: z.string().optional(),
	overline: z.string().optional(),
	content: z.string().optional(),
	action: ActionSchema.optional(),
	reverse: z.boolean().default(false),
	section: SectionSchema.optional(),
})

export type FeatureGridItem = z.infer<typeof FeatureGridItemSchema>
const FeatureGridItemSchema = z.object({
	icon: IconSchema.optional(),
	title: z.string().optional(),
	content: z.string().optional(),
})

export type FeatureGrid = z.infer<typeof FeatureGridSchema>
const FeatureGridSchema = z.object({
	type: z.literal('featureGrid'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	features: z.array(FeatureGridItemSchema),
	section: SectionSchema.optional(),
})

export type FeatureListItem = z.infer<typeof FeatureListItemSchema>
const FeatureListItemSchema = z.object({
	icon: IconSchema.optional(),
	content: z.string().optional(),
})

export type FeatureList = z.infer<typeof FeatureListSchema>
const FeatureListSchema = z.object({
	type: z.literal('featureList'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	features: z.array(FeatureListItemSchema),
	section: SectionSchema.optional(),
})

export type ContactForm = z.infer<typeof ContactFormSchema>
const ContactFormSchema = z.object({
	type: z.literal('contactForm'),
	title: z.string().optional(),
	section: SectionSchema.optional(),
})

export type CollapsibleContentItem = z.infer<typeof CollapsibleContentItemSchema>
const CollapsibleContentItemSchema = z.object({
	title: z.string().optional(),
	content: z.string().optional(),
})
export type CollapsibleContent = z.infer<typeof CollapsibleContentSchema>
const CollapsibleContentSchema = z.object({
	type: z.literal('collapsibleContent'),
	title: z.string().optional(),
	items: z.array(CollapsibleContentItemSchema),
	section: SectionSchema.optional(),
})

export type LogoMarquee = z.infer<typeof LogoMarqueeSchema>
const LogoMarqueeSchema = z.object({
	type: z.literal('logoMarquee'),
	items: z.array(ImageSchema),
	section: SectionSchema.optional(),
})

export type CallToAction = z.infer<typeof CallToActionSchema>
const CallToActionSchema = z.object({
	type: z.literal('callToAction'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	button: ButtonActionSchema,
	section: SectionSchema.optional(),
})

const StatItemSchema = z.object({
	label: z.string().optional(),
	value: z.union([z.number(), z.string()]),
})
export type Stats = z.infer<typeof StatsSchema>
const StatsSchema = z.object({
	type: z.literal('stats'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	items: z.array(StatItemSchema),
	section: SectionSchema.optional(),
})

const FaqItemSchema = z.object({
	title: z.string(),
	content: z.string(),
})
export type Faq = z.infer<typeof FaqSchema>
const FaqSchema = z.object({
	type: z.literal('faq'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	items: z.array(FaqItemSchema),
	section: SectionSchema.optional(),
})

const PlanSchema = z.object({
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

export type Pricing = z.infer<typeof PricingSchema>
const PricingSchema = z.object({
	type: z.literal('pricing'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	plans: z.array(PlanSchema),
	section: SectionSchema.optional(),
})

export type Blocks = z.infer<typeof BlocksSchema>
export const BlocksSchema = z.discriminatedUnion('type', [
	HeroBaseSchema,
	FeatureBoxSchema,
	FeatureGridSchema,
	FeatureListSchema,
	CollapsibleContentSchema,
	ContactFormSchema,
	ContentPropsSchema,
	LogoMarqueeSchema,
	CallToActionSchema,
	StatsSchema,
	FaqSchema,
	PricingSchema,
])
