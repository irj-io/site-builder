import { promises as fs } from 'node:fs'

export type FileType = 'yaml' | 'markdown' | 'unknown'

const fileExists = async (filepath: string): Promise<boolean> => {
	try {
		await fs.access(filepath)
		return true
	} catch {
		return false
	}
}

export const getFileType = async (basePath: string): Promise<FileType> => {
	try {
		if (await fileExists(`${basePath}.yaml`)) return 'yaml'
		if (await fileExists(`${basePath}.yml`)) return 'yaml'

		if (await fileExists(`${basePath}.md`)) return 'markdown'
		if (await fileExists(`${basePath}.mdx`)) return 'markdown'

		return 'unknown'
	} catch {
		return 'unknown'
	}
}
