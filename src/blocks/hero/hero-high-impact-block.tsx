import Image from 'next/image'

import { Action } from '@/components/actions/action'
import { Hero } from '@/utils/page-schema'
import { BlockProps } from '../block-types'

export function HeroHighImpactBlock(props: BlockProps<Hero>) {
	const { media, title, subtitle, actions = [] } = props

	return (
		<div className="relative -mt-[10.4rem] flex items-end text-white">
			<div className="container mx-auto mb-8 z-10 relative px-16">
				<div className="max-w-[60vw] pb-[88px]">
					{title ? (
						<div className="mb-8 max-w-none mx-auto">
							<h1 className="text-8xl leading-tight font-extrabold">{title}</h1>
						</div>
					) : null}
					{subtitle ? (
						<div className="mb-16 max-w-none mx-auto">
							<h2 className="text-xl">{subtitle}</h2>
						</div>
					) : null}
					{Array.isArray(actions) && actions.length > 0 ? (
						<ul className="flex gap-4">
							{actions.map((action, i) => {
								return (
									<li key={i}>
										<Action {...action} />
									</li>
								)
							})}
						</ul>
					) : null}
				</div>
			</div>
			<div className="min-h-[80vh] select-none">
				{media && typeof media === 'object' ? (
					<>
						<Image
							className="-z-10 object-cover"
							fill
							src={media.src}
							alt=""
							quality={90}
							priority
						/>
						<div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-inverse-surface to-transparent" />
					</>
				) : null}
			</div>
		</div>
	)
}
