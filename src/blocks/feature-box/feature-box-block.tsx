import { omit } from 'remeda'

import { Action } from '@/components/actions/action'
import { Section } from '@/components/section/section'
import { cn } from '@/utils/cn'
import { FeatureBox } from '@/utils/page-schema'
import { BlockProps } from '../block-types'

export function FeatureBoxBlock(props: BlockProps<FeatureBox>) {
	const { media, title, overline, content, action, reverse, section: _sectionProps } = props

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : null
	const sectionClassName = _sectionProps?.className
	const direction = reverse ? 'flex-row-reverse' : 'flex-row'

	return (
		<Section
			className={cn('container mx-auto flex min-h-64', direction, sectionClassName)}
			{...sectionProps}
		>
			<div className="grow w-3/6">
				{media && typeof media === 'object' ? (
					<div
						className="size-full bg-cover bg-center"
						style={{
							backgroundImage: `url('${media.src}')`,
						}}
					/>
				) : null}
			</div>
			<div className="grow w-3/6 p-8 sm:p-20 md:p-32">
				{overline ? <div className="text-sm mb-2">{overline}</div> : null}
				<div className="text-4xl font-semibold">{title}</div>
				{content ? <div className="text-lg mt-6 mb-2">{content}</div> : null}
				{action ? <Action {...action} /> : null}
			</div>
		</Section>
	)
}
