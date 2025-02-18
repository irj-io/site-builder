import { promises as fs } from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

import { MarkdownContent } from '@/components/markdown-content'
import PageLayout from '@/components/page-layout'
import { loadPage } from '@/database/db-adapter'
import { captureError } from '@/utils/error'

const dbPath = process.env.DB_PATH || 'src/content/'
const dbDirectory = path.join(process.cwd(), dbPath)

export const dynamicParams = false

export async function generateStaticParams() {
	let filePaths = await fs.readdir(dbDirectory, { recursive: true })
	const files = []

	filePaths = filePaths
		.filter((filePath) => !/\/images\/?/.test(filePath))
		.filter((filePath) => !/global.ya?ml$/.test(filePath))

	for (const filePath of filePaths) {
		const stats = await fs.lstat(path.join(dbDirectory, filePath))
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

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params

	const [fileData, error] = await loadPage(slug)

	if (error) {
		captureError(error, { label: '[...slug]/page', slug })
		return notFound()
	}

	switch (fileData.type) {
		case 'md':
			return (
				<PageLayout>
					<div className="container mx-auto px-6 py-8">
						<div className="max-w-3xl mx-auto">
							<MarkdownContent data={fileData.data.frontMatter} Markdown={fileData.data.nodes} />
						</div>
					</div>
				</PageLayout>
			)
		case 'yaml':
			const yaml = fileData.data.content

			return (
				<PageLayout announcementProps={yaml?.announcementBar} headerProps={yaml?.header}>
					{fileData.data.nodes}
				</PageLayout>
			)
	}
}
