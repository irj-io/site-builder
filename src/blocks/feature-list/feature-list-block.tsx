import { getSectionProps, Section } from '@/components/section/section'
import { BlockProps } from '../block-types'
import { FeatureListProps } from './config'
import { FeatureListItem } from './feature-list-item'

export function FeatureListBlock(props: BlockProps<FeatureListProps>) {
	const { title, subtitle, features, section } = props

	return (
		<Section {...getSectionProps(section, { className: 'py-16' })}>
			{title ? <div className="text-4xl text-center font-bold mb-3">{title}</div> : null}
			{subtitle ? <div className="text-2xl text-center mb-3">{subtitle}</div> : null}
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 py-8">
				{features.map((feature, index) => (
					<FeatureListItem key={`feature-${index}`} {...feature} />
				))}
			</div>
		</Section>
	)
}
