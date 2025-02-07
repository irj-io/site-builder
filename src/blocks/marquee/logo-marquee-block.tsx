import Image from 'next/image'

import { Marquee } from '@/components/marquee/marquee'
import { getSectionProps, Section } from '@/components/section/section'
import type { BlockProps } from '../block-types'
import { LogoMarqueeProps } from './config'

export function LogoMarqueeBlock(props: BlockProps<LogoMarqueeProps>) {
	const { items, section } = props

	return (
		<Section {...getSectionProps(section)}>
			<Marquee>
				{items.map((item, index) => (
					<Image
						key={`logo-${index}`}
						src={item.src}
						alt=""
						className="h-[128px] px-4 object-contain"
						height={128}
						width={156}
					/>
				))}
			</Marquee>
		</Section>
	)
}
