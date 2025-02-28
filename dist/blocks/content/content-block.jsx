import { ContentBox } from '../../components/content-box/content-box';
import { Media } from '../../components/media/media';
import { getSectionProps, Section } from '../../components/section/section';
import { TestimonialVertical } from '../../components/testimonial/testimonial-vertical';
import { cn } from '../../utils/cn';
export function Content({ content }) {
    switch (content.type) {
        case 'contentBox': {
            return <ContentBox {...content}/>;
        }
        case 'testimonial': {
            return <TestimonialVertical {...content}/>;
        }
        case 'image': {
            return <Media media={content}/>;
        }
        default:
            console.error('Unknown content type:', content);
            return null;
    }
}
export function ContentBlock(props) {
    const { columns, section } = props;
    const colCount = ['grid-cols-1', 'grid-cols-2', 'grid-cols-3'];
    const colClass = colCount[columns.length - 1];
    return (<Section {...getSectionProps(section, { className: 'py-16' })}>
			<div className={cn('container mx-auto grid gap-y-8 gap-x-16', colClass)}>
				{columns && columns.length > 0
            ? columns.map((col, index) => {
                const { content } = col;
                return <div key={index}>{content ? <Content content={content}/> : null}</div>;
            })
            : null}
			</div>
		</Section>);
}
//# sourceMappingURL=content-block.jsx.map