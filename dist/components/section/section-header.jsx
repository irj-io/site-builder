import { cn } from '../../utils/cn';
import { parseComponents } from '../../utils/parse-components';
import { TypographyH2, TypographyLead } from '../typography/typography';
export function SectionHeader(props) {
    const { title, subtitle, titleClassName, subtitleClassName } = props;
    return (<>
			{title ? (<TypographyH2 className={cn('max-w-4xl mx-auto whitespace-pre-wrap text-center mb-3', titleClassName)}>
					{parseComponents(title)}
				</TypographyH2>) : null}
			{subtitle ? (<TypographyLead className={cn('max-w-4xl mx-auto text-center mb-3', subtitleClassName)}>
					{subtitle}
				</TypographyLead>) : null}
		</>);
}
//# sourceMappingURL=section-header.jsx.map