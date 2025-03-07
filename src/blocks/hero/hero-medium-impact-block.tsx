import { Action } from '../../components/actions/action'
import { Media } from '../../components/media/media'
import { getSectionProps, Section } from '../../components/section/section'
import { parseComponents } from '../../utils/parse-components'
import type { BlockProps } from '../block-types'
import type { HeroProps } from './config'

export function HeroMediumImpactBlock(props: BlockProps<HeroProps>) {
	const { media, title, subtitle, actions = [], section } = props

	return (
		<Section {...getSectionProps(section, { className: '-mt-20 pt-20' })}>
			<div className="container mx-auto grid grid-cols-12 gap-8">
				<div className="col-span-5 px-6 flex flex-col justify-end">
					{title ? (
						<div className="mb-8">
							<h1 className="text-8xl leading-none font-extrabold whitespace-pre-wrap">
								{parseComponents(title)}
							</h1>
						</div>
					) : null}
					{subtitle ? (
						<div className="mb-16">
							<h2 className="text-2xl font-bold mb-4 whitespace-pre-wrap">{subtitle}</h2>
							<div className="bg-foreground h-[4px] ml-[10%] mr-[60%]" />
						</div>
					) : null}
					{Array.isArray(actions) && actions.length > 0 ? (
						<ul className="flex gap-4 mb-16">
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
				<div className="col-span-7 min-h-[600px] max-h-[800px]">
					{media ? (
						<>
							<Media media={media} imageClassName="-z-10 object-cover" fill quality={90} priority />
							<div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-inverse-surface to-transparent" />
						</>
					) : null}
				</div>
			</div>
		</Section>
	)
}
