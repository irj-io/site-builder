import { omit } from 'remeda'

import { Action } from '@/components/actions/action'
import { Section, type SectionProps } from '@/components/section'
import { cn } from '@/utils/cn'
import { FeatureBox } from '@/utils/page-schema'
import { BlockProps } from '../block-types'

export function FeatureBoxBlock(props: BlockProps<FeatureBox>) {
	const { data } = props
	const { media, title, overline, content, action, reverse, sectionProps: _sectionProps } = data

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : {}
	const direction = reverse ? 'flex-row-reverse' : 'flex-row'

	return (
		<Section
			className={cn('container mx-auto flex min-h-64', direction, _sectionProps?.className)}
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
