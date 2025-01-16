import { z } from 'zod'

// TODO: all data fields can be safely flattened. The discriminated union pattern should handle this fine.

const IconSchema = z.string()

const MediaSchema = z.object({
	src: z.string(),
})

export type ButtonAction = z.infer<typeof ButtonActionSchema>
export const ButtonActionSchema = z.object({
	type: z.literal('button'),
	variant: z.enum(['filled', 'outlined', 'text']).optional(),
	href: z.string().optional(),
	label: z.string(),
})

export type LinkAction = z.infer<typeof LinkActionSchema>
export const LinkActionSchema = z.object({
	type: z.literal('link'),
	href: z.string(),
	label: z.string(),
})

export type Action = z.infer<typeof ActionSchema>
export const ActionSchema = z.discriminatedUnion('type', [ButtonActionSchema, LinkActionSchema])

export type Hero = z.infer<typeof HeroSchema>
const HeroSchema = z.object({
	type: z.literal('hero'),
	variant: z.enum(['highImpact', 'productScreenshot']).optional(),
	media: MediaSchema.optional(),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	actions: z.array(ActionSchema).optional(),
})

export type FeatureBox = z.infer<typeof FeatureBoxSchema>
const FeatureBoxSchema = z.object({
	type: z.literal('featureBox'),
	media: MediaSchema.optional(),
	title: z.string().optional(),
	overline: z.string().optional(),
	content: z.string().optional(),
	action: ActionSchema.optional(),
	reverse: z.boolean().default(false),
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
})

export type Testimonial = z.infer<typeof TestimonialSchema>
const TestimonialSchema = z.object({
	type: z.literal('testimonial'),
	variant: z.enum(['vertical']),
	media: MediaSchema.optional(),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	content: z.string().optional(),
})

export type ContactFormBlock = z.infer<typeof ContactFormBlockSchema>
const ContactFormBlockSchema = z.object({
	type: z.literal('contactForm'),
	title: z.string().optional(),
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
})

export const BlocksSchema = z.discriminatedUnion('type', [
	HeroSchema,
	FeatureBoxSchema,
	FeatureGridSchema,
	FeatureListSchema,
	TestimonialSchema,
	CollapsibleContentSchema,
	ContactFormBlockSchema,
])
export type Blocks = z.infer<typeof BlocksSchema>

export const PageSchema = z.object({
	layout: z.array(BlocksSchema),
})
