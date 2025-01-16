import Image from 'next/image'

const Action = ({ label }: { label: string }) => <div>{label}</div>

export function HeroHighImpactBlock(props) {
	const { media, title, actions = [] } = props

	return (
		<div className="relative -mt-[10.4rem] flex items-end text-white">
			<div className="container mx-auto mb-8 z-10 relative px-16">
				<div className="max-w-[34rem]">
					{title ? (
						<div className="mb-6 max-w-none mx-auto prose dark:prose-invert">
							<h1 className="text-7xl">{title}</h1>
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
						<div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
					</>
				) : null}
			</div>
		</div>
	)
}
