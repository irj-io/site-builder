import { join } from 'node:path'

export type EnvironmentVariables = 'DB_PATH'

export const env = (key: string): string => {
	switch (key) {
		case 'DB_PATH':
			return join(process.cwd(), process.env.DB_PATH || 'db-data')
	}
	return process.env[key] || ''
}
