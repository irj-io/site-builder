'use server'

import { listPages } from '../database/db-adapter'
import { env } from './env'
import { captureError } from './error'
import { mapFilePathsToSlugs } from './file-utils'

export async function getStaticParamsFromFiles(category = '') {
	const dbPath = env('DB_PATH')
	const files = []
	const [pages, listPagesError] = await listPages(category)

	if (listPagesError) {
		captureError(listPagesError, {
			label: `${category ? category + '/' : ''}[...slug]/page:generateStaticParams`,
		})
		return []
	}

	for (const filePath of pages) {
		files.push(
			filePath
				.replace(dbPath, '')
				.replace(/\.mdx?$/, '')
				.replace(/\.ya?ml$/, '')
		)
	}

	try {
		const slugs = await mapFilePathsToSlugs(files)
		return slugs
	} catch {
		return []
	}
}
