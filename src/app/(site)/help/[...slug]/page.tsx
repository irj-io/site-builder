import Image from 'next/image'
import { notFound } from 'next/navigation'

import imageSrc from '@/assets/tyto-logo-help.svg'
import { Article } from '@/components/article'
import { ArticlesMenu } from '@/components/articles-menu'
import PageLayout from '@/components/page-layout'
import { TableOfContents } from '@/components/table-of-contents'
import { listPages, loadPage } from '@/database/db-adapter'
import { env } from '@/utils/env'
import { captureError } from '@/utils/error'
import { getSlugFromFilePath } from '@/utils/file-utils'
import { ArticleDataSchema } from '@/utils/post-schema'

export const dynamicParams = false

const category = 'help'

export async function generateStaticParams() {
	const dbPath = env('DB_PATH')
	const files = []
	const [pages, listPagesError] = await listPages(category)

	if (listPagesError) {
		captureError(listPagesError, { label: `${category}/[...slug]/page:generateStaticParams` })
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

	return files.map((filePath) => ({
		slug: getSlugFromFilePath(filePath).slice(1),
	}))
}

export default async function HelpPage({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params

	const fullSlug = [category, ...slug]

	const [fileData, error] = await loadPage(fullSlug)

	if (error) {
		captureError(error, { label: `${category}/[...slug]/page`, fullSlug })
		return notFound()
	}

	switch (fileData.type) {
		case 'md':
			const result = ArticleDataSchema.safeParse(fileData.data.frontMatter)
			if (!result.success) {
				captureError(result.error, { label: `${category}/[...slug]/page`, fullSlug })
				return notFound()
			}

			const frontMatter = result.data

			return (
				<PageLayout>
					<div className="container mx-auto px-6 py-8">
						<div className="grid grid-cols-12 gap-6">
							<div className="hidden lg:col-span-2 lg:block">
								<Image src={imageSrc} alt="" className="w-full mb-8" />
								<ArticlesMenu title={'Help'} slug={fullSlug} />
							</div>
							<div className="col-span-12 md:col-span-10 lg:col-span-8 sm:px-0 md:pl-0 md:pr-8 lg:px-16">
								<Article data={frontMatter} Markdown={fileData.data.nodes} />
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
		case 'yaml':
			const yaml = fileData.data.content

			return (
				<PageLayout announcementProps={yaml?.announcementBar} headerProps={yaml?.header}>
					{fileData.data.nodes}
				</PageLayout>
			)
	}
}
