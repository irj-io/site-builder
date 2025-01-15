import { Button as HeadlessButton } from '@headlessui/react'

import { cn } from '@/utils/cn'
import { ButtonAction } from '@/utils/page-schema'

export type ButtonProps = ButtonAction

export function Button(props: ButtonProps) {
	const { data, variant } = props

	const stateLayer = 'before:block before:absolute before:-inset-1'
	let classes = cn(
		stateLayer,
		'relative block h-12 leading-[3rem] px-6 font-semibold rounded-full overflow-hidden outline-0'
	)
	switch (variant) {
		default:
		case 'filled': {
			const style =
				'href' in data
					? 'active:ring-2 active:ring-primary active:ring-offset-2 active:before:bg-on-primary/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:before:bg-on-primary/30 hover:before:bg-on-primary/10'
					: 'data-[active]:ring-2 data-[active]:ring-primary data-[active]:ring-offset-2 data-[active]:before:bg-on-primary/30 data-[focus]:ring-2 data-[focus]:ring-primary data-[focus]:ring-offset-2 data-[focus]:before:bg-on-primary/30 data-[hover]:before:bg-on-primary/10'
			classes = cn(classes, style, 'bg-primary text-on-primary')
			break
		}
		case 'outlined': {
			const style =
				'href' in data
					? 'active:before:bg-primary/20 focus:before:bg-primary/10 hover:before:bg-primary/[0.08]'
					: 'data-[active]:before:bg-primary/20 data-[focus]:before:bg-primary/10 data-[hover]:before:bg-primary/[0.08]'
			classes = cn(classes, style, 'border border-outline')
			break
		}
		case 'text': {
			const style =
				'href' in data
					? 'active:before:bg-primary/20 focus:before:bg-primary/10 hover:before:bg-primary/[0.08]'
					: 'data-[active]:before:bg-primary/20 data-[focus]:before:bg-primary/10 data-[hover]:before:bg-primary/[0.08]'
			classes = cn(classes, style)
			break
		}
	}

	return 'href' in data ? (
		<a className={classes} href={data.href}>
			{data.label}
		</a>
	) : (
		<HeadlessButton className={classes}>{data.label}</HeadlessButton>
	)
}
