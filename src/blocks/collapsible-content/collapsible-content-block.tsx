import React from 'react'

import { getSectionProps, Section } from '@/components/section/section'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { CollapsibleContent } from '@/utils/page-schema'
import { BlockProps } from '../block-types'

export function CollapsibleContentBlock(props: BlockProps<CollapsibleContent>) {
	const { title, items = [], section } = props

	return (
		<Section {...getSectionProps(section, { className: 'flex flex-col px-8 py-20' })}>
			<div className="container mx-auto max-w-4xl">
				{title ? <div className="text-4xl text-center mb-12">{title}</div> : null}

				<Accordion type="single" collapsible>
					{items.map((item, index) => (
						<AccordionItem key={`item-${index}`} value={`item-${index}`}>
							<AccordionTrigger>{item.title}</AccordionTrigger>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</Section>
	)
}
