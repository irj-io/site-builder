import { cn } from '@/utils/cn'
import { MdContent } from '../md-content'
import { SectionHeader } from '../section/section-header'
import type { ContentBoxProps } from './config'

export function ContentBox(props: ContentBoxProps) {
	const { align, className, content, title, subtitle } = props

	return (
		<div className={cn('container mx-auto flex flex-col px-6 py-4', `text-${align}`, className)}>
			<SectionHeader title={title} subtitle={subtitle} />

			{content ? <MdContent className={'mt-6'} markdown={content} /> : null}
		</div>
	)
}
