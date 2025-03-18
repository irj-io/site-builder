import { MdContent } from '../md-content'
import { Media } from '../media/media'
import type { TestimonialProps } from './config'

export function TestimonialVertical(props: TestimonialProps) {
	const { media, title, subtitle, content } = props

	return (
		<div className="flex flex-col px-4 py-6">
			{media && typeof media === 'object' ? (
				<div className="size-48 rounded-full rounded-bl-[20rem] bg-cover bg-center mb-4 bg-gray-100 overflow-hidden">
					<Media media={media} imageClassName="object-cover w-full h-full" />
				</div>
			) : null}
			<div>
				{title ? <div className="text-4xl">{title}</div> : null}
				{subtitle ? <div className="text-2xl mb-4">{subtitle}</div> : null}
				{content ? <MdContent markdown={content} /> : null}
			</div>
		</div>
	)
}
