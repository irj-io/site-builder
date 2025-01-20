interface MarqueeProps {
	children: React.ReactNode
}

export function Marquee({ children }: MarqueeProps) {
	return (
		<div className="flex flex-shrink-0 flex-grow-0 basis-auto overflow-x-hidden w-full">
			<div className="transition-transform">{children}</div>
		</div>
	)
}
