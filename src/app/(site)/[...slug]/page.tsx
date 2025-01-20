import { promises as fs } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

import { parseLayout } from '@/utils/parse-layout'
import { PostData, PostDataSchema } from '@/utils/post-schema'
import { Post } from './post'

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

const getIsDirectory = async (filePath: string) => {
	try {
		const stats = await fs.lstat(filePath)
		// If is directory
		if (stats.isDirectory()) {
			return true
		}
	} catch {
		return false
	}
}

export async function getPostData(slug: string[]): Promise<PostData> {
	let fullPath = path.join(postsDirectory, path.join(...slug))
	const isDirectory = await getIsDirectory(fullPath)
	if (isDirectory) {
		fullPath = path.join(fullPath, 'index')
	}
	const fileContents = await fs.readFile(`${fullPath}.md`, 'utf8')

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents)

	// Use remark to convert markdown into HTML string
	const processedContent = await remark().use(html).process(matterResult.content)
	const contentHtml = processedContent.toString()

	// Combine the data with the id and contentHtml
	return PostDataSchema.parse({
		slug: ['help', ...slug],
		contentHtml,
		...matterResult.data,
	})
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params

	if (slug[0] === 'help') {
		const postPath: string[] = slug.slice(1)
		const postData = await getPostData(postPath)
		return <Post data={postData} />
	} else {
		const { default: yaml } = await import(`@/content/${slug.join('/')}.yaml`)
		const layoutComponents = await parseLayout(yaml)

		return <>{layoutComponents}</>
	}
}
