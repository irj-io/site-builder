import { promises as fs } from 'node:fs'
import path from 'node:path'
import { ReactNode } from 'react'

import { MarkdownContent } from '@/components/markdown-content'
import PageLayout from '@/components/page-layout'
import { getIsDirectory } from '@/utils/content-parsing'
import { getFileType } from '@/utils/file-utils'
import { getAvatarImageUrl } from '@/utils/gravatar'
import { parseMarkdown } from '@/utils/markdown'
import { parseLayout } from '@/utils/parse-layout'
import { MarkdownData, MarkdownDataSchema } from '@/utils/post-schema'

const postsDirectory = path.join(process.cwd(), 'src/content/')

export const dynamicParams = false

export async function generateStaticParams() {
	const filePaths = await fs.readdir(postsDirectory, { recursive: true })

	const files = []
	for (const filePath of filePaths) {
		const stats = await fs.lstat(path.join(postsDirectory, filePath))
		if (!stats.isDirectory()) {
			files.push(filePath.replace(/\.mdx?$/, '').replace(/\.ya?ml$/, ''))
		}
	}

	return files.map((filePath) => {
		const segments = filePath.split(path.sep).filter((segment) => segment !== 'index')
		return {
			slug: [...segments],
		}
	})
}

export async function getPostData(
	filePath: string,
	slug: string[]
): Promise<[MarkdownData, ReactNode]> {
	const fileContents = await fs.readFile(filePath, 'utf8')

	const { file, matter } = await parseMarkdown(fileContents, slug)

	// Combine the data with the id and contentHtml
	return [
		MarkdownDataSchema.parse({
			_contentHtml: file.value,
			slug,
			authorAvatarUrl: getAvatarImageUrl(matter.data.authorEmail),
			...matter.data,
		}),
		file.result,
	]
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params

	let fullPath = path.join(postsDirectory, path.join(...slug))
	const isDirectory = await getIsDirectory(fullPath)
	if (isDirectory) {
		fullPath = path.join(fullPath, 'index')
	}

	const fileType = await getFileType(fullPath)

	if (fileType === 'markdown') {
		const [postData, Markdown] = await getPostData(`${fullPath}.md`, slug)

		return (
			<PageLayout>
				<div className="container mx-auto px-6 py-8">
					<div className="max-w-3xl mx-auto">
						<MarkdownContent data={postData} Markdown={Markdown} />
					</div>
				</div>
			</PageLayout>
		)
	} else if (fileType === 'yaml') {
		const { default: yaml } = await import(`@/content/${slug.join('/')}.yaml`)
		const layoutComponents = await parseLayout(yaml)

		return (
			<PageLayout announcementProps={yaml?.announcementBar} headerProps={yaml?.header}>
				{layoutComponents}
			</PageLayout>
		)
	} else {
		throw new Error(`Unsupported file type for path: ${fullPath}`)
	}
}
