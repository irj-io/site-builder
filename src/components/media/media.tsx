import Image, { type ImageProps } from 'next/image'
import { omit, pick } from 'remeda'

import { cn } from '../../utils/cn'
import { HeroSvg } from '../hero-svg'
import { type MediaProps } from './config'

interface MediaWithImageProps extends Omit<ImageProps, 'src' | 'alt'> {
	media: MediaProps
	imageClassName?: string
}

export function Media(props: MediaWithImageProps) {
	const { className, media, imageClassName, ...imageProps } = props

	switch (media.type) {
		case 'customSvg': {
			const customSvgs = {
				heroSvg: <HeroSvg {...imageProps} />,
			} as const
			return customSvgs[media.id as 'heroSvg']
		}
		case 'image': {
			const mediaProps = omit(media, ['style', 'src', 'alt', 'type'])
			switch (media.style) {
				case 'screenshot':
					return (
						<div className={cn('media-style-screenshot', className)}>
							<Image
								className={cn(imageClassName, mediaProps.className)}
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
								className={cn(imageClassName, mediaProps.className)}
								src={media.src}
								alt={media.alt}
								{...imageProps}
								{...mediaProps}
							/>
						</div>
					)
			}
		}

		case 'video': {
			const attributes: React.VideoHTMLAttributes<HTMLVideoElement> = pick(media, [
				'autoPlay',
				'controls',
				'loop',
				'muted',
			])

			// Enables inline playback on iOS devices, often necessary for autoplay to work on iOS Safari.
			if (attributes.autoPlay) {
				attributes.playsInline = true
			}

			return (
				<div className={className}>
					<video
						className={media.className}
						src={media.src}
						height={500}
						width={500}
						{...attributes}
					/>
				</div>
			)
		}
	}
}
