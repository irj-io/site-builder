import { promises as fs } from 'node:fs'
import path from 'node:path'
import { ReactNode } from 'react'

import { getIsDirectory } from '@/utils/content-parsing'
import { parseLayout } from '@/utils/parse-layout'
import { PostData, PostDataSchema } from '@/utils/post-schema'
import { Post } from './post'
import { parseMarkdown } from './utils'

const postsDirectory = path.join(process.cwd(), 'src/content/help/')

export const dynamicParams = false

export async function generateStaticParams() {
	const filePaths = await fs.readdir(postsDirectory, { recursive: true })

	const files = []
	for (const filePath of filePaths) {
		const stats = await fs.lstat(path.join(postsDirectory, filePath))
		if (!stats.isDirectory()) {
			files.push(filePath.replace(/\.mdx?$/, ''))
		}
	}

	return files.map((filePath) => {
		const segments = filePath.split(path.sep).filter((segment) => segment !== 'index')
		return {
			slug: ['help', ...segments],
		}
	})
}

export async function getPostData(slug: string[]): Promise<[PostData, ReactNode]> {
	let fullPath = path.join(postsDirectory, path.join(...slug))
	const isDirectory = await getIsDirectory(fullPath)
	if (isDirectory) {
		fullPath = path.join(fullPath, 'index')
	}
	const fileContents = await fs.readFile(`${fullPath}.md`, 'utf8')

	const { file, matter } = await parseMarkdown(fileContents)

	// Combine the data with the id and contentHtml
	return [
		PostDataSchema.parse({
			_contentHtml: file.value,
			slug: ['help', ...slug],
			...matter.data,
		}),
		file.result,
	]
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params

	if (slug[0] === 'help') {
		const postPath: string[] = slug.slice(1)
		const [postData, Markdown] = await getPostData(postPath)

		return <Post data={postData} Markdown={Markdown} />
	} else {
		const { default: yaml } = await import(`@/content/${slug.join('/')}.yaml`)
		console.log('yaml', yaml)
		const layoutComponents = await parseLayout(yaml)

		return <>{layoutComponents}</>
	}
}
