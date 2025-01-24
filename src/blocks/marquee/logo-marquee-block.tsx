import Image from 'next/image'

import { Marquee } from '@/components/marquee/marquee'
import { getSectionProps, Section } from '@/components/section/section'
import type { LogoMarquee } from '@/utils/page-schema'
import type { BlockProps } from '../block-types'

export function LogoMarqueeBlock(props: BlockProps<LogoMarquee>) {
	const { items, section } = props

	return (
		<Section {...getSectionProps(section)}>
			<Marquee>
				{items.map((item, index) => (
					<Image
						key={`logo-${index}`}
						src={item.src}
						alt=""
						className="h-[96px] px-4"
						height={88}
						width={128}
					/>
				))}
			</Marquee>
		</Section>
	)
}
