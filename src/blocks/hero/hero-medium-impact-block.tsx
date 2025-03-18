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
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-12 lg:gap-6 ">
					<div className="lg:col-span-5 px-6 pt-12 flex flex-col justify-end">
						{title ? (
							<div className="mb-8">
								<h1 className="text-6xl lg:text-7xl 2xl:text-8xl leading-none font-extrabold whitespace-pre-wrap">
									{parseComponents(title)}
								</h1>
							</div>
						) : null}
						{subtitle ? (
							<div className="mb-16">
								<h2 className="text-2xl font-bold mb-4 whitespace-pre-wrap">{subtitle}</h2>
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
					<div className="lg:col-span-7 pt-8 self-end justify-items-end lg:-mr-8">
						{media ? (
							<Media
								media={media}
								imageClassName="-z-10 object-cover w-full h-full"
								quality={90}
								priority
								width={600}
								height={800}
							/>
						) : null}
					</div>
				</div>
			</div>
		</Section>
	)
}
