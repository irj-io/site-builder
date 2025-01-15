import type { Action } from '@/utils/page-schema'
import { Button } from '../button/button'
import { Link } from '../link/link'

export type ActionProps = Action

export function Action(props: ActionProps) {
	const { type } = props
	switch (type) {
		case 'link':
			return <Link {...props} />
		default:
		case 'button':
			return <Button {...props} />
	}
}
