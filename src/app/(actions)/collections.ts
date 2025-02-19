import { listCollections, loadFile, parseFile } from '@/database/db-adapter'
import { captureError } from '@/utils/error'
import { isYamlCollection, YamlCollectionDetail, YamlCollectionSchema } from '@/utils/yaml-schema'

export async function getCollection(collectionId: string): Promise<YamlCollectionDetail | null> {
	const [files, listError] = await listCollections()

	// TODO: handle this better than throwing
	if (listError) {
		captureError(listError)
		return null
	}

	const validationErrors = []
	for (const file of files) {
		const [content, loadFileError] = await loadFile(file)

		if (loadFileError) {
			captureError(loadFileError, { label: 'getCollection:loadFile' })
			continue
		}

		const [result, parseFileError] = await parseFile(file, content)

		if (parseFileError) {
			captureError(parseFileError, { label: 'getCollection:parseFile' })
			continue
		}

		if (result.type === 'yaml') {
			if (isYamlCollection(result.data.content)) {
				const collections = result.data.content.collections
				return collections[collectionId]
			} else {
				const schemaResult = YamlCollectionSchema.safeParse(result.data.content)
				validationErrors.push(schemaResult.error)
			}
		}
	}

	console.groupCollapsed('schema debugging')
	console.debug(validationErrors)
	console.groupEnd()
	const error = new Error(`Failed to find collection for id:${collectionId}`)
	captureError(error)

	return null
}
