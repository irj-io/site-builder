import type { ActionProps } from '../../components/actions/action'
import { Media } from '../../components/media/media'
import { parseComponents } from '../../utils/parse-components'
import type { BlockProps } from '../block-types'
import type { HeroProps } from './config'

const Action = (props: ActionProps) => <div>{props.label}</div>

export function HeroProductScreenshotBlock(props: BlockProps<HeroProps>) {
	const { media, title, subtitle, actions = [] } = props

	return (
		<div className="flex flex-col">
			<div className="container mx-auto mt-16 mb-16 z-10 relative px-16">
				<div className="text-center">
					{title ? (
						<div className="mb-6 max-w-none mx-auto">
							<h1 className="text-5xl font-bold">{parseComponents(title)}</h1>
						</div>
					) : null}
					{subtitle ? (
						<div className="mb-2 max-w-none mx-auto">
							<h2 className="text-2xl font-bold">{parseComponents(subtitle)}</h2>
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
						<Media
							className="rounded-lg shadow-2xl"
							media={media}
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
