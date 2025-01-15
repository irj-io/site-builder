import { LinkAction } from '@/utils/page-schema'

export function Link(props: LinkAction) {
	const { data } = props

	return (
		<a className="text-secondary hover:underline" href={data.href}>
			{data.label}
		</a>
	)
}
