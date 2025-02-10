import Image, { ImageProps } from 'next/image'

import { cn } from '@/utils/cn'
import { MediaProps } from '../component-schema'

interface MediaWithImageProps extends Omit<ImageProps, 'src' | 'alt'> {
	media: MediaProps
	imageClassName?: string
}

export function Media(props: MediaWithImageProps) {
	const { className, media, imageClassName, ...imageProps } = props

	switch (media.style) {
		case 'screenshot':
			return (
				<div className={cn('media-style-screenshot', className)}>
					<Image className={imageClassName} src={media.src} alt={media.alt} {...imageProps} />
				</div>
			)
		default:
			return (
				<div className={className}>
					<Image className={imageClassName} src={media.src} alt={media.alt} {...imageProps} />
				</div>
			)
	}
}
