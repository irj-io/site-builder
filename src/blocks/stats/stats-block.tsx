import { omit } from 'remeda'

import { Section } from '@/components/section'
import { cn } from '@/utils/cn'
import { Stats } from '@/utils/page-schema'
import { BlockProps } from '../block-types'

export function StatsBlock(props: BlockProps<Stats>) {
	const { items, section: _sectionProps } = props

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : null
	const sectionClassName = _sectionProps?.className

	return (
		<Section className={cn(sectionClassName)} {...sectionProps}>
			<div className="container mx-auto px-6 py-12 flex justify-around">
				{items.map((item, index) => (
					<div key={`stats-${index}`} className="flex flex-col gap-4 items-center text-center">
						<p className="text-5xl truncate text-blue-600 font-extrabold">{item.value}</p>
						<p className="text-lg truncate text-on-surface/60">{item.label}</p>
					</div>
				))}
			</div>
		</Section>
	)
}
