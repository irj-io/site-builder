import { Action } from '../../components/actions/action'
import { MdContent } from '../../components/md-content'
import { Media } from '../../components/media/media'
import { getSectionProps, Section } from '../../components/section/section'
import { cn } from '../../utils/cn'
import type { BlockProps } from '../block-types'
import type { FeatureBoxProps } from './config'

export function FeatureBoxBlock(props: BlockProps<FeatureBoxProps>) {
	const {
		media,
		title,
		overline,
		content,
		action,
		reverse,
		section,
		innerClassName,
		imageContainerClassName,
		contentContainerClassName,
	} = props
	const direction = reverse ? 'flex-row-reverse' : 'flex-row'

	return (
		<Section {...getSectionProps(section)}>
			<div
				className={cn(
					'xl:container mx-auto lg:flex sm:min-h-20 md:min-h-48 lg:min-h-64',
					direction,
					innerClassName
				)}
			>
				<div className={cn('grow lg:w-1/2', imageContainerClassName)}>
					{media && typeof media === 'object' ? (
						<Media
							media={media}
							imageClassName="size-full object-cover object-center w-full h-full"
							height={600}
							width={800}
						/>
					) : null}
				</div>
				<div
					className={cn('grow lg:w-1/2 p-12 sm:p-20 lg:p-28 xl:p-32', contentContainerClassName)}
				>
					{overline ? <div className="mb-1 text-primary">{overline}</div> : null}
					<div className="text-4xl font-semibold">{title}</div>
					{content ? (
						<div className="mt-4">
							<MdContent className="" markdown={content} />
						</div>
					) : null}
					{action ? (
						<div className="mt-4">
							<Action {...action} />
						</div>
					) : null}
				</div>
			</div>
		</Section>
	)
}
