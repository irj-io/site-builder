import Link from 'next/link'

import { Button } from '@/components/ui/button'
import type { Action } from '@/utils/page-schema'

export type ActionProps = Action

export function Action(props: ActionProps) {
	switch (props.type) {
		case 'link': {
			const { label, href } = props
			return (
				<Link href={href} className="hover:underline hover:text-foreground/90">
					{label}
				</Link>
			)
		}
		default:
		case 'button': {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { label, href, startIcon, type, ...rest } = props

			const content = startIcon ? (
				<>
					<span className="material-symbols-rounded">{startIcon}</span> {label}
				</>
			) : (
				label
			)

			return (
				<Button {...rest} asChild={'href' in props}>
					{typeof href === 'string' ? <Link href={href}>{content}</Link> : content}
				</Button>
			)
		}
	}
}
