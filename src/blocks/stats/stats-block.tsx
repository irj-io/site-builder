import { getSectionProps, Section } from '@/components/section/section'
import { BlockProps } from '../block-types'
import { StatsProps } from './config'

export function StatsBlock(props: BlockProps<StatsProps>) {
	const { items, section } = props

	return (
		<Section {...getSectionProps(section)}>
			<div className="container mx-auto px-6 py-12 flex justify-around">
				{items.map((item, index) => (
					<div key={`stats-${index}`} className="flex flex-col gap-4 items-center text-center">
						<p className="text-5xl truncate font-extrabold">{item.value}</p>
						<p className="text-lg truncate text-on-surface/60">{item.label}</p>
					</div>
				))}
			</div>
		</Section>
	)
}
