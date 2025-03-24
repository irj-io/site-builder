import { cn } from '../../utils/cn'
import { parseComponents } from '../../utils/parse-components'
import { TypographyH2, TypographyLead } from '../typography/typography'

interface SectionHeaderProps {
	title?: string
	titleClassName?: string
	subtitle?: string
	subtitleClassName?: string
}

export function SectionHeader(props: SectionHeaderProps) {
	const { title, subtitle, titleClassName, subtitleClassName } = props

	const sharedClasses = 'max-w-4xl mx-auto px-6 text-center text-balance'

	return (
		<>
			{title ? (
				<TypographyH2 className={cn(sharedClasses, 'whitespace-pre-wrap mb-3', titleClassName)}>
					{parseComponents(title)}
				</TypographyH2>
			) : null}
			{subtitle ? (
				<TypographyLead className={cn(sharedClasses, 'mb-3', subtitleClassName)}>
					{subtitle}
				</TypographyLead>
			) : null}
		</>
	)
}
