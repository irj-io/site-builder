import { Button as HeadlessButton } from '@headlessui/react'

import { cn } from '@/utils/cn'
import { ButtonAction } from '@/utils/page-schema'

export type ButtonProps = ButtonAction

export function Button(props: ButtonProps) {
	const { color, href, label, startIcon, variant } = props

	const stateLayer = 'before:block before:absolute before:-inset-1'
	let classes = cn(
		stateLayer,
		'relative block h-12 leading-[3rem] px-6 font-semibold rounded-full overflow-hidden outline-0 flex items-center'
	)
	switch (variant) {
		default:
		case 'filled': {
			const style =
				'href' in props
					? 'active:ring-2 active:ring-primary active:ring-offset-2 active:before:bg-on-primary/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:before:bg-on-primary/30 hover:before:bg-on-primary/10'
					: 'data-[active]:ring-2 data-[active]:ring-primary data-[active]:ring-offset-2 data-[active]:before:bg-on-primary/30 data-[focus]:ring-2 data-[focus]:ring-primary data-[focus]:ring-offset-2 data-[focus]:before:bg-on-primary/30 data-[hover]:before:bg-on-primary/10'
			const colorStyle =
				color === 'primary'
					? 'bg-primary text-on-primary'
					: color === 'secondary'
						? 'bg-secondary text-on-secondary'
						: ''
			classes = cn(classes, style, colorStyle)
			break
		}
		case 'outlined': {
			const style =
				'href' in props
					? 'active:before:bg-primary/20 focus:before:bg-primary/10 hover:before:bg-primary/[0.08]'
					: 'data-[active]:before:bg-primary/20 data-[focus]:before:bg-primary/10 data-[hover]:before:bg-primary/[0.08]'
			const colorStyle =
				color === 'primary'
					? 'border-primary text-primary'
					: color === 'secondary'
						? 'border-secondary text-secondary'
						: 'border-outline'
			classes = cn(classes, style, 'border', colorStyle)
			break
		}
		case 'text': {
			const style =
				'href' in props
					? 'active:before:bg-primary/20 focus:before:bg-primary/10 hover:before:bg-primary/[0.08]'
					: 'data-[active]:before:bg-primary/20 data-[focus]:before:bg-primary/10 data-[hover]:before:bg-primary/[0.08]'
			const colorStyle =
				color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : ''
			classes = cn(classes, style, colorStyle)
			break
		}
	}

	return 'href' in props ? (
		<a className={classes} href={href}>
			{startIcon ? (
				<span className="material-symbols-rounded icon-fill text-2xl mr-2 -ml-2">{startIcon}</span>
			) : null}
			{label}
		</a>
	) : (
		<HeadlessButton className={classes}>
			{startIcon ? (
				<span className="material-symbols-rounded icon-fill text-2xl mr-2 -ml-2">{startIcon}</span>
			) : null}
			{label}
		</HeadlessButton>
	)
}
