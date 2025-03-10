import { join } from 'node:path'

export type EnvironmentVariables = 'DB_PATH'

export const env = (key: string): string => {
	switch (key) {
		case 'DB_PATH':
			return join('public', process.env[key] || '')
	}
	return process.env[key] || ''
}
