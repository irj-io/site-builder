import Image from 'next/image'

import { Marquee } from '../../components/marquee/marquee'
import { getSectionProps, Section } from '../../components/section/section'
import type { BlockProps } from '../block-types'
import type { LogoMarqueeProps } from './config'

export function LogoMarqueeBlock(props: BlockProps<LogoMarqueeProps>) {
	const { items, section } = props

	return (
		<Section {...getSectionProps(section)}>
			<div className="container mx-auto max-w-3xl relative overflow-hidden">
				<div className="absolute inset-0 bg-linear-[90deg,background,transparent_15%,transparent_85%,background] z-10" />

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
			</div>
		</Section>
	)
}
