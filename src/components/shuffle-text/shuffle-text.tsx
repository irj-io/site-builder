import { ShuffleTextClient } from './shuffle-text.client'

interface ShuffleTextProps {
	list: string[]
}

export function ShuffleText({ list }: ShuffleTextProps) {
	const initial = list[0] ?? ''
	return (
		<span>
			<ShuffleTextClient initial={initial} list={list} />
		</span>
	)
}
