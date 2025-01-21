import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { omit } from 'remeda'

import { cn } from '@/utils/cn'

const sharedClasses = 'text-on-surface'

export const MdH1 = (props: ComponentProps<'h1'>) => (
	<h1 className={cn(sharedClasses, 'text-5xl font-bold my-[10px]')} {...props} />
)

export const MdH2 = (props: ComponentProps<'h2'>) => (
	<h2 className={cn(sharedClasses, 'text-3xl font-bold my-[10px]')} {...props} />
)

export const MdH3 = (props: ComponentProps<'h3'>) => (
	<h3 className={cn(sharedClasses, 'text-2xl font-bold my-[10px]')} {...props} />
)

export const MdH4 = (props: ComponentProps<'h4'>) => (
	<h4 className={cn(sharedClasses, 'text-xl font-bold my-[10px]')} {...props} />
)

export const MdH5 = (props: ComponentProps<'h5'>) => (
	<h5 className={cn(sharedClasses, 'text-xl font-bold my-[10px]')} {...props} />
)

export const MdH6 = (props: ComponentProps<'h6'>) => (
	<h6 className={cn(sharedClasses, 'text-xl font-bold my-[10px]')} {...props} />
)

export const MdParagraph = (props: ComponentProps<'p'>) => (
	<p className={cn(sharedClasses, 'text-xl font-light leading-[30px] mb-5')} {...props} />
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
	typeof props.src === 'string' && /^\/assets\//.test(props.src) ? (
		<Image
			style={{ width: '100%', height: 'auto' }}
			alt={props.alt || ''}
			height={800}
			width={1280}
			{...(omit(props, ['alt']) as Omit<ImageProps, 'alt'>)}
		/>
	) : null
