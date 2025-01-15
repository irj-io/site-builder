export function TestimonialVertical(props) {
	const { data } = props
	const { media, title, subtitle, content } = data

	return (
		<div className="flex flex-col px-4 py-6">
			{media && typeof media === 'object' ? (
				<div
					className="size-48 rounded-full rounded-bl-[20rem] bg-cover bg-center mb-4"
					style={{
						backgroundImage: `url('${media.src}')`,
					}}
				/>
			) : null}
			<div>
				{title ? <div className="text-4xl">{title}</div> : null}
				{subtitle ? <div className="text-2xl mb-4">{subtitle}</div> : null}
				{content ? <div className="">{content}</div> : null}
			</div>
		</div>
	)
}
