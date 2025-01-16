import Image from 'next/image'

import { ActionProps } from '@/components/actions/action'
import { Hero } from '@/utils/page-schema'
import { BlockProps } from '../block-types'

const Action = (props: ActionProps) => <div>{props.label}</div>

export function HeroProductScreenshotBlock(props: BlockProps<Hero>) {
	const { media, title, subtitle, actions = [] } = props

	return (
		<div className="flex flex-col">
			<div className="container mx-auto mt-16 mb-16 z-10 relative px-16">
				<div className="text-center">
					{title ? (
						<div className="mb-6 max-w-none mx-auto prose dark:prose-invert">
							<h1 className="text-5xl font-bold">{title}</h1>
						</div>
					) : null}
					{subtitle ? (
						<div className="mb-2 max-w-none mx-auto prose dark:prose-invert">
							<h1 className="text-2xl font-bold">{subtitle}</h1>
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
				{media && typeof media === 'object' ? (
					<div className="flex items-center justify-center mt-16">
						<Image
							className="rounded-lg shadow-2xl"
							src={media.src}
							alt=""
							quality={90}
							sizes={'100vw'}
							width={40}
							height={40}
							style={{
								height: 400,
								width: 'auto',
							}}
						/>
					</div>
				) : null}
			</div>
		</div>
	)
}
