import { Action } from '@/components/actions/action'
import { getSectionProps, Section } from '@/components/section/section'
import type { CallToAction } from '@/utils/page-schema'
import type { BlockProps } from '../block-types'

export function CallToActionBlock(props: BlockProps<CallToAction>) {
	const { button, title, section } = props

	return (
		<Section {...getSectionProps(section, { className: 'p-16' })}>
			<div className="container mx-auto flex flex-col items-center justify-items-center text-center">
				{title ? <h3 className="text-4xl font-bold mb-8">{title}</h3> : null}
				<Action size="lg" {...button} />
			</div>
		</Section>
	)
}
