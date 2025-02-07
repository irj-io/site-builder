import { getSectionProps, Section } from '@/components/section/section'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { BlockProps } from '../block-types'
import { CollapsibleContentProps } from './config'

export function CollapsibleContentBlock(props: BlockProps<CollapsibleContentProps>) {
	const { title, items = [], section } = props

	return (
		<Section {...getSectionProps(section, { className: 'flex flex-col px-8 py-20' })}>
			<div className="container mx-auto max-w-4xl">
				{title ? <div className="text-4xl text-center mb-12">{title}</div> : null}

				<Accordion type="single" collapsible>
					{items.map((item, index) => (
						<AccordionItem key={`item-${index}`} value={`item-${index}`}>
							<AccordionTrigger className="text-xl">{item.title}</AccordionTrigger>
							<AccordionContent className="text-lg">{item.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</Section>
	)
}
