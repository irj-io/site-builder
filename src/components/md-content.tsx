import { HTMLAttributes } from 'react'

import { parseMarkdownContent } from '@/utils/markdown'

interface DataAttributes {
	[key: `data-${string}`]: string | number | boolean | undefined
}

interface MdContentProps extends HTMLAttributes<HTMLSpanElement>, DataAttributes {
	markdown: string
}

export async function MdContent({ markdown, ...props }: MdContentProps) {
	return <span {...props}>{await parseMarkdownContent(markdown)}</span>
}
