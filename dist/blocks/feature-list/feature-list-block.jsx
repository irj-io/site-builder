import { getSectionProps, Section } from '@/components/section/section';
import { SectionHeader } from '@/components/section/section-header';
import { FeatureListItem } from './feature-list-item';
export function FeatureListBlock(props) {
    const { title, subtitle, features, section } = props;
    return (<Section {...getSectionProps(section, { className: 'py-16' })}>
			<SectionHeader title={title} subtitle={subtitle}/>
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 py-8">
				{features.map((feature, index) => (<FeatureListItem key={`feature-${index}`} {...feature}/>))}
			</div>
		</Section>);
}
//# sourceMappingURL=feature-list-block.jsx.map