import { promises as fs } from 'node:fs'
import path from 'node:path'

export type FileType = 'yaml' | 'markdown' | 'unknown'

const fileExists = async (filepath: string): Promise<boolean> => {
	try {
		await fs.access(filepath)
		return true
	} catch {
		return false
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
		.replace(/^\//, '')
		.split(path.sep)
		.filter((segment) => segment !== 'index')
}

export const mapFilePathsToSlugs = async (files: string[]) => {
	return files.map((filePath) => getSlugFromFilePath(filePath))
}
