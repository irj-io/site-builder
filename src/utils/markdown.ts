import path from 'node:path'
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
import { remarkTransformImages } from '@/lib/remark-transform-images'

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

const rewriteImagePaths = (matter: GrayMatterFile<string>, slug: string[]) => {
	for (const key in matter.data) {
		const value = matter.data[key]
		if (typeof value === 'string' && value.startsWith('./images/')) {
			const fileName = path.basename(value)
			matter.data[key] = `/assets/images/${path.join(...slug)}/${fileName}`
		}
	}
	return matter
}

export const parseMarkdown = async (
	fileContents: string,
	slug: string[]
): Promise<ParseMarkdownResult> => {
	// Use gray-matter to parse the post metadata section
	const matterResult = rewriteImagePaths(matter(fileContents), slug)

	// Use remark to convert markdown into HTML string
	const file = await unified()
		.use(remarkParse, { fragment: true })
		.use(remarkGfm)
		.use(remarkFlexibleToc)
		.use(remarkTransformImages({ slug }))
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
