import { promises as fs } from 'fs'
import path from 'path'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import imageSrc from '@/assets/tyto-logo-help.svg'
import { Article } from '@/components/article'
import { ArticlesMenu } from '@/components/articles-menu'
import PageLayout from '@/components/page-layout'
import { TableOfContents } from '@/components/table-of-contents'
import { loadPage } from '@/database/db-adapter'
import { captureError } from '@/utils/error'

const dbPath = process.env.DB_PATH || 'src/content/'
const dbDirectory = path.join(process.cwd(), dbPath, 'help')

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

	console.log(files)
	return files.map((filePath) => {
		const segments = filePath.split(path.sep).filter((segment) => segment !== 'index')
		return {
			slug: [...segments],
		}
	})
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params

	const fullSlug = ['help', ...slug]
	const [fileData, error] = await loadPage(fullSlug)

	if (error) {
		captureError(error, { label: 'help/[...slug]/page', slug })
		return notFound()
	}

	switch (fileData.type) {
		case 'md':
			return (
				<PageLayout>
					<div className="container mx-auto px-6 py-8">
						<div className="grid grid-cols-12 gap-6">
							<div className="hidden lg:col-span-2 lg:block">
								<Image src={imageSrc} alt="" className="w-full mb-8" />
								<ArticlesMenu title={'Help'} slug={fullSlug} />
							</div>
							<div className="col-span-12 md:col-span-10 lg:col-span-8 sm:px-0 md:pl-0 md:pr-8 lg:px-16">
								<Article data={fileData.data.frontMatter} Markdown={fileData.data.nodes} />
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
