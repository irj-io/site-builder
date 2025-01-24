import { omit } from 'remeda'

import { Action } from '@/components/actions/action'
import { Section } from '@/components/section/section'
import { cn } from '@/utils/cn'
import type { CallToAction } from '@/utils/page-schema'
import type { BlockProps } from '../block-types'

export function CallToActionBlock(props: BlockProps<CallToAction>) {
	const { button, title, section: _sectionProps } = props

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : null
	const sectionClassName = _sectionProps?.className
	return (
		<Section className={cn('p-16', sectionClassName)} {...sectionProps}>
			<div className="container mx-auto flex flex-col items-center justify-items-center text-center">
				{title ? <h3 className="text-4xl font-bold mb-8">{title}</h3> : null}
				<Action size="lg" {...button} />
			</div>
		</Section>
	)
}
