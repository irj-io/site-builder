import { promises as fs } from 'fs'

export const getIsDirectory = async (filePath: string): Promise<boolean> => {
	try {
		const stats = await fs.lstat(filePath)
		// If is directory
		if (stats.isDirectory()) {
			return true
		}
	} catch {}

	return false
}
