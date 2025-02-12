import { cn } from '@/utils/cn'
import { parseComponents } from '@/utils/parse-components'
import { TypographyH2, TypographyLead } from '../typography/typography'

interface SectionHeaderProps {
	title?: string
	titleClassName?: string
	subtitle?: string
	subtitleClassName?: string
}

export function SectionHeader(props: SectionHeaderProps) {
	const { title, subtitle, titleClassName, subtitleClassName } = props

	return (
		<>
			{title ? (
				<TypographyH2 className={cn('whitespace-pre-wrap text-center mb-3', titleClassName)}>
					{parseComponents(title)}
				</TypographyH2>
			) : null}
			{subtitle ? (
				<TypographyLead className={cn('text-center mb-3', subtitleClassName)}>
					{subtitle}
				</TypographyLead>
			) : null}
		</>
	)
}
