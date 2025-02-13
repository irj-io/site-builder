import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { omit } from 'remeda'

import { cn } from '@/utils/cn'

const sharedClasses = 'text-on-surface'

export const MdH1 = (props: ComponentProps<'h1'>) => (
	<h1
		className={cn(
			sharedClasses,
			'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
			'my-[10px] [&:not(:first-child)]:mt-6'
		)}
		{...props}
	/>
)

export const MdH2 = (props: ComponentProps<'h2'>) => (
	<h2
		className={cn(
			sharedClasses,
			'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
			'my-[10px] [&:not(:first-child)]:mt-6'
		)}
		{...props}
	/>
)

export const MdH3 = (props: ComponentProps<'h3'>) => (
	<h3
		className={cn(
			sharedClasses,
			'scroll-m-20 text-2xl font-semibold tracking-tight',
			'my-[10px] [&:not(:first-child)]:mt-6'
		)}
		{...props}
	/>
)

export const MdH4 = (props: ComponentProps<'h4'>) => (
	<h4
		className={cn(
			sharedClasses,
			'scroll-m-20 text-xl font-semibold tracking-tight',
			'my-[10px] [&:not(:first-child)]:mt-6'
		)}
		{...props}
	/>
)

export const MdH5 = (props: ComponentProps<'h5'>) => (
	<h5
		className={cn(
			sharedClasses,
			'scroll-m-20 text-xl font-semibold tracking-tight',
			'my-[10px] [&:not(:first-child)]:mt-6'
		)}
		{...props}
	/>
)

export const MdH6 = (props: ComponentProps<'h6'>) => (
	<h6
		className={cn(
			sharedClasses,
			'scroll-m-20 text-xl font-semibold tracking-tight',
			'my-[10px] [&:not(:first-child)]:mt-6'
		)}
		{...props}
	/>
)

export const MdParagraph = (props: ComponentProps<'p'>) => (
	<p
		className={cn(sharedClasses, 'leading-7 [&:not(:first-child)]:mt-5', 'text-xl font-light mb-6')}
		{...props}
	/>
)

export const MdBlockquote = (props: ComponentProps<'blockquote'>) => (
	<blockquote
		className={cn(sharedClasses, 'mt-6 border-l-2 pl-6 italic', 'text-xl font-light')}
		{...props}
	/>
)

export const MdUl = (props: ComponentProps<'ul'>) => (
	<ul
		className={cn(sharedClasses, 'my-6 ml-6 list-disc [&>li]:mt-2', 'text-xl font-light')}
		{...props}
	/>
)

export const MdOl = (props: ComponentProps<'ol'>) => (
	<ol className={cn(sharedClasses, 'my-6 ml-6 [&>li]:mt-2', 'text-xl font-light')} {...props} />
)

export const MdCode = (props: ComponentProps<'code'>) => (
	<code
		className={cn(
			sharedClasses,
			'relative block rounded-xl bg-muted px-[1.5rem] py-[1.5rem] font-mono text-base whitespace-pre-wrap'
		)}
		{...props}
	/>
)

export const MdLink = (props: ComponentProps<typeof Link>) => (
	<Link
		className={cn(
			sharedClasses,
			'text-xl text-blue-500 hover:text-blue-600 hover:underline font-light leading-[30px] mb-5'
		)}
		{...props}
	/>
)

export const MdImg = (props: ComponentProps<typeof Image>) =>
	typeof props.src === 'string' && props.src.startsWith('/assets/') ? (
		<Image
			style={{ width: '100%', height: 'auto' }}
			alt={props.alt || ''}
			height={800}
			width={1280}
			{...(omit(props, ['alt']) as Omit<ImageProps, 'alt'>)}
		/>
	) : null
