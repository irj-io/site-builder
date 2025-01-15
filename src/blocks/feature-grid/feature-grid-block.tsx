import { omit } from 'remeda'

import { Section } from '@/components/section'
import { FeatureGrid } from '@/utils/page-schema'
import { BlockProps } from '../block-types'
import { FeatureGridItem } from './feature-grid-item'

export function FeatureGridBlock(props: BlockProps<FeatureGrid>) {
	const { data } = props
	const { title, subtitle, features = [], sectionProps: _sectionProps } = data

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : {}

	return (
		<Section className="p-16" {...sectionProps}>
			{title ? <div className="text-4xl text-center font-bold mb-3">{title}</div> : null}
			{subtitle ? <div className="text-2xl text-center mb-3">{subtitle}</div> : null}
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 py-8">
				{features.map((feature, index) => (
					<FeatureGridItem key={`feature-${index}`} {...feature} />
				))}
			</div>
		</Section>
	)
}
