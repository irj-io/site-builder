import { promises as fs } from 'node:fs'
import path from 'node:path'

import { parseMarkdown } from '@/utils/markdown'
import { getIsDirectory } from './content-parsing'

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

		const data = await readArticle(`${parentPath}/${filePath}`)
		matterData.push(data)
	}

	return matterData
}

const filePathFromSlug = async (slug: string[]) => {
	let filePath = path.join(contentDir, ...slug)
	const isDirectory = await getIsDirectory(filePath)

	if (isDirectory) {
		filePath += '/index'
	}

	const exists = await fs.access(`${filePath}.md`).then(() => true)

	if (exists) {
		return `${filePath}.md`
	} else {
		return ''
	}
}

const readArticle = async (filePath: string) => {
	const fileContents = await fs.readFile(filePath, 'utf8')
	const { matter, file } = await parseMarkdown(fileContents)

	const hrefFragment = filePath.replace(contentDir, '').replace(/(\/index)?\.md$/, '')
	return {
		data: matter.data,
		href: `/${hrefFragment}`,
		slug: `${hrefFragment}`.split(RegExp(path.sep)),
		toc: file.data.toc,
	}
}

export const getArticleData = async (slug: string[]) => {
	const filePath = await filePathFromSlug(slug)
	return readArticle(filePath)
}
