import { JSX } from 'react'
import { omit, toCamelCase } from 'remeda'

import { ContentBox } from '@/components/content-box'
import { Section } from '@/components/section'
import { cn } from '@/utils/cn'
import type { Content, Testimonial } from '@/utils/page-schema'
import { BlockProps } from '../block-types'
import { TestimonialVertical } from '../testimonial/testimonial-vertical'

const componentMap = {
	contentBox: ContentBox,
	testimonial: TestimonialVertical,
}

function Content({ content }: { content: Testimonial }) {
	let Component:
		| Record<string, (props: BlockProps<any>) => JSX.Element>
		| ((props: BlockProps<any>) => JSX.Element) = componentMap[toCamelCase(content.type)]

	if (typeof Component !== 'function' && content.variant) {
		Component = Component[toCamelCase(content.variant)]
	}

	if (!Component) {
		let componentName = content.type
		if (content.variant) {
			componentName += ` with variant ${content.variant}`
		}
		console.warn(`Component ${componentName} not found`)
		return null
	}
	return <Component {...content} />
}

export function ContentBlock(props: BlockProps<Content>) {
	const { columns, section: _sectionProps } = props

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : null
	const sectionClassName = _sectionProps?.className

	const colCount = ['grid-cols-1', 'grid-cols-2', 'grid-cols-3']
	const colClass = colCount[columns.length - 1]

	return (
		<Section className={cn('py-16', sectionClassName)} {...sectionProps}>
			<div className={cn('container mx-auto grid gap-y-8 gap-x-16', colClass)}>
				{columns && columns.length > 0
					? columns.map((col, index) => {
							const { content } = col
							return <div key={index}>{content ? <Content content={content} /> : null}</div>
						})
					: null}
			</div>
		</Section>
	)
}
