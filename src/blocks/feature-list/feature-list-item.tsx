import type { FeatureListItem } from '@/utils/page-schema'

export function FeatureListItem(props: FeatureListItem) {
	const { icon, content } = props

	return (
		<div className="flex items-start gap-3 px-4 py-1">
			{icon ? (
				<span className="material-symbols-rounded icon-fill text-xl text-primary">{icon}</span>
			) : null}
			{content ? <div className="text-xl">{content}</div> : null}
		</div>
	)
}
