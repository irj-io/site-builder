import { MdContent } from '@/components/md-content'
import { FeatureGridItemProps } from './config'

export function FeatureGridItem(props: FeatureGridItemProps) {
	const { icon, title, content } = props

	return (
		<div className="flex flex-col items-center px-12 py-16">
			{icon ? <span className="material-symbols-rounded text-5xl">{icon}</span> : null}
			{title ? <div className="text-center text-2xl mt-5">{title}</div> : null}
			{content ? (
				<div className="text-center mt-2">
					<MdContent className="text-lg text-foreground/50" markdown={content} />
				</div>
			) : null}
		</div>
	)
}
