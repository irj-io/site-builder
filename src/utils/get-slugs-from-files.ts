'use server'

import { listPages } from '../database/db-adapter'
import { env } from './env'
import { captureError } from './error'
import { mapFilePathsToSlugs } from './file-utils'

export async function getSlugsFromFiles(category = ''): Promise<string[][]> {
	const dbPath = env('DB_PATH')
	const files = []
	const [pages, listPagesError] = await listPages(category)

	if (listPagesError) {
		captureError(listPagesError, {
			label: `${category ? category + '/' : ''}[...slug]/page:generateStaticParams`,
		})
		return []
	}

	for (const page of pages) {
		// Filter out pages that have published set to false
		if (!page.published) {
			continue
		}

		files.push(
			page.filePath
				.replace(dbPath, '')
				.replace(/^\//, '') // Remove starting `/`
				.replace(/\.mdx?$/, '')
				.replace(/\.ya?ml$/, '')
		)
	}

	try {
		return mapFilePathsToSlugs(files)
	} catch {
		return []
	}
}
