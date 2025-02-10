import { z } from 'zod'

export const IconSchema = z.string()

export const ImageSchema = z.object({
	src: z.string(),
})

export type MediaProps = z.infer<typeof MediaPropsSchema>
export const MediaPropsSchema = z.object({
	src: z.string(),
	alt: z.string().default(''),
	style: z.enum(['screenshot']).optional(),
})

export type ButtonAction = z.infer<typeof ButtonActionSchema>
export const ButtonActionSchema = z.object({
	type: z.literal('button'),
	variant: z.enum(['default', 'outline', 'secondary', 'destructive', 'ghost', 'link']).optional(),
	href: z.string().optional(),
	label: z.string(),
	startIcon: z.string().optional(),
	size: z.enum(['default', 'sm', 'lg', 'icon']).optional(),
})

export type LinkAction = z.infer<typeof LinkActionSchema>
export const LinkActionSchema = z.object({
	type: z.literal('link'),
	href: z.string(),
	label: z.string(),
})

export type Action = z.infer<typeof ActionSchema>
export const ActionSchema = z.discriminatedUnion('type', [ButtonActionSchema, LinkActionSchema])
