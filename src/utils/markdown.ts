import matter, { GrayMatterFile } from 'gray-matter'
import { createElement, ReactNode } from 'react'
import jsxRuntime from 'react/jsx-runtime'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeReact, { Components } from 'rehype-react'
import rehypeSanitize from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import remarkFlexibleToc from 'remark-flexible-toc'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import {
	MdBlockquote,
	MdCode,
	MdH1,
	MdH2,
	MdH3,
	MdH4,
	MdH5,
	MdH6,
	MdImg,
	MdLink,
	MdOl,
	MdParagraph,
	MdUl,
} from '@/components/markdown-components'

interface TocItem {
	depth: number
	href: string
	numbering: [number, number]
	parent: string
	value: string
}

interface ParseMarkdownResult {
	file: {
		data: {
			toc: TocItem[]
		}
		value: string
		result: ReactNode
	}
	matter: GrayMatterFile<string>
}

const components: Partial<Components> = {
	h1: MdH1,
	h2: MdH2,
	h3: MdH3,
	h4: MdH4,
	h5: MdH5,
	h6: MdH6,
	p: MdParagraph,
	blockquote: MdBlockquote,
	ul: MdUl,
	ol: MdOl,
	code: MdCode,
	a: MdLink,
	img: MdImg,
}

export const parseMarkdown = async (fileContents: string): Promise<ParseMarkdownResult> => {
	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents)

	// Use remark to convert markdown into HTML string
	const file = await unified()
		.use(remarkParse, { fragment: true })
		.use(remarkGfm)
		.use(remarkFlexibleToc)
		.use(remarkRehype)
		.use(rehypeSanitize)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings)
		.use(rehypeReact, {
			Fragment: jsxRuntime.Fragment,
			jsx: jsxRuntime.jsx,
			jsxs: jsxRuntime.jsxs,
			createElement,
			components,
		})
		.process(matterResult.content)

	return {
		file,
		matter: matterResult,
	}
}
