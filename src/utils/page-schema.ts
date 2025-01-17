import { z } from 'zod'

// TODO: all data fields can be safely flattened. The discriminated union pattern should handle this fine.

const IconSchema = z.string()

const MediaSchema = z.object({
	src: z.string(),
})

export type Section = z.infer<typeof SectionSchema>
const SectionSchema = z.object({
	className: z.string().optional(),
})

export type ButtonAction = z.infer<typeof ButtonActionSchema>
export const ButtonActionSchema = z.object({
	type: z.literal('button'),
	variant: z.enum(['filled', 'outlined', 'text']).optional(),
	href: z.string().optional(),
	label: z.string(),
	color: z.enum(['primary', 'secondary', 'inherit']).default('inherit'),
	startIcon: z.string().optional(),
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

export type Testimonial = z.infer<typeof TestimonialSchema>
const TestimonialSchema = z.object({
	type: z.literal('testimonial'),
	variant: z.enum(['vertical']).default('vertical'),
	media: MediaSchema.optional(),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	content: z.string().optional(),
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

export type ContentBox = z.infer<typeof ContentBoxSchema>
const ContentBoxSchema = z.object({
	type: z.literal('contentBox'),
	title: z.string().optional(),
	subtitle: z.string().optional(),
	content: z.string().optional(),
	align: z.enum(['left', 'right', 'center', 'start', 'end']).default('start'),
	className: z.string().optional(),
})

const ContentColumnSchema = z.object({
	content: z.union([ContentBoxSchema, TestimonialSchema]).optional(),
	size: z
		.enum(['full', 'half', 'oneThird', 'twoThirds', 'oneQuarter', 'twoQuarters', 'threeQuarters'])
		.default('full'),
})
export type Content = z.infer<typeof ContentSchema>
const ContentSchema = z.object({
	type: z.literal('content'),
	columns: z.array(ContentColumnSchema),
	section: SectionSchema.optional(),
})

export const BlocksSchema = z.discriminatedUnion('type', [
	HeroSchema,
	FeatureBoxSchema,
	FeatureGridSchema,
	FeatureListSchema,
	CollapsibleContentSchema,
	ContactFormSchema,
	ContentSchema,
	// TODO: These aren't blocks. Should be extracted to a component schema instead
	TestimonialSchema,
	ContentBoxSchema,
])
export type Blocks = z.infer<typeof BlocksSchema>

export const PageSchema = z.object({
	layout: z.array(BlocksSchema),
})
