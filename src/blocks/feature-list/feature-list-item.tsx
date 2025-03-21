import { MdContent } from '../../components/md-content'
import type { FeatureListItemProps } from './config'

export function FeatureListItem(props: FeatureListItemProps) {
	const { icon, content } = props

	return (
		<div className="flex items-start gap-3 px-4 py-1">
			{icon ? <span className="icon-symbols icon-fill text-xl text-primary">{icon}</span> : null}
			{content ? <MdContent className="text-xl" markdown={content} /> : null}
		</div>
	)
}
