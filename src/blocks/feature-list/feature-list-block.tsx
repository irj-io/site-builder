import { Section } from '@/components/section'
import { FeatureList } from '@/utils/page-schema'
import { BlockProps } from '../block-types'
import { FeatureListItem } from './feature-list-item'

export function FeatureListBlock(props: BlockProps<FeatureList>) {
	const { data } = props
	const { title, subtitle, features, _secionProps: sectionProps } = data

	return (
		<Section className="p-16" {...sectionProps}>
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
