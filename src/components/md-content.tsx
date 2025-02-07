import { ComponentProps } from 'react'

import { parseMarkdownContent } from '@/utils/markdown'

interface MdContentProps extends ComponentProps<'p'> {
	markdown: string
}

export async function MdContent({ markdown, ...props }: MdContentProps) {
	return <span {...props}>{await parseMarkdownContent(markdown)}</span>
}
