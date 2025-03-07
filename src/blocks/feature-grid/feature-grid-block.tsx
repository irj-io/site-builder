import { getSectionProps, Section } from '../../components/section/section'
import { SectionHeader } from '../../components/section/section-header'
import type { BlockProps } from '../block-types'
import type { FeatureGridProps } from './config'
import { FeatureGridItem } from './feature-grid-item'

export function FeatureGridBlock(props: BlockProps<FeatureGridProps>) {
	const { title, subtitle, features = [], section } = props

	return (
		<Section {...getSectionProps(section, { className: 'p-16' })}>
			<SectionHeader title={title} subtitle={subtitle} />

			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 py-8">
				{features.map((feature, index) => (
					<FeatureGridItem key={`feature-${index}`} {...feature} />
				))}
			</div>
		</Section>
	)
}
