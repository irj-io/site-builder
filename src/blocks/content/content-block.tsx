import type { ContentBoxProps } from '../../components/content-box/config'
import { ContentBox } from '../../components/content-box/content-box'
import { type ImageProps } from '../../components/media/config'
import { Media } from '../../components/media/media'
import { getSectionProps, Section } from '../../components/section/section'
import { SectionHeader } from '../../components/section/section-header'
import { type TestimonialProps } from '../../components/testimonial/config'
import { Testimonial } from '../../components/testimonial/testimonial'
import { cn } from '../../utils/cn'
import { type BlockProps } from '../block-types'
import { type ContentProps } from './config'

type ContentBlockProps = ContentBoxProps | TestimonialProps | ImageProps

export function Content({ content }: { content: ContentBlockProps }) {
	switch (content.type) {
		case 'contentBox': {
			return <ContentBox {...content} />
		}
		case 'testimonial': {
			return <Testimonial {...content} />
		}
		case 'image': {
			return <Media media={content} />
		}
		default:
			console.error('Unknown content type:', content)
			return null
	}
}

export function ContentBlock(props: BlockProps<ContentProps>) {
	const { columns, title, subtitle, section } = props

	const colCount = [
		'grid-cols-1',
		'grid-cols-1 md:grid-cols-2',
		'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
	]
	const colClass = colCount[columns.length - 1]

	return (
		<Section {...getSectionProps(section, { className: 'py-16' })}>
			<SectionHeader title={title} subtitle={subtitle} />

			<div className={cn('container mx-auto grid gap-y-8 gap-x-16', colClass)}>
				{columns && columns.length > 0
					? columns.map((col, index) => {
							const { content } = col
							return (
								<div key={index} className="flex flex-col">
									{content ? <Content content={content} /> : null}
								</div>
							)
						})
					: null}
			</div>
		</Section>
	)
}
