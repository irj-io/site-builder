type EnvironmentVariables = 'DB_PATH'

export class EnvVarError extends Error {
	constructor(envVar: EnvironmentVariables, options?: ErrorOptions) {
		const message = `Environment variable not defined: ${envVar}`
		super(message, options)
	}
}
