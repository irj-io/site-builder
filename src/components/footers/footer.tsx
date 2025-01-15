export function Footer(props) {
	const { columns = [], bottomSection, topSection } = props

	return (
		<footer className="container mx-auto p-16">
			{topSection ? <div className="text-sm text-center mb-4">{topSection.content}</div> : null}
			<div className="grid grid-cols-[1fr_1fr_1fr_1fr]">
				{columns.map((column, index) => (
					<div key={`column-${index}`}>{column.content}</div>
				))}
			</div>
			{bottomSection ? (
				<div className="text-sm text-center mt-4">{bottomSection.content}</div>
			) : null}
		</footer>
	)
}
