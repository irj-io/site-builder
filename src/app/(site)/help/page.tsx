import { promises as fs } from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'

import { Section } from '@/components/section'
import { cn } from '@/utils/cn'
import { parseMarkdown } from '../[...slug]/utils'

const parentPath = path.join(process.cwd(), 'src/content/help/')
const getAllHelpFiles = async () => {
	const filePaths = await fs.readdir(parentPath, {
		recursive: true,
	})

	const matterData = []

	// Make the 'Getting Started' page show first
	filePaths.sort((a, b) => {
		if (a.includes('getting-started')) {
			return -1
		}
		if (b.includes('getting-started')) {
			return 1
		}
		return 0
	})

	for (const filePath of filePaths) {
		if (!/\.md$/.test(filePath)) {
			continue
		}

		const fileContents = await fs.readFile(`${parentPath}/${filePath}`, 'utf8')
		const { matter } = await parseMarkdown(fileContents)

		const hrefFragment = filePath.replace(/(\/index)?\.md$/, '')
		matterData.push({ data: matter.data, href: `/help/${hrefFragment}` })
	}

	return matterData
}

export default async function Help() {
	const files = await getAllHelpFiles()

	return (
		<Section>
			<div className="container mx-auto px-6 py-16">
				<h1 className="text-5xl font-bold mb-8">Help</h1>
				<div className="grid grid-cols-12 gap-4">
					{files.map((item, index) => (
						<div
							key={`grid-item-${index}`}
							className={cn('aspect-square', {
								'col-span-8 row-span-2': index === 0,
								'col-span-4 row-span-1': index !== 0,
							})}
						>
							<Link
								className="flex flex-col h-full bg-surface rounded-lg shadow overflow-hidden"
								href={item.href}
							>
								<div className="flex-auto min-h-0">
									{item.data.banner && /^\/assets\//.test(item.data.banner) ? (
										<Image
											src={item.data.banner}
											alt={item.data.bannerAlt}
											className={'w-full h-full object-cover object-center'}
											width="800"
											height="800"
										/>
									) : null}
								</div>
								<div className="shrink-0 basis-[120px] h-[120px] px-4 py-4">
									{item.data.title ? <h3 className="text-2xl mb-2">{item.data.title}</h3> : null}
									{item.data.description ? (
										<p className="text-lg text-on-surface/60">{item.data.description}</p>
									) : null}
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</Section>
	)
}
