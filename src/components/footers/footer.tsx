import { Action } from '../actions/action'
import type { Footer, FooterColumn } from './footer-schema'

export function FooterColumn(props: FooterColumn) {
	const { title, content } = props

	return (
		<div>
			{title ? <div className="text-base font-medium mb-2">{title}</div> : null}
			{content ? (
				<ul className="flex flex-col gap-1">
					{content.map((action, index) => (
						<li key={`footer-action-${index}`}>
							<Action {...action} />
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export function Footer(props: Footer) {
	const { columns = [], bottomSection, topSection } = props

	return (
		<footer className="container mx-auto p-16">
			{topSection ? <div className="text-sm text-center mb-12">{topSection.content}</div> : null}
			<div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-2">
				{columns.map((column, index) => (
					<FooterColumn key={`column-${index}`} {...column} />
				))}
			</div>
			{bottomSection ? (
				<div className="text-sm text-center mt-12">{bottomSection.content}</div>
			) : null}
		</footer>
	)
}
