import React from 'react'

import { getSectionProps, Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { BlockProps } from '../block-types'
import { FaqProps } from './config'

function FaqItem(props: FaqProps['items'][0]) {
	const { title, content } = props

	return (
		<div className="mb-10">
			<div className="text-xl font-bold mb-2">{title}</div>
			<div className="text-lg text-foreground/60 whitespace-pre-wrap">{content}</div>
		</div>
	)
}

export function FaqBlock(props: BlockProps<FaqProps>) {
	const { title, subtitle, items = [], section } = props

	return (
		<Section {...getSectionProps(section, { className: 'flex flex-col px-8 py-20' })}>
			<div className="container mx-auto max-w-4xl">
				<SectionHeader title={title} subtitle={subtitle} />

				<div className="grid grid-cols-2 gap-12">
					<div>
						{items
							.filter((_, index) => index % 2 === 0)
							.map((item, index) => (
								<FaqItem key={`faq-${index}`} {...item} />
							))}
					</div>
					<div>
						{items
							.filter((_, index) => index % 2 === 1)
							.map((item, index) => (
								<FaqItem key={`faq-${index}`} {...item} />
							))}
					</div>
				</div>
			</div>
		</Section>
	)
}
