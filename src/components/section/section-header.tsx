import { TypographyH2, TypographyLead } from '../typography/typography'

interface SectionHeaderProps {
	title?: string
	subtitle?: string
}

export function SectionHeader(props: SectionHeaderProps) {
	const { title, subtitle } = props

	return (
		<>
			{title ? (
				<TypographyH2 className="whitespace-pre-wrap text-center mb-3">{title}</TypographyH2>
			) : null}
			{subtitle ? <TypographyLead className="text-center mb-3">{subtitle}</TypographyLead> : null}
		</>
	)
}
