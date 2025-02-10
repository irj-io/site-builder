import { promises as fs } from 'fs'
import path from 'path'

import { parseMarkdownPage } from '@/utils/markdown'
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

	for (const filePath of filePaths) {
		if (!/\.md$/.test(filePath)) {
			continue
		}

		const article = await readArticle(`${parentPath}/${filePath}`)
		matterData.push(article)
	}

	matterData.sort((a, b) => {
		let aOrder = 1000
		let bOrder = 1000
		if ('order' in a.data && !isNaN(Number(a.data.order))) {
			aOrder = Number(a.data.order)
		}
		if ('order' in b.data && !isNaN(Number(b.data.order))) {
			bOrder = Number(b.data.order)
		}
		return aOrder - bOrder
	})

	return matterData
}

const filePathFromSlug = async (slug: string[]) => {
	let filePath = path.join(contentDir, ...slug)
	const isDirectory = await getIsDirectory(filePath)

	if (isDirectory) {
		filePath += '/index'
	}

	try {
		const exists = await fs.access(`${filePath}.md`).then(() => true)

		if (exists) {
			return `${filePath}.md`
		}
	} catch {}

	try {
		const exists = await fs.access(`${filePath}.yaml`).then(() => true)

		if (exists) {
			return `${filePath}.yaml`
		}
	} catch {}

	return ''
}

const readArticle = async (filePath: string) => {
	const hrefFragment = filePath.replace(contentDir, '').replace(/(\/index)?\.md$/, '')
	const slug = `${hrefFragment}`.split(RegExp(path.sep))

	const fileContents = await fs.readFile(filePath, 'utf8')
	const { matter, file } = await parseMarkdownPage(fileContents, slug)

	return {
		data: matter.data,
		href: `/${hrefFragment}`,
		slug,
		toc: file.data.toc,
	}
}

export const getArticleData = async (slug: string[]) => {
	const filePath = await filePathFromSlug(slug)
	return readArticle(filePath)
}
