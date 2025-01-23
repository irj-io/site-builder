import Link from 'next/link'

import { Button } from '@/components/ui/button'
import type { Action } from '@/utils/page-schema'

export type ActionProps = Action

export function Action(props: ActionProps) {
	const { type, label, href, ...rest } = props
	switch (type) {
		case 'link':
			return (
				<Link href={href} className="text-foreground hover:underline hover:text-foreground/90">
					{label}
				</Link>
			)
		default:
		case 'button':
			return (
				<Button {...rest} asChild={'href' in props}>
					{typeof href === 'string' ? <Link href={href}>{label}</Link> : label}
				</Button>
			)
	}
}
