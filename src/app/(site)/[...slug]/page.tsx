import { notFound } from 'next/navigation'

import { MarkdownContent } from '@/components/markdown-content'
import PageLayout from '@/components/page-layout'
import { listPages, loadPage } from '@/database/db-adapter'
import { env } from '@/utils/env'
import { captureError } from '@/utils/error'
import { getSlugFromFilePath } from '@/utils/file-utils'

export const dynamicParams = false

export async function generateStaticParams() {
	const dbPath = env('DB_PATH')
	const files = []
	const [pages, listPagesError] = await listPages()

	if (listPagesError) {
		captureError(listPagesError, { label: '[...slug]/page:generateStaticParams' })
		return
	}

	for (const filePath of pages) {
		files.push(
			filePath
				.replace(dbPath, '')
				.replace(/\.mdx?$/, '')
				.replace(/\.ya?ml$/, '')
		)
	}

	return files
		.filter((filePath) => !filePath.includes('help')) // FIXME
		.map((filePath) => ({
			slug: getSlugFromFilePath(filePath),
		}))
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
