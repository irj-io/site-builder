import { join } from 'node:path'

export type EnvironmentVariables = 'DB_PATH'

export const env = (key: string): string => {
	switch (key) {
		case 'DB_PATH':
			return process.env[key] || join(process.cwd(), 'src/content')
	}
	return process.env[key] || ''
}
