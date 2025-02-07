import { FeatureGridItemProps } from './config'

export function FeatureGridItem(props: FeatureGridItemProps) {
	const { icon, title, content } = props

	return (
		<div className="flex flex-col items-center px-12 py-16">
			{icon ? <span className="material-symbols-rounded text-5xl">{icon}</span> : null}
			{title ? <div className="text-center text-2xl mt-5">{title}</div> : null}
			{content ? <div className="text-center text-lg opacity-50 mt-2">{content}</div> : null}
		</div>
	)
}
