import { cn } from '@/utils/cn';
import { MdContent } from '../md-content';
import { SectionHeader } from '../section/section-header';
export function ContentBox(props) {
    const { align, className, content, title, subtitle } = props;
    return (<div className={cn('container mx-auto flex flex-col px-6 py-4', `text-${align}`, className)}>
			<SectionHeader title={title} subtitle={subtitle}/>

			{content ? <MdContent className={'mt-6'} markdown={content}/> : null}
		</div>);
}
//# sourceMappingURL=content-box.jsx.map