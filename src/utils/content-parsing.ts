import { promises as fs } from 'node:fs'

export const getIsDirectory = async (filePath: string) => {
	try {
		const stats = await fs.lstat(filePath)
		// If is directory
		if (stats.isDirectory()) {
			return true
		}
	} catch {
		return false
	}
}
