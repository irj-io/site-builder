import Image from 'next/image'
import { omit } from 'remeda'

import { Section } from '@/components/section'
import { cn } from '@/utils/cn'
import type { LogoMarquee } from '@/utils/page-schema'
import type { BlockProps } from '../block-types'

export function LogoMarqueeBlock(props: BlockProps<LogoMarquee>) {
	const { items, section: _sectionProps } = props

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : null
	const sectionClassName = _sectionProps?.className

	return (
		<Section className={cn(sectionClassName)} {...sectionProps}>
			<div className="flex items-center">
				{items.map((item, index) => (
					<Image
						key={`logo-${index}`}
						src={item.src}
						alt=""
						className="px-4"
						height={88}
						width={128}
					/>
				))}
			</div>
		</Section>
	)
}
