import { promises as fs } from 'node:fs'
import path from 'node:path'

import { parseMarkdown } from '@/app/(site)/[...slug]/utils'

const contentDir = path.join(process.cwd(), 'src/content/')

/**
 * Get all markdown files in a subdirectory of `content/`
 */
export const getAllArticles = async (collection: string) => {
	const parentPath = path.join(contentDir, collection)
	const filePaths = await fs.readdir(parentPath, {
		recursive: true,
	})

	const matterData = []

	// Make the 'Getting Started' page show first
	// TODO: move this out of here
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
		matterData.push({
			data: matter.data,
			href: `/help/${hrefFragment}`,
			slug: `help/${hrefFragment}`.split(RegExp(path.sep)),
		})
	}

	return matterData
}
