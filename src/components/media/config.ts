import { z } from 'zod'

export type CustomSvgProps = z.infer<typeof ImagePropsSchema>
export const CustomSvgPropsSchema = z.object({
	type: z.literal('customSvg'),
	id: z.string(),
})

export type ImageProps = z.infer<typeof ImagePropsSchema>
export const ImagePropsSchema = z.object({
	type: z.literal('image'),
	src: z.string(),
	alt: z.string().default(''),
	style: z.enum(['screenshot']).optional(),
	width: z.number().optional(),
	height: z.number().optional(),
})

export type MediaProps = z.infer<typeof MediaPropsSchema>
export const MediaPropsSchema = z.discriminatedUnion('type', [
	ImagePropsSchema,
	CustomSvgPropsSchema,
])
