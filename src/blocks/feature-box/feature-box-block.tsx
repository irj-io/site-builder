import { Action } from '@/components/actions/action'
import { MdContent } from '@/components/md-content'
import { Media } from '@/components/media/media'
import { getSectionProps, Section } from '@/components/section/section'
import { cn } from '@/utils/cn'
import { BlockProps } from '../block-types'
import { FeatureBoxProps } from './config'

export function FeatureBoxBlock(props: BlockProps<FeatureBoxProps>) {
	const { media, title, overline, content, action, reverse, section } = props

	const direction = reverse ? 'flex-row-reverse' : 'flex-row'

	return (
		<Section
			{...getSectionProps(section, { className: cn('container mx-auto flex min-h-64', direction) })}
		>
			<div className="grow w-3/6">
				{media && typeof media === 'object' ? (
					<Media
						media={media}
						className="w-full h-full"
						imageClassName="size-full object-cover object-center w-full h-full"
						height={400}
						width={600}
					/>
				) : null}
			</div>
			<div className="grow w-3/6 p-8 sm:p-20 md:p-32">
				{overline ? <div className="text-sm mb-2">{overline}</div> : null}
				<div className="text-4xl font-semibold">{title}</div>
				{content ? (
					<div className="my-6">
						<MdContent className="text-lg" markdown={content} />
					</div>
				) : null}
				{action ? <Action {...action} /> : null}
			</div>
		</Section>
	)
}
