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
	className: z.string().optional(),
})

export type VideoProps = z.infer<typeof VideoPropsSchema>
export const VideoPropsSchema = z.object({
	type: z.literal('video'),
	src: z.string(),
	autoPlay: z.boolean().optional(),
	loop: z.boolean().optional(),
	controls: z.boolean().optional(),
	muted: z.boolean().optional(),
	className: z.string().optional(),
})

export type MediaProps = z.infer<typeof MediaPropsSchema>
export const MediaPropsSchema = z.discriminatedUnion('type', [
	ImagePropsSchema,
	CustomSvgPropsSchema,
	VideoPropsSchema,
])
