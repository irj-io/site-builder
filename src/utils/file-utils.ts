import { promises as fs } from 'fs'
import path from 'path'

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

		return 'unknown'
	} catch {
		return 'unknown'
	}
}

export const getExtension = async (basePath: string): Promise<string> => {
	try {
		if (await fileExists(`${basePath}.yaml`)) return 'yaml'
		if (await fileExists(`${basePath}.yml`)) return 'yml'

		if (await fileExists(`${basePath}.md`)) return 'md'

		return path.extname(basePath).toLowerCase().slice(1) || 'unknown'
	} catch {
		return 'unknown'
	}
}

export const getSlugFromFilePath = (filePath: string) => {
	return filePath
		.replace(/\.[A-Za-z0-9]+?$/, '')
		.split(path.sep)
		.filter((segment) => segment !== 'index')
}
