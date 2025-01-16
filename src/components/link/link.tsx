import { LinkAction } from '@/utils/page-schema'

export function Link(props: LinkAction) {
	const { href, label } = props

	return (
		<a className="text-secondary hover:underline" href={href}>
			{label}
		</a>
	)
}
