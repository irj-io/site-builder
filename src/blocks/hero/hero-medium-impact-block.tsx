import Image from 'next/image'
import { omit } from 'remeda'

import { Action } from '@/components/actions/action'
import { Section } from '@/components/section/section'
import { cn } from '@/utils/cn'
import { Hero } from '@/utils/page-schema'
import { BlockProps } from '../block-types'

export function HeroMediumImpactBlock(props: BlockProps<Hero>) {
	const { media, title, subtitle, actions = [], section: _sectionProps } = props

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : null
	const sectionClassName = _sectionProps?.className

	return (
		<Section className={cn('-mt-20 pt-20', sectionClassName)} {...sectionProps}>
			<div className="container mx-auto grid grid-cols-12 gap-8">
				<div className="col-span-5 px-6 flex flex-col justify-end">
					{title ? (
						<div className="mb-8">
							<h1 className="text-8xl leading-none font-extrabold whitespace-pre-wrap">{title}</h1>
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
				<div className="col-span-7 min-h-[600px] max-h-[800px] py-16">
					{media && typeof media === 'object' ? (
						<Image
							className="w-full h-full object-contain"
							src={media.src}
							alt=""
							quality={90}
							priority
							height={600}
							width={1280}
						/>
					) : null}
				</div>
			</div>
		</Section>
	)
}
