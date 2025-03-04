import { notFound } from 'next/navigation'

import { MarkdownContent } from '@/components/markdown-content'
import PageLayout from '@/components/page-layout'
import { loadPage } from '@/database/db-adapter'
import { captureError } from '@/utils/error'

export async function DefaultPage({ params }: { params: Promise<{ slug?: string[] }> }) {
	const { slug } = await params

	const [fileData, error] = await loadPage(slug)

	if (error) {
		captureError(error, { label: 'DefaultPage', slug })
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
