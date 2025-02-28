import { listPages } from '@/database/db-adapter'
import { env } from '@/utils/env'
import { captureError } from '@/utils/error'
import { getSlugFromFilePath } from '@/utils/file-utils'

export async function getStaticParamsFromFiles() {
	const dbPath = env('DB_PATH')
	const files = []
	const [pages, listPagesError] = await listPages()

	if (listPagesError) {
		captureError(listPagesError, { label: '[...slug]/page:generateStaticParams' })
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

	return files.map((filePath) => ({
		slug: getSlugFromFilePath(filePath),
	}))
}
