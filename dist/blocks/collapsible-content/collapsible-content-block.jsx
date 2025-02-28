import { getSectionProps, Section } from '@/components/section/section';
import { SectionHeader } from '@/components/section/section-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
export function CollapsibleContentBlock(props) {
    const { title, items = [], section } = props;
    return (<Section {...getSectionProps(section, { className: 'flex flex-col px-8 py-20' })}>
			<div className="container mx-auto max-w-4xl">
				<SectionHeader titleClassName="mb-12" title={title}/>

				<Accordion type="single" collapsible>
					{items.map((item, index) => (<AccordionItem key={`item-${index}`} value={`item-${index}`}>
							<AccordionTrigger className="text-xl">{item.title}</AccordionTrigger>
							<AccordionContent className="text-lg">{item.content}</AccordionContent>
						</AccordionItem>))}
				</Accordion>
			</div>
		</Section>);
}
//# sourceMappingURL=collapsible-content-block.jsx.map