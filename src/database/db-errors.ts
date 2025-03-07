import type { EnvironmentVariables } from '../utils/env'

export class EnvVarError extends Error {
	constructor(envVar: EnvironmentVariables, options?: ErrorOptions) {
		const message = `Environment variable not defined: ${envVar}`
		super(message, options)
	}
}

export class UnsupportedFileError extends Error {
	constructor(filePath: string, options?: ErrorOptions) {
		const message = `Invalid or unsupported file type: ${filePath}`
		super(message, options)
	}
}
