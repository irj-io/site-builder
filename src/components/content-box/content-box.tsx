import { cn } from '@/utils/cn'
import { MdContent } from '../md-content'
import type { ContentBoxProps } from './config'

export function ContentBox(props: ContentBoxProps) {
	const { align, className, content, title, subtitle } = props

	return (
		<div className={cn('container mx-auto flex flex-col px-6 py-4', `text-${align}`, className)}>
			{title ? <h3 className={'text-3xl font-medium mb-2'}>{title}</h3> : null}
			{subtitle ? <h4 className={'text-2xl mb-8'}>{subtitle}</h4> : null}
			{content ? <MdContent className={'text-lg'} markdown={content} /> : null}
		</div>
	)
}
