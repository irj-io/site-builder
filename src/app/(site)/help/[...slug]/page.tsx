import { promises as fs } from 'fs'
import path from 'path'
import Image from 'next/image'
import { ReactNode } from 'react'

import imageSrc from '@/assets/tyto-logo-help.svg'
import { Article } from '@/components/article'
import { ArticlesMenu } from '@/components/articles-menu'
import PageLayout from '@/components/page-layout'
import { TableOfContents } from '@/components/table-of-contents'
import { getIsDirectory } from '@/utils/content-parsing'
import { getFileType } from '@/utils/file-utils'
import { getAvatarImageUrl } from '@/utils/gravatar'
import { parseMarkdownPage } from '@/utils/markdown'
import { parseLayout } from '@/utils/parse-layout'
import { ArticleData, ArticleDataSchema } from '@/utils/post-schema'

const postsDirectory = path.join(process.cwd(), 'src/content/help/')

export const dynamicParams = false

export async function generateStaticParams() {
	let filePaths = await fs.readdir(postsDirectory, { recursive: true })
	const files = []

	filePaths = filePaths.filter((filePath) => !/\/images\/?/.test(filePath))

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

async function getPostData(filePath: string, slug: string[]): Promise<[ArticleData, ReactNode]> {
	const fileContents = await fs.readFile(filePath, 'utf8')

	const { file, matter } = await parseMarkdownPage(fileContents, slug)

	// Combine the data with the id and contentHtml
	return [
		ArticleDataSchema.parse({
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

	const fullSlug = ['help', ...slug]
	const fileType = await getFileType(fullPath)

	if (fileType === 'markdown') {
		const [postData, Markdown] = await getPostData(`${fullPath}.md`, fullSlug)

		return (
			<PageLayout>
				<div className="container mx-auto px-6 py-8">
					<div className="grid grid-cols-12 gap-6">
						<div className="hidden lg:col-span-2 lg:block">
							<Image src={imageSrc} alt="" className="w-full mb-8" />
							<ArticlesMenu title={'Help'} slug={fullSlug} />
						</div>
						<div className="col-span-12 md:col-span-10 lg:col-span-8 sm:px-0 md:pl-0 md:pr-8 lg:px-16">
							<Article data={postData} Markdown={Markdown} />
						</div>
						<div className="hidden md:col-span-2 md:block">
							<div className="sticky top-2 mt-[260px]">
								<TableOfContents slug={fullSlug} />
							</div>
						</div>
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
