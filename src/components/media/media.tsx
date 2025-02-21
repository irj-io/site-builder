import Image, { ImageProps } from 'next/image'
import { omit } from 'remeda'

import { cn } from '@/utils/cn'
import { HeroSvg } from '../hero-svg'
import { MediaProps } from './config'

interface MediaWithImageProps extends Omit<ImageProps, 'src' | 'alt'> {
	media: MediaProps
	imageClassName?: string
}

export function Media(props: MediaWithImageProps) {
	const { className, media, imageClassName, ...imageProps } = props

	switch (media.type) {
		case 'customSvg':
			const customSvgs = {
				heroSvg: <HeroSvg {...imageProps} />,
			} as const
			return customSvgs[media.id as 'heroSvg']
		case 'image':
			const mediaProps = omit(media, ['style', 'src', 'alt', 'type'])
			switch (media.style) {
				case 'screenshot':
					return (
						<div className={cn('media-style-screenshot', className)}>
							<Image
								className={imageClassName}
								src={media.src}
								alt={media.alt}
								{...imageProps}
								{...mediaProps}
							/>
						</div>
					)
				default:
					return (
						<div className={className}>
							<Image
								className={imageClassName}
								src={media.src}
								alt={media.alt}
								{...imageProps}
								{...mediaProps}
							/>
						</div>
					)
			}
	}
}
