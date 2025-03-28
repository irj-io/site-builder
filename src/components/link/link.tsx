import type { LinkAction } from '../component-schema'

export function Link(props: Pick<LinkAction, 'href' | 'label'>) {
	const { href, label } = props

	return (
		<a className="text-foreground hover:underline" href={href}>
			{label}
		</a>
	)
}
