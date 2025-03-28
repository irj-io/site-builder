import { cn } from '../../utils/cn'
import { MdContent } from '../md-content'
import { Media } from '../media/media'
import type { TestimonialProps } from './config'

export function TestimonialHorizontal(props: TestimonialProps) {
	const { className, media, title, subtitle, content } = props

	return (
		<div className={cn('flex flex-col items-center px-4 py-6', className)}>
			<div className="text-center">
				{title ? <div className="text-4xl">{title}</div> : null}
				{subtitle ? <div className="text-2xl mb-4">{subtitle}</div> : null}
				{content ? <MdContent markdown={content} /> : null}
			</div>
			{media && typeof media === 'object' ? (
				<div className="size-32 rounded-full bg-cover bg-center mb-4 bg-gray-100 overflow-hidden">
					<Media media={media} imageClassName="object-cover w-full h-full" />
				</div>
			) : null}
		</div>
	)
}
